﻿SpilGames(["SWP","SWPUtils"],function(b,c){b.init("header");var a=document.querySelector(".wdg_header .authentication");b.System.init(function(b){switch(b.name){case "popup.header.open":window.setTimeout(function(){c.addClass(a,"is-open")},0);break;case "popup.header.close":c.removeClass(a,"is-open")}},!0)});SpilGames(["SWPUtils","DOMEvent","FeatureDetector"],function(b,c,a){function k(b,a){function c(){d=!1;b()}var d;return function(){d||(d=!0,e.setTimeout(c,a))}}if(a.transitions()){var e=window;a=e.document;var g=a.querySelector(".inner.container"),f=a.querySelector("#wdg_header > .inner"),d=!0,h;g&&f&&c.add(e,"scroll",k(function(){var a=e.pageYOffset,c=a-h||0;d&&0<c&&100<a?"left"!==g.getAttribute("data-offcanvas")&&(b.addClass(f,"sticky-hidden"),d=!1):!d&&0>c&&(b.removeClass(f,"sticky-hidden"),d=!0);
h=a},200))}});