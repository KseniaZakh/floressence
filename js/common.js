function resize() {
	if ($("nav").length!=0 && $("div.container").hasClass("opened")) {
				$("div.container").removeClass("opened");
			}
		}

$(document).ready(function() {

				$('.number').each(function () {
			$(this).prop('Counter',0).animate({
				Counter: $(this).text()
			}, {
				duration: 4000,
				easing: 'swing',
				step: function (now) {
					$(this).text(Math.ceil(now));
				}
			});
			});

			$("ul.mob_menu").click(function() {
				if ($("div.container > nav").length!=0) {
					$("div.container").toggleClass("opened");
					}
				});

				$("div.container > article > div.video > span").on("click", function() {
				setTimeout(function(){
					$("div.container > article > div.video > video").get(0).play();
				}, 300);
				});
			$("div.container > article > div.video > span").click();

			if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		$("div.preview").css("background-attachment", "fixed");
		}

		$("div.photo_text > div > div").click(function() {
			if ($("div.photo_text > div > img").length!=0) {
				$("div.photo_text > div").addClass("opened");
				}
			});

			return false;
			});
