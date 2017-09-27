$(document).ready(function (){
	var timer;
	var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
	console.log(width);
	if(width > 1000)
	{
		//When hover over 1 second on li
		toggleDeleteButtonDesktop(1000,"#todo");
		toggleDeleteButtonDesktop(1000,"#done");
		// When clicked the trashCan image
		$("#todo").on("click","li > button.trashCan",removeParentObject);
		$("#done").on("click","li > button.trashCan",removeParentObject);
		//When clicked the tick image
		$("#todo").on("click","li > button.todoTick",toDone);
		$("#done").on("click","li > button.doneTick",toToDo);
	}
	else
	{
		//When detected swipe right action
<<<<<<< HEAD
		toggleDeleteButtonMobile(10);
		// When tapped the trashCan image
		$("#todo").on("touchstart","li > button.trashCan",removeTrashCan);
		// When tapped the tick image
		$("#todo").on("touchstart","li > button.todoTick",toDone);
=======
		toggleDeleteButtonMobile(10,"#todo");
		toggleDeleteButtonMobile(10,"#done");
		// When tapped the trashCan image
		$("#todo").on("touchend","li > button.trashCan",removeParentObject);
		$("#done").on("touchend","li > button.trashCan",removeParentObject);
		// When tapped the tick image
		$("#todo").on("touchstart","li > button.todoTick",toDone);
		$("#done").on("touchstart","li > button.doneTick",toToDo);
>>>>>>> 85da383134fecab52565e367b26c657485379f1b
	}

});






//Functions Used
var pixelsMovedRight = 0;
var prevPosX = 0;
<<<<<<< HEAD
//Adds a TrashCan button into element
function addTrashCan(element){
=======

//Adds a trashCan HTML into element
function addTrashCanToHTML(element){
>>>>>>> 85da383134fecab52565e367b26c657485379f1b
	var trashItem = document.createElement("button");
	trashItem.classList.add("trashCan");
	trashItem.innerHTML = trashSVG;
	element.appendChild(trashItem);
	return trashItem;
}

//Adds a trashCan button into the object
function addTrashCan(object)
{
	//Adding an delete button if there is not one
	if( $(object).children("button.trashCan").length == 0 )
	{
		var trashItem = addTrashCanToHTML(object);
		trashItem = jQuery(trashItem);
		//Animation
		$(object).animate({"text-indent":"45px"},200,function (){
			trashItem.animate({"opacity":"1"},300);
		});
	}
}

//Removes the parent object
function removeParentObject() {
	//Animation
	var jqList = $(this).parent();
	jqList.slideUp(200,function(){
		jqList.remove();
	});
}

//Remove a trashCan object from element
function removeTrashCan(object) {
	if($(object).children("button.trashCan").length != 0 ) // If trashCan exists
	{
		var trashItem = $(object).children("button.trashCan");
		trashItem.animate({"opacity":"0"},100,function(){
			trashItem.remove();
		});
		//Setting back the text-indent
		$(object).animate({"text-indent":"0px"},300);
	}
}

function toggleDeleteButtonDesktop(delay,selector) {
	$(selector).on("mouseenter","li",function (){
		//For desktop operations
		var theObject = this;
		timer=setTimeout(function (){
				addTrashCan(theObject);
		},delay);
		}).on("mouseleave","li",function(){
			clearTimeout(timer);
<<<<<<< HEAD
			if( $(this).children("button.trashCan").length != 0 )
			{
				var trashItem = $(this).children("button.trashCan");
				trashItem.animate({"opacity":"0"},100,function(){
					trashItem.remove();
				});
				//Setting back the text-indent
				$(this).animate({"text-indent":"0px"},300);
			}
		});
}

function toggleDeleteButtonMobile(distance) {
	$("#todo").on("touchmove","li",function(event){
		//For mobile operations :
		console.log("Move detected\n");
=======
			removeTrashCan(this);
		});
}

function toggleDeleteButtonMobile(distance,selector) {
	$(selector).on("touchmove","li",function(event){
		//For mobile operations :
>>>>>>> 85da383134fecab52565e367b26c657485379f1b
		var touch = event.targetTouches[0];
		if( prevPosX ==0 )
		{
			prevPosX = touch.pageX;
<<<<<<< HEAD
			console.log("prevPosX initiated!\n");
=======
>>>>>>> 85da383134fecab52565e367b26c657485379f1b
		}
		else
		{
			pixelsMovedRight += touch.pageX - prevPosX;
<<<<<<< HEAD
			console.log("pixelsMovedRight: "+pixelsMovedRight);
=======
>>>>>>> 85da383134fecab52565e367b26c657485379f1b
			prevPosX = touch.pageX;
		}
		if(pixelsMovedRight >= distance)
		{
<<<<<<< HEAD
			console.log("Distance exceeded!");
			if($(this).children("button.trashCan").length == 0 )
			{
				console.log("trashCan shown.");
				var trashItem = addTrashCan(this);
				trashItem = jQuery(trashItem);
				//Animation
				$(this).animate({"text-indent":"45px"},200,function (){
					trashItem.animate({"opacity":"1"},300);
				});
			}
		}
		if(-pixelsMovedRight >= distance)
		{
			if($(this).children("button.trashCan").length != 0 )
			{
				var trashItem = $(this).children("button.trashCan");
				trashItem.animate({"opacity":"0"},200,function(){
					trashItem.remove();
				});
				//Setting back the text-indent
				$(this).animate({"text-indent":"0px"},200);
			}
=======
			addTrashCan(this);
		}
		if(-pixelsMovedRight >= distance)
		{
			removeTrashCan(this);
>>>>>>> 85da383134fecab52565e367b26c657485379f1b
		}
	}).on("touchend","li",function(){
		prevPosX = 0;
		pixelsMovedRight = 0;
	});
}

function toDone() {
<<<<<<< HEAD
=======
	if($(this).children("button.trashCan").length != 0)
	{
		toggleDeleteButtonDesktop();
	}
>>>>>>> 85da383134fecab52565e367b26c657485379f1b
	var thisObject = this;
	var jqList = $(this).parent();
	jqList.slideUp(200,function(){
		$(thisObject).removeClass("todoTick").addClass("doneTick");
		var li = jqList.html();
		$("#done").append("<li>"+li+"</li>");
		jqList.remove();
	});
}
<<<<<<< HEAD
=======

function toToDo() {
	var thisObject = this;
	var jqList = $(this).parent();
	jqList.slideUp(200,function(){
		$(thisObject).removeClass("doneTick").addClass("todoTick");
		var li = jqList.html();
		$("#todo").append("<li>"+li+"</li>");
		jqList.remove();
	});
}
>>>>>>> 85da383134fecab52565e367b26c657485379f1b
