function resize() {

}

$(document).ready(function() {
	$("div.lang"). on("click", function() {
	$("ul.lang_choice").slideToggle(500);
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
