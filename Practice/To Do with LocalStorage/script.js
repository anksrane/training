"use strict";
// select form and Input
const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-input");
const todoItemList = document.querySelector(".todo-items");

//Array to Save Todo
let todos = [];

//On Add Button
todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  addTodo(todoInput.value);
});

//Add Todo Function
function addTodo(item) {
  if (item !== "") {
    // Create Todo Object
    const todo = {
      id: Date.now(),
      name: item,
      completed: false,
    };
    // add to To Do List Array
    todos.push(todo);
    addToDoLocalStorage(todos); //Add to local storage

    //clear input box
    todoInput.value = "";
  }
}

// Show To Do List
function renderTodos(totos) {
  todoItemList.innerHTML = "";
  todos.forEach(function (item) {
    //Check item is completed
    const checked = item.completed ? "checked" : null;

    //  Make li and add
    const li = document.createElement("li");
    li.setAttribute("class", item);
    li.setAttribute("data-key", item.id);

    //check item is complete or not
    if (item.completed == true) {
      li.classList.add("checked");
    }
    li.innerHTML = `
  <input type="checkbox" class="checkbox" ${checked}>
  <button class="delete-button">X</button>
  `;

  //Add <li> to <ul>
  todoItemList.append(li);
  });
}

function addToDoLocalStorage(totos){
    localStorage.setItem('todos',JSON.stringify(todos));
    //render them to screen
    renderTodos(todos);
}

//get everything from local storage
