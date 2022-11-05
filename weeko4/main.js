const form = document.forms['hero'];

form.heroName.addEventListener('keyup',validateInline,false);
form.heroName.addEventListener('keyup',disableSubmit,false);

function disableSubmit(event) {
    if(event.target.value === ''){
        document.getElementById('submit').disabled = true;
    } else {
        document.getElementById('submit').disabled = false;
    }
}

const label = form.querySelector('label');
const error = document.createElement('div');
error.classList.add('error');
error.textContent = '! Your name is not allowed to start with X.';
label.append(error);

function validateInline() {
    const heroName = this.value.toUpperCase();
    if(heroName.startsWith('X')){
    error.style.display = 'block';
    } else {
    error.style.display = 'none';
    }
}

form.addEventListener('submit', validate, false);

function validate(event) {
    const firstLetter = form.heroName.value[0];
    if (firstLetter.toUpperCase() === 'X') {
        event.preventDefault();
        alert('Your name is not allowed to start with X!');
    }
}





/*The event listener will invoke the makeHero() function 
when the form is submitted. This function will return an
object based on the information provided in the form.*/
form.addEventListener('submit', makeHero, false);


function makeHero(event) {
    event.preventDefault(); // prevent the form from being submitted

    const hero = {}; // create an empty object 

    hero.name = form.heroName.value; // create a name property based on the input field's value
    hero.realName = form.realName.value;
    
    /*This creates a powers property for our hero object that starts as 
    an empty array. We then iterate over each checkbox to see if 
    it was checked in the form. If it was, we add the 'value' 
    property of the checkbox to the powers array using the push method. */
    hero.powers = [];
    for (let i=0; i < form.powers.length; i++) {
        if (form.powers[i].checked) {
            hero.powers.push(form.powers[i].value);
        }
    }

    /* We can refactor this code to be much more succinct 
    by using the array iterators we saw in Chapter 4. 
    The following code will achieve the same result:

    hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value); */

    hero.category = form.category.value;

    hero.age = form.age.value;

    hero.city = form.city.value;

    hero.origin = form.origin.value;



    alert(JSON.stringify(hero)); // convert object to JSON string an display in alert dialog
    return hero;
}




