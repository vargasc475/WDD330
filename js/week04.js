const form = document.forms['favorite'];
const displayList = document.getElementById('displayList');
const ul = document.createElement('ul');
const userName = document.getElementById('userName');
const color = document.createElement('li');
const food = document.createElement('li');
const sport = document.createElement('li');
const movie = document.createElement('li');
const fruit = document.createElement('li');
const country = document.createElement('li');
const childsDream = document.createElement('li');

// form.firstN.addEventListener('keyup', disableSubmit, false);

// function disableSubmit(event) {
//     if(event.target.value === '') {
//         document.getElementById('submit').disabled = true;
//     } else {
//         document.getElementById('submit').disabled = false;
//     }
// }

form.addEventListener('submit', makeFavoriteL, false);

function makeFavoriteL(event) {
    event.preventDefault();

    const favoriteList = {};

    favoriteList.firstName = form.firstN.value;
    favoriteList.lastName = form.lastN.value;

    favoriteList.favoriteColor = form.favoriteColor.value;
    favoriteList.favoriteFood = form.favoriteFood.value;
    favoriteList.favoriteSport = form.favoriteSport.value;
    favoriteList.favoriteMovie = form.favoriteMovie.value;

    favoriteList.fruit = form.fruit.value;

    favoriteList.country = form.country.value;

    favoriteList.childsDream = form.childsDream.value;

    // alert(JSON.stringify(favoriteList));

    userName.innerHTML = `${favoriteList.firstName} <div id="white">${favoriteList.lastName}</div>`;
    color.innerHTML = `<strong>Favorite Color:</strong> <div id="white">${favoriteList.favoriteColor}</div>`;
    food.innerHTML = `<strong>Favorite Food:</strong> <div id="white">${favoriteList.favoriteFood}</div>`;
    sport.innerHTML = `<strong>Favorite Sport:</strong> <div id="white">${favoriteList.favoriteSport}</div>`;
    movie.innerHTML = `<strong>Favorite Movie:</strong> <div id="white">${favoriteList.favoriteMovie}</div>`;
    fruit.innerHTML = `<strong>Favorite Fruit:</strong> <div id="white">${favoriteList.fruit}</div>`;
    country.innerHTML = `<strong>Favorite Country to visit:</strong> <div id="white">${favoriteList.country}</div>`;
    childsDream.innerHTML = `<strong>Child's Dream:</strong> <div id="white">${favoriteList.childsDream}</div>`;

    displayList.appendChild(userName);
    ul.appendChild(color);
    ul.appendChild(food);
    ul.appendChild(sport);
    ul.appendChild(movie);
    ul.appendChild(fruit);
    ul.appendChild(country);
    ul.appendChild(childsDream);
    displayList.append(ul);

    const firstN = document.getElementById('firstN');
    const lastN = document.getElementById('lastN');
    const favoriteC = document.getElementById('favoriteColor');
    const favoriteFood = document.getElementById('favoriteFood');
    const favoriteSport = document.getElementById('favoriteSport');
    const favoriteMovie = document.getElementById('favoriteMovie');
    const favoriteCountry = document.getElementById('country');
    const childsD = document.getElementById('childsDream');
    const radioFruit = document.getElementById('radio');
    
    
    firstN.value = '';
    lastN.value = '';
    favoriteC.value = '';
    favoriteFood.value = '';
    favoriteSport.value = '';
    favoriteMovie.value = '';
    favoriteCountry.value = '';
    childsD.value = '';
    radioFruit.checked = false;
}
