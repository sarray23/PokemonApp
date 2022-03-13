export type Type = {
    type: {
        name: string;
        url: string;
    }

};

export type Stat = {
    base_stat: number;
    effort: number;
    stat: {
        name: string,
        url : string
    };
};

export type Ability = {
    ability: {
        name: string;
        url: string;
    }
};

export type GameIndices = {
    game_index: number;
};

export type Sprite = {
    other: {
        home: {
            front_default: string,
        }
    }
};

export type Pokemon = {
    id: number;
    name: string;
    sprites: Sprite,
    description: string;
    image: string;
    types: Type[];
    stats: Stat[];
    height: number;
    weight: number;
    abilities: Ability[];
    game_indices: GameIndices[];
};

export default Pokemon;

