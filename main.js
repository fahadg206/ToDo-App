const userInput = document.getElementById('userinput');
const button = document.getElementById('btn');
const list = document.getElementById('todo-list');
const demo = document.getElementById('demo');


let listItems = localStorage.getItem('todo');
checkLocalStorage();



function addTodo() {
    const todo = document.createElement('li');
    list.append(todo);
    const userText = userInput.value;
    todo.innerHTML = userText;

    //each todo has its own unique id //
    const todoObj = {
        todoItem: todo.innerHTML,
        id: Date.now(),
    };

    console.log(todoObj)
    listItems.push(todoObj.todoItem);

    //Store todos in local storage//
    localStorage.setItem('todo', JSON.stringify(listItems));

     // delete todos //
     todoObj.onclick = () => {
       // Remove from UI
       todoObj.todoItem.remove();
       //Remove from local storage
       listItems.splice(listItems.todoObj.id, 1);
       //Update local storage after delete//
       localStorage.setItem('todo', JSON.stringify(listItems))   
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

    addTodo();
    
    //clear input box everytime a value is entered //
    userInput.value = '';

    //Grabbing items from local storage
    localStorage.getItem('todo');  

}); 

//Check to see if local storage exists. If it does then post on UI//
function checkLocalStorage() {

    if(listItems) {

        displayUI();
       
    } else {
        listItems = [];
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
          for (let i=0; i < 5; i++) {
            const preTodo = response.data[i].title;
            listItems.push(preTodo);
            //console.log(listItems)//
            
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


            const refreshTodoObj = {
                listTodo,
                id: Date.now(),
            };
           
            listTodo.onclick = () => {
                deleteTodos(listTodo, element);
                console.log('deleted index: ' + index)
                console.log(element);
        
            }

        }) 
        }
       
       //delete function with index as parameter//
       function deleteTodos(element, todoName) {
            // Remove from UI
            element.remove();
            console.log("Before: " + listItems)
            //Remove from local storage
            listItems.splice(listItems.indexOf(todoName), 1);
            //Update local storage after delete//
            localStorage.setItem('todo', JSON.stringify(listItems))
            console.log("After: " + listItems)
            
        }



        //listItems.splice(listItems.indexOf(todoName), 1);//
        //localStorage.removeItem('todo')//