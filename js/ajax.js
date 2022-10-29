// GET ELEMENTS FROM HTML 

const textButton = document.getElementById('number');
const apiButton = document.getElementById('chuck');
const outputDiv = document.getElementById('output');

const textURL = 'http://numbersapi.com/random';
const apiURL = 'https://api.chucknorris.io/jokes/random';

// ACTIVE THE TEXT BUTTON TO GET THE RANDOM NUMBER
 textButton.addEventListener('click', function() {
    fetch(textURL)
    .then( function(response) {
        outputDiv.innerHTML = 'Waiting for response...';
        if(response.ok) {
            return response;
        }
        throw Error(response.statusText);
    })
    .then( response => response.text() )
    .then( text => outputDiv.innerHTML = text )
    .catch( error => alert('There was an error:', error))
 }, false);

//  ACTIVE THE API BUTTON TO GET THE CHUCK NORRIS RANDOM
apiButton.addEventListener('click', function() {
    fetch(apiURL)
    .then( function(response) {
        outputDiv.innerHTML = 'Waiting for response...';
        if(response.ok) {
            return response;
        }
        throw Error(response.statusText);
    })
    .then( response => response.json() )
    .then( data => outputDiv.innerText = data.value )
    .catch( error => alert('There was an error:', error))
}, false);

function makeRequest(url) {
    fetch(apiURL)
    .then( function(response) {
        outputDiv.innerHTML = 'Waiting for response...';
        if(response.ok) {
            return response;
        }
        throw Error(response.statusText);
    })
}



