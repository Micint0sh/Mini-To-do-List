var addButton = document.getElementById("addButton");

addButton.addEventListener("click",function (){
	var inputItem = document.getElementById("item");
	var value = inputItem.value;
	// If the value is not empty
	if (value)
	{
		//To do: create a new panel
		document.getElementById("testObject").innerHTML=value;
	}
	//console.log(value);
}); 

//Changing the color of button when pressed
addButton.addEventListener("mousedown", function(){
	this.style.background = "#EEEEEE";
})

addButton.addEventListener("mouseup",function(){
	this.style.background = "#FFFFFF";
})