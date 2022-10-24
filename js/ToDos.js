export default class ToDos {

    constructor() {
    }

    displayLocalStorage(list) {
        const stringList = window.localStorage.getItem('todos');
        const objectList = JSON.parse(stringList);

        if (objectList === null) {}
        else {
            objectList.forEach(element => {
                const li = document.createElement('li');
                li.setAttribute('class', 'active');
                const deleteButton = document.createElement('button');
                deleteButton.setAttribute('id', 'clear');
                deleteButton.setAttribute('class', `${element.id}`)
                const checkbox = document.createElement('input');
                checkbox.setAttribute('type', 'checkbox');
                checkbox.setAttribute('value', `${element.id}`);
                checkbox.setAttribute('class', 'box');
                const content = document.createElement('p');
                content.setAttribute('class', 'incomplete');
        
                if (element.completed === true) {
                    checkbox.setAttribute('checked', true);
                    content.classList.add('completed');
                    content.classList.remove('incomplete');
                    li.classList.add('completed');
                    li.classList.remove('active');

                } else {
                    checkbox.removeAttribute('checked');
                    content.classList.add('incomplete');
                    content.classList.remove('completed');
                    li.classList.add('active');
                    li.classList.remove('completed');
                }
                content.textContent = element.content;
                deleteButton.textContent = `❌`;
                li.appendChild(checkbox);
                li.appendChild(content);
                li.appendChild(deleteButton);
                list.appendChild(li);
            
            
                checkbox.addEventListener('click', function() {
                    const checkValue = checkbox.value;
            
                    const objectIndex = objectList.findIndex(object => { return object.id === parseInt(checkValue)});
    
                    if (objectList[objectIndex].completed === false) {
                        objectList[objectIndex].completed = true;
                        content.classList.add('completed');
                        content.classList.remove('incomplete');
                        li.classList.add('completed');
                        li.classList.remove('active');

                        window.localStorage.setItem('todos', JSON.stringify(objectList));
                    
                    } else {                    
                        objectList[objectIndex].completed = false;
                        content.classList.add('incomplete');
                        content.classList.remove('completed');
                        li.classList.add('active');
                        li.classList.remove('completed');
                        window.localStorage.setItem('todos', JSON.stringify(objectList));
                    
                    }
                })
                
                deleteButton.addEventListener('click', function() {
                    list.removeChild(li);
                    const id = deleteButton.className; 
                    const objectIndex = objectList.findIndex(object => {return object.id === parseInt(id)});
                    objectList.splice(objectIndex, 1);
                    window.localStorage.setItem('todos', JSON.stringify(objectList));
                    
                })

                
            
            })  


        }
        
    }

    displayInputUser(list, checkbox, deleteButton, li, content, toDoList) {
       
        content.textContent = input.value;
        deleteButton.textContent = `❌`;
        li.appendChild(checkbox);
        li.appendChild(content);
        li.appendChild(deleteButton);
        list.appendChild(li);
        
            
        checkbox.addEventListener('click', function() {
            const checkValue = checkbox.value;
            
            const objectIndex = toDoList.findIndex(object => { return object.id === parseInt(checkValue)});
    
            if (toDoList[objectIndex].completed === false) {
                toDoList[objectIndex].completed = true;
                content.classList.add('completed');
                content.classList.remove('incomplete');
                li.classList.add('completed');
                li.classList.remove('active');

                window.localStorage.setItem('todos', JSON.stringify(toDoList));
                    
                } else {                    
                    toDoList[objectIndex].completed = false;
                    content.classList.add('incomplete');
                    content.classList.remove('completed');
                    li.classList.add('active');
                    li.classList.remove('completed');
                    
                    window.localStorage.setItem('todos', JSON.stringify(toDoList));
                    
                }
            })
                
        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            const id = deleteButton.className; 
            const objectIndex = toDoList.findIndex(object => {return object.id === parseInt(id)});
            toDoList.splice(objectIndex, 1);
            window.localStorage.setItem('todos', JSON.stringify(toDoList));
                    
        })

            
    }


    cleanInput(input) {

        input.focus();
        input.value = '';
    }
}
