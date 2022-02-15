const userInput = document.getElementById('userinput');
const button = document.getElementById('btn');
const list = document.getElementById('todo-list');
const demo = document.getElementById('demo');


let listItems = [];

button.addEventListener('click', () => {
    //creating listTodo element everytime button is clicked
    const todo = document.createElement('li');
    //appending listTodo element to html
    list.append(todo);
    //user value everytime they input a todo
    const userText = userInput.value;
    //change the listTodo text to equal user input
    todo.innerHTML = userText;
    //push todo text to array
    listItems.push(todo.innerHTML);
    //setting array list to local storage
    localStorage.setItem('todo', JSON.stringify(listItems));
    //clear input box everytime a value is entered //
    userInput.value = '';
    //Grabbing items from local storage
    localStorage.getItem('todo');  
    
    // list items STYLING //
    todo.style.listStyleType = "number";
    todo.style.cursor = "pointer";
    todo.style.color = "aliceblue";
    todo.style.fontSize = "22px";
    todo.style.textAlign = "center";
    todo.style.padding = "7px";
    todo.style.fontWeight = "bold";
    todo.style.textTransform = "capitalize";

});

//Check to see if local storage exists. If it does then post on UI//
    if(localStorage.getItem('todo')) {
        
        let listArray = JSON.parse(localStorage.getItem('todo'));
        

        listArray.forEach((element) => {
            let listTodo = document.createElement("li");
            listTodo.innerHTML = element;
            list.appendChild(listTodo);
            listTodo.style.listStyleType = "number";
            listTodo.style.cursor = "pointer";
            listTodo.style.color = "aliceblue";
            listTodo.style.fontSize = "22px";
            listTodo.style.textAlign = "center";
            listTodo.style.padding = "7px";
            listTodo.style.fontWeight = "bold";
            listTodo.style.textTransform = "capitalize";

            listTodo.addEventListener('click', () => {
                // Remove from UI
                listTodo.remove();
                //Remove from local storage
                localStorage.removeItem(element);
                
            })
        }) 

        
    }

       