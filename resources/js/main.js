var addButton = document.getElementById("addButton");
var inputBar = document.getElementById("inputBar");
var tickSVG = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve"><g><polyline class="outline" fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="bevel" stroke-miterlimit="10" points="13,33 25,45 49,21 	"/></g><g><circle class="tick" fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" cx="32" cy="32" r="30.999"/></g></svg>'

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
	var list=document.getElementById("todo");
	var item = document.createElement("li");
	item.innerText=value;

	var button = document.createElement("button");
	button.classList.add("todoTick");
	button.innerHTML=tickSVG;

	item.appendChild(button);
	list.appendChild(item);
}