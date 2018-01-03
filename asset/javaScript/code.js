

function updateContent(){

	$("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#css").val() + "</style></head><body>" + $("#html").val() + "</body></html>");
	document.getElementById("iframe").contentWindow.eval($("#js").val());

}





//updating HTML and CSS and JavaScript 

updateContent();

$("textarea").on("change keyup paste", function(){
	updateContent();
});





//reset panel contents
$("#iframe").ready(function(){
	$("#iframe").contents().find("#reset").click(function(){
		$("textarea").html("");
		updateContent();
	});
});