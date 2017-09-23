$(document).ready(function (){
	var timer;
	var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
	console.log(width);
	if(width > 1000)
	{
		//When hover over 1 second on li
		toggleDeleteButtonDesktop(1000);
		// When clicked the trashCan image
		$("#todo").on("click","li > button.trashCan",removeTrashCan);
		//When clicked the tick image
		$("#todo").on("click","li > button.todoTick",toDone);
	}
	else
	{
		//When detected swipe right action
		toggleDeleteButtonMobile(10);
		// When tapped the trashCan image
		$("#todo").on("touchstart","li > button.trashCan",removeTrashCan);
		// When tapped the tick image
		$("#todo").on("touchstart","li > button.todoTick",toDone);
	}

});






//Functions Used
var pixelsMovedRight = 0;
var prevPosX = 0;
//Adds a TrashCan button into element
function addTrashCan(element){
	var trashItem = document.createElement("button");
	trashItem.classList.add("trashCan");
	trashItem.innerHTML = trashSVG;
	element.appendChild(trashItem);
	return trashItem;
}

//Removes the parent item
function removeTrashCan() {
	//Animation
	var jqList = $(this).parent();
	jqList.slideUp(200,function(){
		jqList.remove();
	});
}

function toggleDeleteButtonDesktop(delay) {
	$("#todo").on("mouseenter","li",function (){
		var theObject = this;
		//For desktop operations
		timer=setTimeout(function (){
				var jqTheObject= jQuery(theObject);
				//Adding an delete button if there is not one
				if( $(this).children("button.trashCan").length == 0 )
				{
					var trashItem = addTrashCan(theObject);
					trashItem = jQuery(trashItem);
					//Animation
					jqTheObject.animate({"text-indent":"45px"},200,function (){
						trashItem.animate({"opacity":"1"},300);
					});
				}
			},delay);
		}).on("mouseleave","li",function(){
			clearTimeout(timer);
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
		var touch = event.targetTouches[0];
		if( prevPosX ==0 )
		{
			prevPosX = touch.pageX;
			console.log("prevPosX initiated!\n");
		}
		else
		{
			pixelsMovedRight += touch.pageX - prevPosX;
			console.log("pixelsMovedRight: "+pixelsMovedRight);
			prevPosX = touch.pageX;
		}
		if(pixelsMovedRight >= distance)
		{
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
		}
	}).on("touchend","li",function(){
		prevPosX = 0;
		pixelsMovedRight = 0;
	});
}

function toDone() {
	var thisObject = this;
	var jqList = $(this).parent();
	jqList.slideUp(200,function(){
		$(thisObject).removeClass("todoTick").addClass("doneTick");
		var li = jqList.html();
		$("#done").append("<li>"+li+"</li>");
		jqList.remove();
	});
}
