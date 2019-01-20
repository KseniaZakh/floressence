$(document).ready(function() {
	$(function() {
    var lastElement = false;
    $("ul.contacts > li").each(function() {
        if (lastElement && lastElement.offset().top != $(this).offset().top) {
            lastElement.addClass("nostripe");
        }
        lastElement = $(this);
    }).last().addClass("nostripe");
});
});
