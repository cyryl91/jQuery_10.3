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

function wLewo(){
	
	var firstItem = carouselList.find("li:first"),
		lastItem = carouselList.find("li:last");

	
	firstItem.before(lastItem);
	carouselList.css({marginLeft: 0}); 
}

$(prev).click(function(){
	console.log('wLewo');
	carouselList.animate({'marginLeft': 600}, 1000, wLewo);
	
});

$(next).click(function(){
	console.log('wPrawo');
	carouselList.animate({'marginLeft': -600}, 1000, wPrawo);
	
});



});