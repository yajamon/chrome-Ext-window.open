function windowOpen () {
	var options = {
		url: "http://www.google.com",
		left: 50,
		top: 50,
		type: "popup"
	};

	chrome.windows.create(options,function (win) {
		console.log(win);
	});
}

$(function() {
	$("#Pop").on("click",function(){
		windowOpen();
	});
});