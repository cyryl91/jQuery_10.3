$(function(){


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

});