import PokeModel from "./model.js";
import PokeView from "./view.js";
import LocalStorage from "./localStorage.js";

export default class PokeController {
    constructor() {
        this.baseUrl = 'https://pokeapi.co/api/v2/pokemon/'
        this.pokeModel = new PokeModel();
        this.pokeView = new PokeView();
        this.localStorage = new LocalStorage();
        this.favoriteList = [];
    }

    // In this method is used the model and view classes to set and display pokemon data
    async testAPI(baseUrl = 'https://pokeapi.co/api/v2/pokemon/') {
        const pokeLocal = localStorage.getItem('favList');
        if (pokeLocal) {this.favoriteList = JSON.parse(pokeLocal);}
        

        // GET THE ELEMENTS OF THE HEADER TO DISPLAY THE MENU
        const menu = document.getElementById('menu');
        const back = document.getElementById('back');
        const menuDiv = document.getElementById('menu-div');
        const linksDiv = document.getElementById('links-div');


        // MODULE TO DISPLAY THE BUTTON AND DISPLAY THE SUBPAGES
        this.pokeModel.menuOptions(menu, back, linksDiv, menuDiv)
    
        /* Get the HTML elements of cards sections to remove it if they 
        are created after clicked the next or prev buttons to display
        the nexts or prevs pages*/ 
        const deleteCards = document.getElementById('poke-cards');
        const deletePrev = document.getElementById('prev');
        const deleteNext = document.getElementById('next');
        
        

        if (deleteCards || deletePrev || deleteNext) {
            deleteCards.remove();
            deletePrev.remove();
            deleteNext.remove();
        } 


        /* Create DIV element to hold the poke cards and buttons*/
        const pokeCards = document.createElement('div');
        pokeCards.setAttribute('id', 'poke-cards');
        const body = document.getElementById('cards-section');
        
        if (body) {
            body.appendChild(pokeCards);
            this.pokeView.createButtons();

            
            const pokemon = this.pokeModel.getPokeAapi(baseUrl);

            // Get the JSON and display it on the screen
            pokemon.then((data) => {
                for(let i = 0; i < data.results.length; i++) {
                    this.pokeModel.getPokeAapi(data.results[i].url)
                    .then((data) => {this.pokeView.getPokeSimpleCard(data, this.favoriteList)});
                }
                console.log(this.favoriteList)
                window.scrollTo(0,0);  
                
                /* Enable the buttons to see the next and prev page*/
                if (data.next) {
                    const nextBtn = document.getElementById('next');
                    
                    nextBtn.addEventListener('click', () => {
                        this.testAPI(data.next)
                        
                    });
                }
                if (data.previous) {
                    const prevBtn = document.getElementById('prev');
                    prevBtn.addEventListener('click', () => {
                        this.testAPI(data.previous)
                    });
                } else {
                    const prevBtn = document.getElementById('prev');
                    prevBtn.style.display = 'none';
                }
            });

            
        } else {
            this.pokeView.displayFavoriteCards(localStorage.getItem('favList'))
        }
        
        

        
    }
}