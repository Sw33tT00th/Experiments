//Main Javascript File
$(document).ready(function() {
	var next = 0;
	carousel(next);
});

function carousel(next) {
	var displayImage = $('#display-image');
	var allImages = $('#carousel-images').children();

	setTimeout(function() {
		$('#display-image').fadeTo(500, 0);
		setTimeout(function() {
			displayImage.attr('src', allImages[next].src);
		}, 500);
		$('#display-image').fadeTo(500, 1);
		next = (next + 1) % allImages.length;
		carousel(next);
	}, 5000);
}