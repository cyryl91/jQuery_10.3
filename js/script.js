$(function(){

var carouselList = $("#carousel ul");

var prev = $('body').find('.btnP'),
	next = $('body').find('.btnN');



function wPrawo(){
	
	var firstItem = carouselList.find("li:first"),
		lastItem = carouselList.find("li:last");  


	lastItem.after(firstItem);  
	carouselList.css({marginLeft: 0}); 
}

$(prev).click(function(){
	console.log('wLewo');

	var firstItem = carouselList.find("li:first"),
		lastItem = carouselList.find("li:last");

	
	firstItem.before(lastItem);
	carouselList.css({marginLeft: -600}).animate({'marginLeft': 0}, 1000);
	
});

$(next).click(function(){
	console.log('wPrawo');
	carouselList.animate({'marginLeft': -600}, 1000, wPrawo);
	
});



});



// akcja w lewo, click.button".prev":
//1. najpierw przenies ostatni element na piersze miejsce + natychmiastowo ustaw marginleft na -600px
//2. zrób animacje od -600 do 0, trwającą 1000ms