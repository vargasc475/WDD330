export default class PokeModel {

    constructor() {

    }

    /* Module to process the url API and return a JSON 
    response or display an error message*/
    async getPokeAapi(url) {
        return fetch(url)
            .then(function(response) {
                if (!response.ok) {
                    throw Error(response.statusText);
                } else {
                    return response.json();
                }
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    menuOptions(menuBtn, backBtn, links, divMenu) {

        menuBtn.addEventListener('click', () => {

            links.className = 'display-links';
            divMenu.className = 'hide-menu';
        });

        backBtn.addEventListener('click', () => {
            links.className = 'hide-links';
            divMenu.className = 'display-menu';
        });

    }


}