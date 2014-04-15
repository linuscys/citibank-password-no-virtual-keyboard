// ==UserScript==
// @name           Citibank no virtual keyboard
// @description	   When you login webbank at www.citibank.com.tw, no need to enter password with virtual keyboard
// @version 1.2
// @date 2014-04-15
// @include        https://www.citibank.com.tw/TWGCB/JSO/signon/*
// @match          https://www.citibank.com.tw/TWGCB/JSO/signon/*
// ==/UserScript==

(function(){
	if(location.href.match(/^https\:\/\/www\.citibank\.com\.tw\/TWGCB\/JSO\/signon/)) {
		function replaceFunction () {
			window.showVkb = function(){};
		}
		var script = document.createElement('script');
		script.appendChild(document.createTextNode('('+ replaceFunction +')();'));
		(document.body || document.head || document.documentElement).appendChild(script);
		var password = document.getElementById('password');
		password.removeAttribute('readonly');
		// password.removeAttribute('onkeyup');
		// password.removeAttribute('onkeydown');
		// password.removeAttribute('onclick');
		// password.removeAttribute('onfocus');
	}
})()
