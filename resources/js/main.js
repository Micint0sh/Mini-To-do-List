var addButton = document.getElementById("addButton");
var inputBar = document.getElementById("inputBar");
var tickSVG = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve"><g><circle class="tick" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" cx="32" cy="32" r="30.999"/></g><g><polyline class="outline" fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="bevel" stroke-miterlimit="10" points="13,33 25,45 49,21 	"/></g></svg>'
var trashSVG = '<svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve"><g><path fill="#231F20" d="M56,4H40c0-2.211-1.789-4-4-4h-8c-2.211,0-4,1.789-4,4H8C5.789,4,4,5.789,4,8v5c0,0.553,0.447,1,1,1h2v46c0,2.211,1.789,4,4,4h42c2.211,0,4-1.789,4-4V14h2c0.553,0,1-0.447,1-1V8C60,5.789,58.211,4,56,4z M28,2h8c1.104,0,2,0.896,2,2H26C26,2.896,26.896,2,28,2z M55,60c0,1.104-0.896,2-2,2H11c-1.104,0-2-0.896-2-2V14h46V60z M58,12H6V8c0-1.104,0.896-2,2-2h48c1.104,0,2,0.896,2,2V12z"/><path fill="#231F20" d="M20,54c1.657,0,3-1.343,3-3V25c0-1.657-1.343-3-3-3s-3,1.343-3,3v26C17,52.657,18.343,54,20,54z M19,25c0-0.553,0.447-1,1-1s1,0.447,1,1v26c0,0.553-0.447,1-1,1s-1-0.447-1-1V25z"/><path fill="#231F20" d="M32,54c1.657,0,3-1.343,3-3V25c0-1.657-1.343-3-3-3s-3,1.343-3,3v26C29,52.657,30.343,54,32,54z M31,25c0-0.553,0.447-1,1-1s1,0.447,1,1v26c0,0.553-0.447,1-1,1s-1-0.447-1-1V25z"/><path fill="#231F20" d="M44,54c1.657,0,3-1.343,3-3V25c0-1.657-1.343-3-3-3s-3,1.343-3,3v26C41,52.657,42.343,54,44,54z M43,25c0-0.553,0.447-1,1-1s1,0.447,1,1v26c0,0.553-0.447,1-1,1s-1-0.447-1-1V25z"/></g></svg>'
addButton.addEventListener("click",function (){
	var inputItem = document.getElementById("inputBar");
	var value = inputItem.value;
	// If the value is not empty
	if (value)
	{
		//Create a new Todo panel
		addTodoPanel(value);
		inputItem.value="";
	}
});

inputBar.addEventListener("keydown",function (e) {
	var value=this.value;
	if(value && e.code == 'Enter')
	{
		addTodoPanel(value);
		this.value="";
	}
}) 

function addTodoPanel(value){
	var list = document.getElementById("todo");
	var item = document.createElement("li");
	item.innerText = value;

	var button = document.createElement("button");
	button.classList.add("todoTick");
	button.innerHTML = tickSVG;

	item.appendChild(button);
	list.appendChild(item);
}


