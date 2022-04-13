const todoForm = document.querySelector("#todo-form");
const todoFromInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

//cosnt text
const TODOS_KEY = "todos";

let toDos = [];

function saveTodo () {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function handleDelButton(event){
    const li = event.target.parentElement;
    toDos = toDos.filter((item) => item.id!== parseInt(li.id));
    saveTodo();
    li.remove();
}

function paintTodo (newTodoObj){
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    span.innerText = newTodoObj.text;
    li.appendChild(span);
    const button = document.createElement("button");
    button.innerText = "❌";
    button.className = "x-button";
    li.appendChild(button);
    todoList.appendChild(li);
    button.addEventListener("click",handleDelButton);

}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = todoFromInput.value;
    todoFromInput.value="";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodo();
}


todoForm.addEventListener("submit", handleToDoSubmit);

//my code
// if (toDos.length < 1) {
//     toDos = JSON.parse(localStorage.getItem(TODOS_KEY));
//     console.log(toDos);
//     for (let i = 0 ; i<toDos.length; i++){
//         paintTodo(toDos[i]);
//     }
// }

//nico code
const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}