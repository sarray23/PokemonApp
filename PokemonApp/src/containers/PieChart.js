import React, {Component} from 'react';
import {Modal, processColor, ScrollView, Text, View} from 'react-native';
import {PieChart} from 'react-native-charts-wrapper'
import Header from "../components/Header/header";
import styles from "./styles/pie-chart-style";
import {getRandomColor} from "../utils";

export default class PieChartComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stats: [],
            dataset: {},
            legendList: [],
            pokemon: {},
            pie: {
                title: 'Pokemon stats',
                detail: {
                    time_value_list: [],
                    legend_list: [],
                    dataset: {
                        Test1: {},

                    }
                }
            },
        }
    }

    componentDidMount() {
        let legendList = [];
        let dataset = [];
        //get pokemons array from pokemon details to display stats
        let stats = this.props.pokemon.stats;
        stats.forEach(item => {
            legendList.push(item.stat.name);
            dataset.push({'2022': item.base_stat});
        })

        let returned_dataset = legendList.reduce(function (obj, v) {
            dataset.forEach(item => {
                obj[v] = item;
            })
            return obj;
        }, {});
        this.setState({legendList: legendList, dataset: returned_dataset});

        let pie = {
            title: 'Pokemon stats',
            detail: {
                time_value_list: [2022],
                legend_list: legendList,
                dataset: legendList.reduce(function (obj, v) {
                    dataset.forEach(item => {
                        obj[v] = item;
                    })
                    return obj;
                }, {})
            }
        };
        this.setState({pie: pie})
    }


    renderPie() {
        const time = this.state.pie.detail.time_value_list
        const legend = this.state.pie.detail.legend_list
        const dataset = this.state.pie.detail.dataset
        var dataSetsValue = []
        var dataStyle = {}
        var legendStyle = {}
        var descStyle = {}
        var valueLegend = []
        var colorLegend = []

        legend.map((legendValue) => {
            time.map((timeValue) => {
                const datasetValue = dataset[legendValue]
                const datasetTimeValue = datasetValue[timeValue]
                valueLegend.push({value: parseInt(datasetTimeValue), label: legendValue})
            })
            colorLegend.push(processColor(getRandomColor()))
        })

        const datasetObject = {
            values: valueLegend,
            label: '',
            config: {
                colors: colorLegend,
                valueTextSize: 20,
                valueTextColor: processColor('green'),
                sliceSpace: 5,
                selectionShift: 13
            }
        }
        dataSetsValue.push(datasetObject)

        legendStyle = {
            enabled: true,
            textSize: 12,
            form: 'CIRCLE',
            position: 'BELOW_CHART_RIGHT',
            wordWrapEnabled: true
        }
        dataStyle = {
            dataSets: dataSetsValue
        }
        descStyle = {
            text: '',
            textSize: 15,
            textColor: processColor('darkgray')
        }

        return (
            <View>
                <PieChart
                    style={styles.bar}
                    chartDescription={descStyle}
                    data={dataStyle}
                    legend={legendStyle}
                    highlights={[{x: 2}]}/>
            </View>
        )
    }


    render() {
        return (
            <Modal
                useNativeDriver={true}
                animationType="slide"
                transparent={true}
                visible={this.props.modalVisible}
            >
                <ScrollView style={styles.container}>
                    <Header title="Stats" backgroundColor="#fff"
                            back={this.back}
                            displayIconBack={true}
                            nav={this.props.hideModal}/>

                    <Text style={styles.title}>
                        Pie Chart
                    </Text>
                    {this.renderPie()}

                </ScrollView>
            </Modal>
        );
    }
}

