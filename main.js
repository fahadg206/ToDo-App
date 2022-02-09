const userInput = document.getElementById('userinput');
const button = document.getElementById('btn');
const list = document.getElementById('demo');

let listItems = [];

button.addEventListener('click', () => {
    
    const userText = userInput.value;
    
    listItems.push(userText);

    localStorage.setItem('ToDoItem', JSON.stringify(listItems))

    list.innerHTML = localStorage.getItem('ToDoItem')

    
    

    
    
    
});
