//Modal https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal_img
// Get the modal
var modal = document.getElementById("modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
function modalFunction(clicked_id){
	var img = document.getElementById(clicked_id);
	var replaceImg = document.getElementById("image");
	var captionText = document.getElementById("caption");

	modal.style.display = "block";
	replaceImg.src = img.src;
	captionText.innerHTML = img.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal image, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}