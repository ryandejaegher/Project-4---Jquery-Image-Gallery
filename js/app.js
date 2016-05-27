//Problem: User when clicks image goes to dead end
//solution: Create an overlay with the large image - Lightbox


var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

	//2.1 An image to overlay
$overlay.append($image);

	//2.2 A caption

$overlay.append($caption);

//2. Add overlay
$("body").append($overlay);




//1. Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
	event.preventDefault();
	var imageLocation = $(this).attr("href");
	//Update overlay with image linked in the link	
	$image.attr("src", imageLocation);


	//2. Show an overlay
	$overlay.show();
	//4. Get childs alt attribute and set caption

	var captionText = $(this).children("img").attr("alt");
	$caption.text(captionText);
});

	//2.3 When overlay is clicked, hide overlay
$overlay.click(function(){
	$overlay.hide();
});

//3. Scroll through overlay by clicking left/right
	//3.1 Have arrows outside of overlay



