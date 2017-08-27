//Version 1 

//Requirements
//1. It should have a place to store todos.
//2.  It should have a way to display todos
//3.  It should have a way to add new todos.
//4.  It should have a way to change a todo.
//5.  It should have a way to delete a todo.

//arrays = lists, variables = nicknames

//store and display todos
var todos = ['item 1', 'item 2', 'item 3']
console.log('My todos:', todos)

//add a new todo
todos.push('item 4')
console.log(todos)

//access a todo
console.log(todos[0])
console.log(todos[1])
console.log(todos[3])

//change a todo
todos[0] = 'item 1 updated'
console.log(todos)

//delete a todo

//use splice, first give it a postion from you want to start deleting, next tell splice how many items to delete
todos.splice(0, 1)
console.log(todos)

todos.splice(0, 2)
console.log(todos)
