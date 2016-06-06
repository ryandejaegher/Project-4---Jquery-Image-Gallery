//// Image Search ////

var $imgSearch = $('input');

//// Updates results after each keypress
$imgSearch.keyup(function(){
  var input = $(this).val()/*.toLowerCase()*/;

//// Get images, Search images title attribute ////
 	$('#imageGallery img').each(function(){
    var titleText = $(this).attr('title').toLowerCase();

    if(titleText.search(input) > -1){
      $(this).parent().parent().slideDown(200);
    } else {
      $(this).parent().parent().slideUp(200);
    }
  });
});