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
		toggleDeleteButtonMobile(10,"#todo");
		toggleDeleteButtonMobile(10,"#done");
		// When tapped the trashCan image
		$("#todo").on("touchend","li > button.trashCan",removeParentObject);
		$("#done").on("touchend","li > button.trashCan",removeParentObject);
		// When tapped the tick image
		$("#todo").on("touchstart","li > button.todoTick",toDone);
		$("#done").on("touchstart","li > button.doneTick",toToDo);
	}

});






//Functions Used
var pixelsMovedRight = 0;
var prevPosX = 0;

//Adds a trashCan HTML into element
function addTrashCanToHTML(element){
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
			removeTrashCan(this);
		});
}

function toggleDeleteButtonMobile(distance,selector) {
	$(selector).on("touchmove","li",function(event){
		//For mobile operations :
		var touch = event.targetTouches[0];
		if( prevPosX ==0 )
		{
			prevPosX = touch.pageX;
		}
		else
		{
			pixelsMovedRight += touch.pageX - prevPosX;
			prevPosX = touch.pageX;
		}
		if(pixelsMovedRight >= distance)
		{
			addTrashCan(this);
		}
		if(-pixelsMovedRight >= distance)
		{
			removeTrashCan(this);
		}
	}).on("touchend","li",function(){
		prevPosX = 0;
		pixelsMovedRight = 0;
	});
}

function toDone() {
	if($(this).children("button.trashCan").length != 0)
	{
		toggleDeleteButtonDesktop();
	}
	var thisObject = this;
	var jqList = $(this).parent();
	jqList.slideUp(200,function(){
		$(thisObject).removeClass("todoTick").addClass("doneTick");
		var li = jqList.html();
		$("#done").append("<li>"+li+"</li>");
		jqList.remove();
	});
}

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
