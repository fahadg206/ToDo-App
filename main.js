const userInput = document.getElementById('userinput');
const button = document.getElementById('btn');
const list = document.getElementById('todo-list');
const demo = document.getElementById('demo');


let listItems = localStorage.getItem('todo');
checkLocalStorage();



function addTodo() {
    const userText = userInput.value;
    const todo = document.createElement('li');
    todo.innerHTML = userText;
    list.append(todo);
    //each todo has its own unique id //
    const todoObj = {
        todoItem: todo.innerHTML,
        id: Date.now(),
    };
    //logging todoObj for personal use//
    console.log(todoObj)
    listItems.push(todoObj);
    //Store todos in local storage//
    localStorage.setItem('todo', JSON.stringify(listItems));
     // delete todos //
     todo.onclick = () => {
        deleteTodos(todoObj, todo)
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
}

// action on the button click //
button.addEventListener('click', () => {
    //Calling addTodo Function on the button click//
    addTodo();
    //clear input box everytime a value is entered //
    userInput.value = '';
    //Grabbing items from local storage
    localStorage.getItem('todo');  
}); 

//Check to see if local storage exists. If it does then post on UI//
function checkLocalStorage() {
    if(listItems) {
        //display todos on UI if local storage exists on the refresh//
        displayUI();
    } else {
        listItems = [];
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
          for (let i=0; i < 5; i++) {
            const preTodo = response.data[i].title;
           //putting API todos into object and giving unique ID//
           const todoObj = {
            todoItem: preTodo,
            id: i + Date.now(),
            }
            //pushing API todo objects into listItems array//
            listItems.push(todoObj)
            console.log(todoObj)
          }
          localStorage.setItem('todo', JSON.stringify(listItems))
          displayUI();
        })
    }
}

       function displayUI() {
        listItems = JSON.parse(localStorage.getItem('todo'))
        listItems.forEach((element, index) => {
            let listTodo = document.createElement("li");
            listTodo.innerHTML = element.todoItem;
            listTodo.style.listStyleType = "number";
            listTodo.style.cursor = "pointer";
            listTodo.style.color = "aliceblue";
            listTodo.style.fontSize = "22px";
            listTodo.style.textAlign = "center";
            listTodo.style.padding = "7px";
            listTodo.style.fontWeight = "bold";
            listTodo.style.textTransform = "capitalize";
            //append listTodo into html list//
            list.appendChild(listTodo);
            //delete todos that are refreshed//
            listTodo.onclick = () => {
                deleteTodos(element, listTodo);
            } 
        }) 
        } 
       
       //delete function with index as parameter//
       function deleteTodos(todoObject, todo) {
        for(let i=0; i <listItems.length; i++ ) {
            if(todoObject.id === listItems[i].id) {
                todo.remove()
                //Remove from local storage
                listItems.splice(i, 1);
                //Update local storage after delete//
                localStorage.setItem('todo', JSON.stringify(listItems))   
            }
        }
    }

       