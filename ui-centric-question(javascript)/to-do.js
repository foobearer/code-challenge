var input = document.getElementById('ptext'),
ul = document.getElementById('todo-ul'),
warning = document.getElementById('warning'),
todoCounter = document.getElementById('todo-counter'),
li, items = [];

function enterProjectName(e) {
	e.which = e.which || e.keyCode;
	if(e.which == 13) {
		checkInputVal()
		// addInputValToList()
		clearInputField()
	}
}

function addInputValToList() {
	saveitemArray(input.value)
	li = document.createElement("li");
	li.innerHTML = input.value
	ul.appendChild(li)
	addDraggablePropsToLi()
}

function addDraggablePropsToLi() {
	li.setAttribute("id", input.length)
	li.setAttribute("draggable", "true")
	li.setAttribute("ondragstart", "dragStart(event)")
}

function clearInputField() {
	input.value = ""
}

function checkInputVal() {
	if (input.value == " " || input.value == null || input.value === "" ) {
		warning.style.color = "red"
		warning.style.fontSize = "16px"
		warning.style.display = ""
		warning.innerHTML = "PLEASE ENTER A VALID ITEM"	
		setTimeout(function(){
			warning.style.display = "none"
		},2500);
	}
	else {
		addInputValToList()
	}	
}

function saveitemArray(item) {
	items.push(item)
	todoCounter.innerHTML = "" + items.length + " Projects" + "" 
	console.log(items.length)
}

function dragStart(e) {
	event.dataTransfer.setData("Text", event.target.id);
	console.log("hello")
}

function drop(e) {
	e.preventDefault()
	var data = event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(data));
}

function allowDrop(e) {
	e.preventDefault()
}







