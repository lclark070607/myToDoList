// What is an object?

//objects group related data and functions together

//operatingSystem mac
//screenSize 15 inches
//purchaseYear 2011

//surround object in curly braces
//properties separated by commas
//method is a property set to a function
var myComputer = {
    operatingSystem: 'mac',
    screenSize: '15 inches',
    purchaseYear: 2011
};

console.log(myComputer)
console.log(myComputer.operatingSystem)
console.log(myComputer.screenSize)
console.log(myComputer.purchaseYear)

//sayName is a method on the gordon object
var gordon = {
    name: 'Gordon',
    sayName: function() {
        console.log(this.name);
    }
}

//objects help us organize code...everything about our todo list is in a todo list object
//functions, when they are methods on properties, can be anonymous
var todoList = {
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos: function() {
        console.log('My Todos', this.todos);
    },
    addTodo: function(todo) {
        this.todos.push(todo);
        this.displayTodos();
    },
    changeTodo: function(position, newValue) {
        this.todos[position] = newValue;
        this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    }
};

console.log(todoList.addTodo('Plunker'));
console.log(todoList.changeTodo(0, 'first'));
console.log(todoList.deleteTodo(0));
