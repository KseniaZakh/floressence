function resize() {
	if ($("nav").length!=0 && $("div.container").hasClass("opened")) {
				$("div.container").removeClass("opened");
			}
	var widthR = $(window).width();
	var cont = $(".content").width();
	var leftCoord = (widthR - cont) / 2;
	$(".preview.company > span").css({"width" : widthR, "left" :-leftCoord + "px"});

		}


$(document).ready(function() {

	$(window).scroll(function() {
		if($(window).scrollTop() > $(".records").scrollTop()) {
			if(!$(".records").hasClass("selected")) {
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
		$(".records").addClass("selected");
			}
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

		$("div.lb.action").on("click", function(e) {
			var element = document.createElement("div");
			element.setAttribute("class", "lbox");
			element.innerHTML = $(this).html();
		    $("div.container").append(element);
	        e.preventDefault();
			});


			$("div.container").on("click", "div.lbox", function(e) {
			$(this).remove();
			e.preventDefault();
			});

	return false;
			});
