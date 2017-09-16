$(document).ready(function (){
	var timer;

	//When hover over 1 second on li

	$("#todo").on("mouseenter","li",function (){
		console.log("detected!");
		var theObject = this;
		timer=setTimeout(function (){
			var jqTheObject= jQuery(theObject);
			//Adding an delete button if there is not one
			if(jqTheObject.children("button.trashCan")) {
				var trashItem = addTrashCan(theObject);
				trashItem = jQuery(trashItem);
				//Animation
				trashItem.animate({"opacity":"1"},300);
				jqTheObject.animate({"text-indent":"45px"},200);
			}
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

});

function addTrashCan(element){
	var trashItem = document.createElement("button");
	trashItem.classList.add("trashCan");
	trashItem.innerHTML = trashSVG;
	element.appendChild(trashItem);
	return trashItem;
}