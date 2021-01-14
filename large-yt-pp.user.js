// ==UserScript==
// @name	Large YT Profile Pics
// @author	Besnn
// @version	1
// @icon	https://raw.githubusercontent.com/Besnn/enlarge-youtube-profile-pics/main/img/favicon.ico
// @match	*://yt3.ggpht.com/*
// @grant	none
// @description Enlarges profile picture of youtube user when opened in new tab. Icon attributed to Freepik: https://www.flaticon.com/authors/freepik
// ==/UserScript==

var imageURL = window.location.toString();
var regex = /=.*/;

window.addEventListener('load', function() {
		window.location = imageURL.replace(regex,"");
	}, false);
