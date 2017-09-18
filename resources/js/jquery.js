$(document).ready(function (){
	var timer;
	var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
	if(width > 1000)
	{
		//When hover over 1 second on li
		$("#todo").on("mouseenter","li",function (){
			var theObject = this;
			//For desktop operations
			timer=setTimeout(function (){
					var jqTheObject= jQuery(theObject);
					//Adding an delete button if there is not one
					var trashItem = addTrashCan(theObject);
					trashItem = jQuery(trashItem);
					//Animation
					trashItem.animate({"opacity":"1"},300);
					jqTheObject.animate({"text-indent":"45px"},200);
				},1000);
			}).on("mouseleave","li",function(){
				clearTimeout(timer);
				var trashItem = $(this).children("button.trashCan");
				trashItem.animate({"opacity":"0"},100,function(){
					trashItem.remove();
				});
				//Setting back the text-indent
				$(this).animate({"text-indent":"0px"},300);
			});	

	}
	else
	{
		$("#todo").hammer().on("panright","li",function(){
			//For mobile operations : using hammer.js
			var trashItem = addTrashCan(this);
			trashItem = jQuery(trashItem);
			//Animation
			trashItem.animate({"opacity":"1"},300);
			jqTheObject.animate({"text-indent":"45px"},200);
		}).on("panleft","li",function(){
			var trashItem = $(this).children("button.trashCan");
			trashItem.animate({"opacity":"0"},100,function(){
				trashItem.remove();
			});
			//Setting back the text-indent
			$(this).animate({"text-indent":"0px"},300);			
		});
	}

});

function addTrashCan(element){
	var trashItem = document.createElement("button");
	trashItem.classList.add("trashCan");
	trashItem.innerHTML = trashSVG;
	element.appendChild(trashItem);
	return trashItem;
}
