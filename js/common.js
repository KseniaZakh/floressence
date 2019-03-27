function resize() {
	if ($("nav").length!=0 && $("div.container").hasClass("opened")) {
				$("div.container").removeClass("opened");
			}
		}

$(document).ready(function() {

	$(window).scroll(function() {
		if($(window).scrollTop() > $(".records").scrollTop()) {
			$(".number").each(function () {
				$(this).prop("Counter", 0).animate({
					Counter: $(this).text()
				}, {
					duration: 4000,
					easing: "swing",
					step: function (num) {
						$(this).text(Math.ceil(num));
					}
			});
		});
		$(window).unbind("scroll");
		}
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
		
	return false;
			});
