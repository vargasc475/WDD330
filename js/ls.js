export default class LocalStorage {
    
    constructor() {}

    createLS(element, list, date) {
        const todo = {};
        todo['content'] = element.value;

        
        todo['id'] = date;

        todo['completed'] = false;
        

        list.push(todo);
        window.localStorage.setItem('todos', JSON.stringify(list));
    }

}