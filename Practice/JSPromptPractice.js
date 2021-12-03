let input = prompt("What would you like to do?")
const todos = ['Buy Eggs', 'Keep it at Cold Place'];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log("**********")
        for (let i = 0; i < todos.length; i++) {
            console.log([i] + ": " + todos[i]);
        }
        console.log("**********")
    } else if (input === 'new') {
        const newTodo = prompt('Ok, What is new Todo?');
        todos.push(newTodo);
        console.log(newTodo + " added to list")
    } else if (input === 'delete') {
        const index = parseInt(prompt("Enter index to Delete."));
        if (!Number.isNaN(index)) {
            const deleted = todos.slice(index, 1);
            console.log("ok" + deleted[0] + " is Deleted.");
        } else {
            console.log('Unknown Index:')
        }
    }
    input = prompt("What would you like to do?")
}
console.log("Ok, You Quit The App")