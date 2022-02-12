const userInput = document.getElementById('userinput');
const button = document.getElementById('btn');
const list = document.getElementById('todo-list');


let listItems = [];

button.addEventListener('click', () => {

    const todo = document.createElement('li');

    list.append(todo);

    const userText = userInput.value;

    todo.innerHTML = userText;

    // list items STYLING //
    todo.style.listStyleType = "number";
    todo.style.cursor = "pointer";
    todo.style.color = "aliceblue";
    todo.style.fontSize = "22px";
    todo.style.textAlign = "center";
    todo.style.padding = "7px";
    todo.style.fontWeight = "bold";
    todo.style.textTransform = "capitalize";

    listItems.push(todo.innerHTML);

    localStorage.setItem(listItems.indexOf(todo.innerHTML), JSON.stringify(todo.innerHTML) );

    
    //clear input box everytime a value is entered //
    userInput.value = '';

    console.log(listItems)
    
   
    // remove li element on click //
    todo.addEventListener('click', () => {
        localStorage.removeItem(listItems.indexOf(todo.innerHTML)); //remove from storage
        todo.remove(); // remove from the UI
    })
    
    
});