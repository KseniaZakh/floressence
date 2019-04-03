function resize() {
	if ($("nav").length!=0 && $("div.container").hasClass("opened")) {
				$("div.container").removeClass("opened");
			}

	if ($(".preview.company").length !=0) {
		var widthR = $(window).width();
		var cont = $(".content").width();
		var leftCoord = (widthR - cont) / 2;
		$(".preview.company").css({"width" : widthR + "px", "left" :-leftCoord + "px"});
		}

	if ($(".preview.experts").length !=0) {

		var maxHeight = -1;
		$("ul.experts > li > div").each(function() {
			maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
		});

		$("ul.experts > li > div").each(function() {
			$(this).height(maxHeight);
		});

		$("ul.experts > li").css({"height" : maxHeight + "px"});

		if(window.matchMedia("(min-width: 1041px)").matches) {
			$(".preview.experts").css({"height" : (maxHeight + 80) + "px"});
			}
		if((window.matchMedia("(max-width: 1040px)").matches)
		&&  (window.matchMedia("(min-width:721px)").matches)){
			$(".preview.experts").css({"height" : ((maxHeight * 3)+160) + "px"});
		}

		if((window.matchMedia("(max-width: 720px)").matches)
		&&  (window.matchMedia("(min-width:481px)").matches)){
			$(".preview.experts").css({"height" : ((maxHeight * 3)+140) + "px"});
		}

		if(window.matchMedia("(max-width: 480px)").matches) {
			$(".preview.experts").css({"height" : (maxHeight + 120) + "px"});
			}
	}
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
