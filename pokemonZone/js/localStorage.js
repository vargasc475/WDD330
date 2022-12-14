export default class LocalStorage {
    constructor() {

    }

    

    createLS(id, favorite='off') {
        localStorage.setItem(id, favorite); 
    }

    getLocalS(id) {
        return localStorage.getItem(id);
    }
    
    favoritePokemons(name, id, experience, type, pokeImg, height, stat, types, weight, list) {
        const favPokemon = {};
  
        
        favPokemon['name'] = name; 
        favPokemon['id'] = id;
        favPokemon['experience'] = experience;
        favPokemon['type'] = type;
        favPokemon['pokeImg'] = pokeImg;
        favPokemon['height'] = height;
        favPokemon['stat'] = stat;
        favPokemon['types'] = types;
        favPokemon['weight'] = weight;
        list.push(favPokemon);
        localStorage.setItem('favList', JSON.stringify(list));
    }

    removeFavorite(list, id) {
        
    }
}