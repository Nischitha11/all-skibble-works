const listContainer = document.querySelector(".todo-list");


class Todo {
    todo = "";
    constructor(text, container) {
        this.text = text;
        this.container = container
        this.createTodo();
    }
    createTodo() {
        this.todo = document.createElement("li");
        this.todo.innerHTML = this.text;
        this.container.appendChild(this.todo)


        let checkBtn = document.createElement("button")
        checkBtn.innerHTML = "Done"
        checkBtn.onclick = () => {
            this.checkOff()
        }
        this.todo.appendChild(checkBtn)

        let deleteBtn = document.createElement("button")
        deleteBtn.innerHTML = "X"
        deleteBtn.onclick = () => {
            this.deleteTodo()
        }
        this.todo.appendChild(deleteBtn)
    }
    checkOff() {
        this.todo.style.color = "green";
        this.todo.style.textDecoration = "line-through";
    }
    deleteTodo() {
        this.container.removeChild(this.todo)
    }
}
let todoArray = []

function saveTodo() {
    let inputContainer = document.querySelector("#todo")
    let inputValue = inputContainer.value
    todoArray.push(new Todo(inputValue, listContainer))
    clearInput()
}
function undoDelete() {
    todoArray[0].createTodo()
}
function clearInput() {
    let inputContainer = document.getElementById("todo")
    inputContainer.value = ""
}

function myFunction() {
    let checked = document.createElement("input");
    checked.setAttribute("type","checkbox");
    this.todo.appendChild(checked);
}