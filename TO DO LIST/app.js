const todoContainer = document.querySelector(".todolist");

class Todo{
    todo = "";
    constructor(text, container){
        this.text = text;
        this.container = container
        this.addToView();
    }

    addToView() {
      this.todo = document.createElement('li');        
      this.todo.innerHTML = this.text;  
      this.container.appendChild(this.todo);

      let checkbtn = document.createElement('button')
      checkbtn.innerHTML = "done"
      checkbtn.onclick = () => {
        this.checked()
      }
      this.todo.appendChild(checkbtn)

      let delbtn = document.createElement('button')
      delbtn.innerHTML = "X"
      delbtn.onclick = () =>{
        this.deleteTodo()
      }
      this.todo.appendChild(delbtn)
    }
    checked() {
      this.todo.style.color = "blue";
      this.todo.style.textdecoration = "linethrough";

    }
    deleteTodo(){
      this.container.removeChild(this.todo)
    }

}
let todoArray = []

 function saveTodo(){
    let inputContainer = document.querySelector("#newtodo")//.value;
    let inputValue = inputContainer.value
    todoArray.push(new Todo(inputValue, todoContainer));
    clearInput()
    
}
function undoDelete(){
  todoArray[0].createTodo()
}
function clearInput(){
  let inputContainer = document.getElementById("todo")
  inputContainer.value = ""
}
