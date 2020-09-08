var addButton = document.getElementById('addButton')
var todoInput = document.getElementById('todoInput')
var todoList = document.getElementById('todoList')

addButton.addEventListener('click', function() {
  var todo = todoInput.value

  var newTodoElement = document.createElement('li')
  newTodoElement.innerHTML = todo

  todoList.appendChild(newTodoElement)
})
