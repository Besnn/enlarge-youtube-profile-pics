// ==UserScript==
// @name     Large YT Profile Pics
// @author   Besnn
// @version  1
// @icon     https://raw.githubusercontent.com/Besnn/enlarge-youtube-profile-pics/main/img/favicon.ico
// icon courtesy of Freepik
// @match    *://yt3.ggpht.com/*
// @grant    none
// ==/UserScript==

var imageURL = window.location.toString();
var regex = /=.*/;

window.addEventListener('load', function() {
		window.location = imageURL.replace(regex,"");
	}, false);
