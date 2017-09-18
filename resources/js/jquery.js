$(document).ready(function (){
	var timer;
	var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
	console.log(width);
	if(width > 1000)
	{
		//When hover over 1 second on li
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
				},1000);
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
	else
	{
		$("#todo").hammer().bind("panright","li",function(){
			//For mobile operations : using hammer.js
			if($(this).children("button.trashCan").length == 0 )
			{
				var trashItem = addTrashCan(this);
				jqTheObject = jQuery(this);
				trashItem = jQuery(trashItem);
				//Animation
				jqTheObject.animate({"text-indent":"45px"},100,function (){
					trashItem.animate({"opacity":"1"},200);
				});
				;
		}
		}).bind("panleft","li",function(){
			if($(this).children("button.trashCan").length != 0 )
			{
				var trashItem = $(this).children("button.trashCan");
				trashItem.animate({"opacity":"0"},200,function(){
					trashItem.remove();
				});
				//Setting back the text-indent
				$(this).animate({"text-indent":"0px"},200);
			}	
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
