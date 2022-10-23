export default class LocalStorage {
    
    constructor() {}

    createLS(element, list, date) {
        const todo = {};
        todo['content'] = element.value;
        // window.localStorage.setItem('content', listContent);

        
        todo['id'] = date;
        // window.localStorage.setItem('id', idList);

        todo['completed'] = false;
        // window.localStorage.setItem('completed', completedList);
        

        list.push(todo);
        window.localStorage.setItem('todos', JSON.stringify(list));
    }

    deleteList(list) {
        // let idList = window.localStorage.getItem('id');
        // let contentList = window.localStorage.getItem('content');
        // let completedList = window.localStorage.getItem('completed');
        // let object = window.localStorage.getItem('todos');
        // console.log(JSON.parse(object));
        
        const clearButton = document.querySelector('#clear');
        const todoList = window.localStorage.getItem('todos');
        const todoObject = JSON.parse(todoList);
        
        if (clearButton === null) {

        } else {

            
            clearButton.addEventListener('click', function() {
                
                const id = clearButton.className;
                // const idNumber = id.parseI; 
                console.log(parseInt(id));
                const objectIndex = todoObject.findIndex(object => {return object.id === parseInt(id)});
                console.log(objectIndex);
                todoObject.splice(objectIndex, 1);
                window.localStorage.setItem('todos', JSON.stringify(todoObject));
            })
        }
        
            
    }

    changeCompleted() {
        const stringList = window.localStorage.getItem('todos');
        const objectList = JSON.parse(stringList);
        const checkbox = document.querySelector('.box');

        checkbox.addEventListener('click', function() {

            
            const checkValue = checkbox.value;

            const objectIndex = objectList.findIndex(object => { return object.id === parseInt(checkValue)});
            console.log(objectIndex);

    

            // if(element.completed === false) {
            //     content.classList.add('completed');
            //     content.classList.remove('incomplete');

            //     element.completed = true;
            //     window.localStorage.setItem('todos', JSON.stringify(element));


                
            // } else {
            //     content.classList.add('incomplete');
            //     content.classList.remove('completed');

            //     element.completed = false;
            //     window.localStorage.setItem('todos', JSON.stringify(element));

            // }
        })

    }

        
    


}