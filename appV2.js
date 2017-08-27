// Functions are just recipes

//distills a long list of instructions to a single command

// function makeTurkeySandwich() {
//     Get one slice of bread;
//     Add turkey;
//     Put a slice of bread on top;
// }

//makeTurkeySandwich() //this will run all the steps to your function

//Customizing functions
//have one recipe, replace the fillings, avoids repetitiveness

//makeSandwichWith_____
//Get one slice of bread.
//Add_____.
//Put a slice of bread on top.

//function makeSandwichWith(filling) {
//Get one slice of bread;
//Add filling;
//Put a slice of bread on top;
//}

function sayHiTo(person) {
    console.log('hi', person);
}

sayHiTo('Gordon')//this person perameter is being set to Gordon, person = 'Gordon'

//Verson 2 Requirements
//  It should have a function to display todos
//  It should have a function to add todos
//  It should have a function to change todos
//  It should have a function to delete todos

var todos = ['item 1', 'item 2', 'item 3']

function displayTodos() {
    console.log('My todos:', todos);
}
displayTodos()

// function addTodo() {
//     todos.push('new todo');
// }
// addTodo()
// displayTodos()

// function addTodo() {
//     todos.push('new todo');
//     displayTodos();
// }

// addTodo()

function addTodo(todo) {
    todos.push(todo);
    displayTodos();
}

addTodo('new item added')

//function to change todos

// function changeTodo() {
//     todos[0] = 'some new value'
// }

function changeTodo(position, newValue) {
    todos[position] = newValue;
    displayTodos();
}
changeTodo(0, 'changed')
changeTodo(0, 'changed again')

//function to delete todos

function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
}
deleteTodo(0)
deleteTodo(2)