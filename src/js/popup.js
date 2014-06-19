function windowOpen () {
	var options = {
		url: "http://www.google.com",
		left: 50,
		top: 50,
		type: "popup"
	};

	chrome.windows.create(options,function (win) {
		console.log(win);

		var updateOptions = {
			width : 800,
			height : 480
		};

		// chrome.windows.update(win.id,updateOptions, function (win_) {
		chrome.windows.update(win.id,updateOptions, function (win_) {
			// body...
		});
	});
}

$(function() {
	$("#Pop").on("click",function(){
		windowOpen();
	});
});