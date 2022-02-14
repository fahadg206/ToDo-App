const userInput = document.getElementById('userinput');
const button = document.getElementById('btn');
const list = document.getElementById('todo-list');
const demo = document.getElementById('demo');


let listItems = [];

button.addEventListener('click', () => {
    //creating li element everytime button is clicked
    const todo = document.createElement('li');
    //appending li element to html
    list.append(todo);
    //user value everytime they input a todo
    const userText = userInput.value;
    //change the li text to equal user input
    todo.innerHTML = userText;
    //push todo text to array
    listItems.push(todo.innerHTML);
    //setting array list to local storage
    localStorage.setItem('todo', JSON.stringify(listItems));
    //clear input box everytime a value is entered //
    userInput.value = '';
    //Grabbing items from local storage
    localStorage.getItem('todo');  

    if(localStorage.getItem('todo')) {
        JSON.parse(localStorage.getItem('todo'));
    }

   


    // list items STYLING //
    todo.style.listStyleType = "number";
    todo.style.cursor = "pointer";
    todo.style.color = "aliceblue";
    todo.style.fontSize = "22px";
    todo.style.textAlign = "center";
    todo.style.padding = "7px";
    todo.style.fontWeight = "bold";
    todo.style.textTransform = "capitalize";

   
    
    

    
    
    


    
   
    // remove li element on click //
    todo.addEventListener('click', () => {
        for(let i=0; i < listItems.length; i++) {
            localStorage.removeItem(listItems[i])
        }



        todo.remove(); // remove from the UI
    })
    
    
});