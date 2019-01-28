function resize() {
	if ($("nav").length!=0 &&
	$("ul.mob_menu").length!=0) {
		if ($("nav").hasClass("mob") &&
		 $("ul.mob_menu").hasClass("opened")) {
					$("nav").removeClass("mob");
					$("ul.mob_menu").removeClass("opened");
					$("div.container").css({"right" : "0"});
					$("header").css({"right" : "0"});
			}
		}
}

$(document).ready(function() {
	$("div.lang"). on("click", function() {
	$("ul.lang_choice").slideToggle(500);
	})

	$("ul.mob_menu").click(function() {
		if ($("nav").length!=0) {
			if ($(this).hasClass("opened")) {
				$(this).removeClass("opened");
				$("nav").removeClass("mob");
				$("div.container").css({"right" : "0"});
				$("header").css({"right" : "0"});
				}
			else {
				$(this).addClass("opened");
				$("nav").addClass("mob");
					if (window.matchMedia("(max-width: 480px)").matches) {
						$("div.container").css({"right" : "160px"});
						$("header").css({"right" : "160px"});
						}
					else {
						$("div.container").css({"right" : "320px"});
						$("header").css({"right" : "320px"});
						}
				}
			}
		});
		$("nav").click(function() {
			if ($(this).hasClass("mob")) {
				$(this).removeClass("mob");
				$("ul.mob_menu").removeClass("opened");
				$("div.container").css({"right" : "0"});
				$("header").css({"right" : "0"});
				}
		});
		return false;

	if ($("div.container > footer").length!=0) {
		$("div.container").css({"padding-bottom" : ($("div.container > footer").outerHeight())});
	}

})
