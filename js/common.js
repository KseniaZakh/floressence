function resize() {
		if ($("div.container > footer").length!=0) {
			$("div.container").css({"padding-bottom" : ($("div.container > footer").outerHeight())});
		}
}

$(document).ready(function() {
	
})
