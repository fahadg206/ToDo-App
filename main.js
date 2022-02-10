const userInput = document.getElementById('userinput');
const button = document.getElementById('btn');
const list = document.getElementById('demo');

let listItems = [];

button.addEventListener('click', () => {
    
    const userText = userInput.value;
    
    listItems.push(userText);

    const listArray = listItems.toString();

    localStorage.setItem('ToDoItem', JSON.stringify(listArray));

    

    list.innerHTML = localStorage.getItem('ToDoItem');

   

    
    list.addEventListener('click', () => {
        localStorage.removeItem('ToDoItem');
        list.remove();
    })
    
    

    
    
    
});
