if(location.href.match(/^https\:\/\/www\.citibank\.com\.tw\/TWGCB\/JSO\/signon/)) {
	(function(){
		var password = document.getElementById('password');
		password.removeAttribute('readonly');
		password.removeAttribute('onkeyup');
		password.removeAttribute('onkeydown');
		password.removeAttribute('onclick');
	})()
}
