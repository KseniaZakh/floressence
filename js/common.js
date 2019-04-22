function resize() {
	if ($("div.container > footer").length!=0) {
		$("div.container").css({"padding-bottom" : $("div.container > footer").outerHeight() + "px"});
	}

	if ($("nav").length!=0 && $("div.container").hasClass("opened")) {
				$("div.container").removeClass("opened");
			}

	if ($("div.preview.company").length !=0) {
		var widthR = $(window).width();
		var cont = $(".content").width();
		var leftCoord = (widthR - cont) / 2;
		$("div.preview.company").css({"width" : widthR + "px", "left" :-leftCoord + "px"});
		}

	setTimeout (function () {
		if (!points) {
			pointsSwipe();
		}
	}, 100);

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

				$("div.video > span").on("click", function() {
				setTimeout(function(){
					$("div.video > video").get(0).play();
				}, 300);
				});
			$("div.video > span").click();

			if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		$("div.preview, div.down_level").css("background-attachment", "fixed");
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

			if ($("div.swiper").length !== 0 &&
				$("div.swiper > ul > li").length > 2) {
    	 new Swiper("div.swiper", {
    		loop: true,
    		slidesPerView: 4,
    		spaceBetween: 20,
 			breakpoints: {
    			480: {
      				slidesPerView: 1
    				},
    			720: {
      				slidesPerView: 2
				},
				1040: {
					slidesPerView: 3
					}
    			}
    		});
    	}

		return false;
			});
