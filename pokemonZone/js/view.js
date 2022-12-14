import LocalStorage from "./localStorage.js";

export default class PokeView {
    constructor() {
        this.localS = new LocalStorage();
    }

    /* Module to create the elements to display 
    a simple information about pokemons */
    getPokeSimpleCard(data, favoriteList) {

        /* Get the information from JSON API*/ 
        const pokeName = data.name;
        const id = data.id;
        const experience = data.base_experience;
        const type = data.types[0].type.name;
        const pokeImg = data.sprites.front_default;
        const pokeHeight = data.height;
        const pokeStat = data.stats;
        const pokeTypes = data.types;
        const pokeWeight = data.weight;
        

        /* Create the elements to display the information*/
        const card = document.createElement('section');
        this.setAttributeType(type, card);
        card.classList.add('normal');

    
        const details = document.createElement('button');
        const back = document.createElement('button');
       

       
        
        
        // GET HTML ELEMENTS TO DISPLAY The CARDS IN FAVORITE SUBPAGE
        


    
        /* Get the div element and append the pokemon information in it*/
        const pokeCards = document.getElementById('poke-cards');
    
        card.appendChild(this.createImg(pokeImg, pokeName));
        card.appendChild(this.createPName(pokeName));
        card.appendChild(this.createPId(id));
        card.appendChild(this.createPExperience(experience));

        // CREATE AND APPEND THE STATS TO THE CARDS
        this.createStats(pokeStat, card, details, back)
        
        card.appendChild(this.createPType(type));

        // APPEND THE SECOND TYPE OF EACH POKEMON IF IT'S TRUE
        

        // MODULE TO CREATE MORE AND BACK BUTTONS
        this.createMoreAndBackButtons(details, back, card, this.createHeight(pokeHeight, card), this.createWeight(pokeWeight, card), this.createTypes(pokeTypes, card))
        

        card.appendChild(details);
        card.appendChild(back);
        // card.appendChild(this.createFavoriteBtn(id));

        const favoriteOff = document.createElement('img');
        favoriteOff.setAttribute('alt', 'pokeball black&white icon');
        favoriteOff.setAttribute('id', 'favBtn');

        // SET 'OFF' AS DEFAULT IF LS IS NOT CREATED... ELSE SET THE VALUE OF LS
        if (!this.localS.getLocalS(id)) {
            this.localS.createLS(id);
        } else {
            this.localS.createLS(id, this.localS.getLocalS(id))
        }
        
        // DISPLAY THE CORRECT ICON DEPEND THE VALUE IN LS
        favoriteOff.setAttribute('class', this.localS.getLocalS(id));
        if (favoriteOff.className == 'on') {
            favoriteOff.setAttribute('src', 'images/favoriteon.png');
        } else {
            favoriteOff.setAttribute('src', 'images/favoriteoff.png');
        }

        card.appendChild(favoriteOff);
        
         /* ACTIVATE THE FAVORITE BUTTON TO SET 
        AND GET LS AND CREATE A FAVORITE LIST OF POKEMONS */
        favoriteOff.addEventListener('click', () => {
    
            if(favoriteOff.className == 'off') {
                favoriteOff.className = 'on';
                favoriteOff.removeAttribute('src');
                this.localS.createLS(id, favoriteOff.className);
                favoriteOff.setAttribute('src', 'images/favoriteon.png');
                this.localS.favoritePokemons(pokeName, id, experience, type, pokeImg, pokeHeight, pokeStat, pokeTypes, pokeWeight, favoriteList);
            
            } else if(favoriteOff.className == 'on') {
                favoriteOff.className = 'off';
                this.localS.createLS(id, favoriteOff.className);
                favoriteOff.removeAttribute('src');
                favoriteOff.setAttribute('src', 'images/favoriteoff.png');
                
                // get the favorite list
                const list = localStorage.getItem('favList');
                const objectList = JSON.parse(list)
                for (let i = 0; i < objectList.length; i++) {
                    if (objectList[i].id == id) {
                        favoriteList.splice(i, 1);
                        localStorage.setItem('favList', JSON.stringify(favoriteList));
                    } 
                }
            }
        })

        

        pokeCards.appendChild(card);

    }

    // MODULES TO CREATE HTML ELEMENTS 
    createPName(pokeName) {
        const pName = document.createElement('h3');
        pName.innerHTML = `${pokeName[0].toUpperCase()}${pokeName.substring(1)}`;
        return pName;
    }

    createPId(id) {
        const pId = document.createElement('p');
        pId.setAttribute('id', 'number');
        pId.innerHTML = `#${id}`;
        return pId;
    }

    createImg(pokeImg, pokeName) {
        const img = document.createElement('img');
        img.setAttribute('src', `${pokeImg}`);
        img.setAttribute('alt', `${pokeName}`);
        return img;
    }

    createPExperience(experience) {
        const pExperience = document.createElement('p');
        pExperience.setAttribute('id', 'experience');
        pExperience.innerHTML = `<strong>xp.</strong> ${experience}`;
        return pExperience;
    }

    createHeight(pokeHeight, card) {
        const height = document.createElement('p');
        height.setAttribute('class', 'hide-height');
        height.innerHTML = `<strong>Height:</strong> ${pokeHeight}`;
        card.appendChild(height);
        return height;

    }

    createWeight(pokeWeight, card) {
        const weight = document.createElement('p');
        weight.setAttribute('class', 'hide-weight');
        weight.innerHTML = `<strong>Weight:</strong> ${pokeWeight} lb`;
        card.appendChild(weight);
        return weight;
    }

    createPType(type) {
        const pType = document.createElement('p');
        pType.setAttribute('id', 'type');
        pType.innerHTML = `<strong>${type[0].toUpperCase()}${type.substring(1)}</strong>`;
        return pType;
    }

    createTypes(pokeTypes, card) {
        const types = document.createElement('p');
        types.setAttribute('class', 'hide-second-type');

        if (pokeTypes[1]) {
            types.innerHTML = `<strong>${pokeTypes[1].type.name}</strong>`;
            card.appendChild(types);
        }
        return types;
    }


    createFavoriteBtn(id) {
        

       
        return favoriteOff;
    }

    getFavoriteBtn(card, id) {
        const favoriteOn = document.createElement('img');
        favoriteOn.setAttribute('alt', 'pokeball black&white icon');
        favoriteOn.setAttribute('id', 'favBtn');
        favoriteOn.setAttribute('class', localStorage.getItem(id))


        
        // DISPLAY THE CORRECT ICON DEPEND THE VALUE IN LS
        if (localStorage.getItem(id) == 'on') {
            favoriteOn.setAttribute('class', localStorage.getItem(id));
            favoriteOn.setAttribute('src', 'images/favoriteon.png');
        }

        /* ACTIVATE THE FAVORITE BUTTON TO SET 
        AND GET LS AND CREATE A FAVORITE LIST OF POKEMONS */
        favoriteOn.addEventListener('click', () => {
            
            if (localStorage.getItem(id) == 'on') {
                favoriteOn.className = 'off';
                this.localS.createLS(id, 'off');
                favoriteOn.removeAttribute('src');
                favoriteOn.setAttribute('src', 'images/favoriteoff.png');

                
                // get the favorite list
                const list = localStorage.getItem('favList');
                const objectList = JSON.parse(list)
                for (let i = 0; i < objectList.length; i++) {
                    if (objectList[i].id == id) {
                        objectList.splice(i, 1);
                        localStorage.setItem('favList', JSON.stringify(objectList));
                    } 
                }
                const deleteCards = document.getElementById('cards');
                deleteCards.remove();
                this.displayFavoriteCards(localStorage.getItem('favList'));
            }
        })
        return favoriteOn;
    }



    /* Module to create next and prev buttons*/
    createButtons() {
        const next = document.createElement('button');
        next.setAttribute('id', 'next');
        const prev = document.createElement('button');
        prev.setAttribute('id', 'prev');

        next.innerHTML = 'Next';
        prev.innerHTML = 'Prev';

        const body = document.getElementById('body');

        body.appendChild(prev);
        body.appendChild(next);
        // this.displayFavoriteCards()
    }

    // MODULE TO CHANGE THE CLASS NAMES OF THE STATS
    changeClassStats(stats, details, back) {
        const divDetails = document.querySelector('#div-details')
        details.setAttribute('class', 'active-details');
        details.innerHTML = 'more';
        details.addEventListener('click', () => {
            
            stats.className = 'display-stats';
            divDetails.className = 'hide-details-space';
        });

        /* change the class button the return from details view to normal view of each pokemon */
        back.innerHTML = 'back'
        back.setAttribute('class', 'inactive-back')
        
        back.addEventListener('click', () => {
            
            stats.className = 'hide-stats';
            divDetails.className = 'display-details-space';
        });
    }

    // MODULE TO ACTIVATE MORE AND BACK BUTTONS
    createMoreAndBackButtons(details, back, card, height, weight, types) {
        /* change the class button to see the details of each pokemon */ 
        details.setAttribute('class', 'active-details');
        details.innerHTML = 'more';
        details.addEventListener('click', () => {
            card.className = 'details';
            details.className = 'inactive-details';
            back.className = 'active-back';

            height.className = 'display-height';
            weight.className = 'display-weight';
            types.className = 'display-second-type';
        });

        /* change the class button the return from details view to normal view of each pokemon */
        back.innerHTML = 'back';
        back.setAttribute('class', 'inactive-back')
        
        back.addEventListener('click', () => {
            card.classList = 'normal';
            details.className = 'active-details';
            back.className = 'inactive-back';
            
            height.className = 'hide-height';
            weight.className = 'hide-weight';
            types.className = 'hide-second-type';
        })
    }

    displayFavoriteCards(list) {
        
        
        const favList = JSON.parse(list);
        const div = document.getElementById('favorite-pokemons');
        const cards = document.createElement('div');
        cards.setAttribute('id', 'cards');
        if (favList) {
            for (let i = 0; i < favList.length; i++) {
                const pokeName = favList[i].name;
                const id = favList[i].id;
                const experience = favList[i].experience;
                const type = favList[i].types[0].type.name;
                const pokeImg = favList[i].pokeImg;
                const pokeHeight = favList[i].height;
                const pokeStat = favList[i].stat;
                const pokeTypes = favList[i].types;
                const pokeWeight = favList[i].weight;
                // const favorite = favList[i].favorite;
                // console.log(favorite)
                
                const card = document.createElement('section');
                this.setAttributeType(type, card);
                card.classList.add('normal');
    
                const details = document.createElement('button');
                const back = document.createElement('button');
    
                card.appendChild(this.createImg(pokeImg, pokeName));
                card.appendChild(this.createPName(pokeName));
                card.appendChild(this.createPId(id));
                card.appendChild(this.createPExperience(experience));
    
                // CREATE AND APPEND THE STATS TO THE CARDS
                this.createStats(pokeStat, card, details, back)
                
                card.appendChild(this.createPType(type));
        
                this.createMoreAndBackButtons(details, back, card, this.createHeight(pokeHeight, card), this.createWeight(pokeWeight, card), this.createTypes(pokeTypes, card))
    
                card.appendChild(details);
                card.appendChild(back);
                card.appendChild(this.getFavoriteBtn(card, id));
                cards.appendChild(card)
    
                div.appendChild(cards);
            }
        }
    }

    createStats(pokeStat, card, details, back) {
        for (let i = 0; i < pokeStat.length; i++) {
            const stats = document.createElement('p');
            stats.setAttribute('class', 'hide-stats');
            
            stats.innerHTML =  `<strong>${pokeStat[i].stat.name}:</strong> ${pokeStat[i].base_stat}`
            card.appendChild(stats);

            this.changeClassStats(stats, details, back)
        }
    }

    setAttributeType(type, section) {

        if (type === 'normal') {
            section.setAttribute('id', 'normal');
        } else if (type === 'fire') {
            section.setAttribute('id', 'fire');
        } else if (type === 'water') {
            section.setAttribute('id', 'water');
        } else if (type === 'grass') {
            section.setAttribute('id', 'grass');
        } else if (type === 'electric') {
            section.setAttribute('id', 'electric');
        } else if (type === 'ice') {
            section.setAttribute('id', 'ice');
        } else if (type === 'fighting') {
            section.setAttribute('id', 'fighting');
        } else if (type === 'poison') {
            section.setAttribute('id', 'poison');
        } else if (type === 'ground') {
            section.setAttribute('id', 'ground');
        } else if (type === 'flying') {
            section.setAttribute('id', 'flying');
        } else if (type === 'psychic') {
            section.setAttribute('id', 'psychic');
        } else if (type === 'bug') {
            section.setAttribute('id', 'bug');
        } else if (type === 'rock') {
            section.setAttribute('id', 'rock');
        } else if (type === 'ghost') {
            section.setAttribute('id', 'ghost');
        } else if (type === 'dark') {
            section.setAttribute('id', 'dark');
        } else if (type === 'dragon') {
            section.setAttribute('id', 'dragon');
        } else if (type === 'steel') {
            section.setAttribute('id', 'steel');
        } else if (type === 'fairy') {
            section.setAttribute('id', 'fairy');
        }
    }
}
  
  