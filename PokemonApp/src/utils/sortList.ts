function check_sort (pokemonsList: any, direction : string) {
    if (direction === "DESC") pokemonsList.sort((obj1: any, obj2: any) => {
        return ((obj1.game_indices[0]).game_index - (obj2.game_indices[0]).game_index);
    });
    if (direction === "ASC") pokemonsList.sort((obj1: any, obj2: any) => {
        return ((obj2.game_indices[0]).game_index - (obj1.game_indices[0]).game_index);
    });
}

export  {check_sort}