$(function(){
/*

var carouselList = $("#carousel ul");

function timeNext(){
	setInterval(changeSliden, 3000);
}

function changeSliden(){
	carouselList.animate({'marginLeft':-600}, 2000, moveFirstSlide);
	
	}

function moveFirstSlide(){

	var firstItem = carouselList.find("li:first"),
		lastItem = carouselList.find("li:last");

	lastItem.after(firstItem);
	carouselList.css({marginLeft:0});
}


timeNext();


*/
var buttonPrivers = $('js-btnP'),
	buttonNext = $('js-btnN'),
	btn = $('button');

var carouselList = $("#carousel ul");

$('#js-btnP').click(function(){
	wPrawo();
});
$('#js-btnN').click(function(){
	wLewo();
});
console.log(btn);


function wPrawo(){
	carouselList.animate({'marginLeft':-600}, 2000, moveFirstSlide);

}

function wLewo(){
	carouselList.animate({'marginLeft':600}, 2000, moveFirstSlide);
}

function moveFirstSlide(){

	var firstItem = carouselList.find("li:first"),
		lastItem = carouselList.find("li:last");

	lastItem.after(firstItem);
	carouselList.css({marginLeft:0});
}


});

