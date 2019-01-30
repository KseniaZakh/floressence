function resize() {
	if ($("nav").length!=0 &&
	$("ul.mob_menu").length!=0) {
		if ($("nav").hasClass("mob") &&
		 $("ul.mob_menu").hasClass("opened")) {
					$("nav").removeClass("mob");
					$("ul.mob_menu").removeClass("opened");
					$("div.container").removeClass("opened");
					$("header").removeClass("opened");
			}
		}
}

$(document).ready(function() {
	$("ul.mob_menu").click(function() {
		if ($("nav").length!=0) {
			if ($(this).hasClass("opened")) {
				$(this).removeClass("opened");
				$("nav").removeClass("mob");
				$("div.container").removeClass("opened");
				$("header").removeClass("opened");
				}
			else {
				$(this).addClass("opened");
				$("nav").addClass("mob");
				$("div.container").addClass("opened");
				$("header").addClass("opened");
				}
			}
		});
		$("nav").click(function() {
			if ($(this).hasClass("mob")) {
				$(this).removeClass("mob");
				$("ul.mob_menu").removeClass("opened");
				$("div.container").removeClass("opened");
				$("header").removeClass("opened");
				}
		});

		$(".switch_parfum").click(function() {
			$("#parfum").addClass("opened");
		});

		if ($("footer").length!=0) {
				$("div.container").css({"padding-bottom" : ($("footer").outerHeight())});
		}

		return false;
})
