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
        deleteObjTodo(todoObj, todo)
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

function deleteObjTodo(todoObj, todo) {
    for(let i=0; i <listItems.length; i++ ) {
        if(todoObj.id === listItems[i].id) {
            todo.remove()
            //Remove from local storage
            listItems.splice(i, 1);
            //Update local storage after delete//
            localStorage.setItem('todo', JSON.stringify(listItems))   
        }
    }
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
            listItems.push(preTodo);
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
            //checking to see if element contains todoItem value, if it does, equal it to todo.
            if(element.todoItem) {
                listTodo.innerHTML = element.todoItem;
            } else {
                listTodo.innerHTML = element;
            }
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
            //pushing each listTodo into an object with it's own ID//
            const todoObj = {
                todoItem: listTodo.innerHTML,
                id: Date.now(),
            };
            console.log(todoObj)
            
            console.log("This is list items: " + listItems)
            //delete todos that are refreshed//
            listTodo.onclick = () => {
                deleteRefreshTodos(listTodo, element);
            } 
        }) 
        } 
       
       //delete function with index as parameter//
       function deleteRefreshTodos(todoObj, listTodo) {
        for(let i=0; i <listItems.length; i++ ) {
            if(todoObj.id === listItems[i].id) {
                listTodo.remove()
                //Remove from local storage
                listItems.splice(i, 1);
                //Update local storage after delete//
                localStorage.setItem('todo', JSON.stringify(listItems))   
            }
        }
        }

        //listItems.splice(listItems.indexOf(todoName), 1);//
        //localStorage.removeItem('todo')//