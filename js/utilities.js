import ToDos from "./ToDos.js";
import LocalStorage from "./ls.js";

const input = document.getElementById('input');
const button = document.getElementById('button');
const list = document.getElementById('list');

const toDoList = [];




const todoInstance = new ToDos();
const lsInstance = new LocalStorage();


todoInstance.displayLocalStorage(list);

button.addEventListener('click', function() {
    const date = new Date();
    const idMilliseconds = date.getMilliseconds();
    const li = document.createElement('li');
    li.setAttribute('class', 'active');
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('id', 'clear')
    deleteButton.setAttribute('class', `${idMilliseconds}`)
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('value', `${idMilliseconds}`);
    checkbox.setAttribute('class', 'box');
    const content = document.createElement('p');
    content.setAttribute('class', 'incomplete');
    
    
    

    if(input.value == '') {

    } else {

        lsInstance.createLS(input, toDoList, idMilliseconds);
        
        todoInstance.displayInputUser(list, checkbox, deleteButton, li, content, toDoList);
       
        todoInstance.cleanInput(input);
    }
})