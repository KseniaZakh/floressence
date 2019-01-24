function resize() {

}

$(document).ready(function() {
	$("ul.language > li:first-child").on("click", function() {
		$("ul.language > li:not(:first-child)").toggle();
	})

	$("ul.mob_menu").click(function() {
		if ($(this).hasClass("opened")) {
			$(this).removeClass("opened");
		}
		else {
			$(this).addClass("opened");
		}
	})

	if ($("div.container > footer").length!=0) {
		$("div.container").css({"padding-bottom" : ($("div.container > footer").outerHeight())});
	}

})
