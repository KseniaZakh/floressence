function resize() {
	if ($("nav").length!=0 && $("div.container").hasClass("opened")) {
				$("div.container").removeClass("opened");
			}
		}

$(document).ready(function() {
			$("header > div > ul").click(function() {
				if ($("div.container > nav").length!=0) {
					$("div.container").toggleClass("opened");
					}
				});

				$("div.container > div.content > div.video > span").on("click", function() {
				setTimeout(function(){
					$("div.container > div.content > div.video > video").get(0).play();
				}, 300);
				});
			$("div.container > div.content > div.video > span").click();

			if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		$("div.preview").css("background-attachment", "fixed");
		}

			return false;
			});
