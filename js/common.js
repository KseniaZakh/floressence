function resize() {
	if ($("nav").length!=0 && $("div.container").hasClass("opened")) {
				$("div.container").removeClass("opened");
			}
		}

$(document).ready(function() {
			$("header > div > ul").click(function() {
				if ($("div.container > nav").length!=0) {
					if ($("div.container").hasClass("opened")) {
						$("div.container").removeClass("opened");
						}
					else {
						$("div.container").addClass("opened");
						}
					}
				});

				$("div.container > div.content > div.video > span").on("click", function() {
				setTimeout(function(){
					$("div.container > div.content > div.video > video").get(0).play();
				}, 300);
				});
			$("div.container > div.content > div.video > span").click();

			if (!/iPad|iPhone|iPod/.test(navigator.userAgent)) {
				$("div.preview").css("background-attachment", "fixed");
				$("div.down_level").css("background-attachment", "fixed");
			}

			return false;
			});
