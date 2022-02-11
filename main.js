const userInput = document.getElementById('userinput');
const button = document.getElementById('btn');
const listText = document.getElementById('demo');
const list = document.getElementById('todo-list');


let listItems = [];

button.addEventListener('click', () => {

    let todo = document.createElement('li');

    list.append(todo);

    const userText = userInput.value;

    todo.innerHTML = userText;

    listItems.push(todo.innerHTML);

    localStorage.setItem('ToDoItem', JSON.stringify(listItems));

    console.log(listItems)

    userInput.value = '';

   // listItems.forEach((element, index)) => {

    //

    
    JSON.parse(localStorage.getItem('ToDoItem'))

   

    
    todo.addEventListener('click', () => {
        localStorage.removeItem('ToDoItem');
        todo.remove();
    })
    
    

    
    
    
});