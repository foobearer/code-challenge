var input = e('ptext'), ul = e('todo-ul'), warning = e('warning'),
todoCounter = e('todo-counter'), inprogCounter = e('inprog-counter'),
doneCounter = e('done-counter'), projTot = e('gtotal'),
li, items = [];

function enterProjectName(e) {
  e.which = e.which || e.keyCode;
  if(e.which == 13) {
    checkInputVal()
    clearInputField()
    countListUl()
  }
}

function addInputValToList() {
  countItemArray(input.value)
  li = document.createElement("li");
  li.innerHTML = input.value
  ul.appendChild(li)
  addDraggablePropsToLi()
}

function checkInputVal() {
  if (input.value == " " || input.value == null || input.value === "" ) {
    warning.className = "warning"
    warning.innerHTML = "PLEASE ENTER A VALID ITEM"	
    setTimeout(function(){
      warning.style.display = "none"
    },2500);
  }
  else {
    addInputValToList()
  }	
}

function countItemArray(item) {
  items.push(item)
  projTot.innerHTML = "" + items.length + "<br> Projects" + "" 
  console.log(items.length)
}

function countListUl() {
  var todo = e("todo-ul").getElementsByTagName("li"),
  inprog = e("inprogress-ul").getElementsByTagName("li"),
  done = e("done-ul").getElementsByTagName("li");
  todoCounter.innerHTML = todo.length + " Projects"
  inprogCounter.innerHTML = inprog.length + " Projects"
  doneCounter.innerHTML = done.length + " Projects"
}

function clearInputField() {
  input.value = ""
}

function e(id) {
  return document.getElementById(id);
}

//Inprogress
function sortList(id) {
  var ul = id;
  console.log(ul)
}

//drag & drop events
function addDraggablePropsToLi() {
  li.setAttribute("id", input.length + input.value)
  li.setAttribute("draggable", "true")
  li.setAttribute("ondragstart", "dragStart(event)")
}

function dragStart(e) {
  event.dataTransfer.setData("Text", event.target.id);
  console.log("hello")
}

function drop(e) {
  e.preventDefault()
  var data = event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(data));
  countListUl()
}

function allowDrop(e) {
  e.preventDefault()
}