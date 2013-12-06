// ==UserScript==
// @name           Citibank no virtual keyboard
// @description	   When you login webbank at www.citibank.com.tw, no need to enter password with virtual keyboard
// @version 1.0
// @date 2013-12-6
// @include        https://www.citibank.com.tw/TWGCB/JSO/signon/*
// @match          https://www.citibank.com.tw/TWGCB/JSO/signon/*
// ==/UserScript==

(function(){
	if(location.href.match(/^https\:\/\/www\.citibank\.com\.tw\/TWGCB\/JSO\/signon/)) {
		var password = document.getElementById('password');
		password.removeAttribute('readonly');
		password.removeAttribute('onkeyup');
		password.removeAttribute('onkeydown');
		password.removeAttribute('onclick');
}
})()
