"use strict";

let rocket = document.querySelector('.mouse-parallax_0');
let planet1 = document.querySelector('.mouse-parallax_1');
let planet2 = document.querySelector('.mouse-parallax_2');
let planet3 = document.querySelector('.mouse-parallax_3');
let planet4 = document.querySelector('.mouse-parallax_4');
let planet5 = document.querySelector('.mouse-parallax_5');
let planet6 = document.querySelector('.mouse-parallax_6');
let planet7 = document.querySelector('.mouse-parallax_7');
let planet8 = document.querySelector('.mouse-parallax_8');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    rocket.style.transform = 'translate(-' + x * 0 + 'px, -' + y * 20 + 'px)';
    planet1.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    planet2.style.transform = 'translate(+' + x * 50 + 'px, -' + y * 50 + 'px)';
    planet3.style.transform = 'translate(-' + x * 60 + 'px, -' + y * 25 + 'px)';
    planet4.style.transform = 'translate(-' + x * 10 + 'px, -' + y * 30 + 'px)';
    planet5.style.transform = 'translate(-' + x * 10 + 'px, -' + y * 10 + 'px)';
    planet6.style.transform = 'translate(-' + x * 16 + 'px, -' + y * 16 + 'px)';
    planet7.style.transform = 'translate(-' + x * 16 + 'px, -' + y * 16 + 'px)';
	planet8.style.transform = 'translate(-' + x * 16 + 'px, -' + y * 16 + 'px)';
});

  $(document).ready (function(){
    $('.slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});
  });

  $(document).ready (function(){
    $('.slider-2').slick({
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 1,
    autoplay: true,
  autoplaySpeed: 1000,
});
  });

  $(document).ready (function(){
    $('.slider-mobile').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
    autoplay: true,
  autoplaySpeed: 2000,
});
  });


$("#services1").click(function() { 
    $('html, body').animate({
        scrollTop: $(".services").offset().top  
    }, 1000); 
});

$("#portfolio1").click(function() { 
    $('html, body').animate({
        scrollTop: $(".portfolio").offset().top  
    }, 1000); 
});

$("#contacts1").click(function() { 
    $('html, body').animate({
        scrollTop: $(".contact-me").offset().top 
    }, 1000); 
});

$("#services").click(function() { 
    $('html, body').animate({
        scrollTop: $(".services").offset().top  
    }, 1000); 
});

$("#portfolio").click(function() { 
    $('html, body').animate({
        scrollTop: $(".portfolio").offset().top  
    }, 1000); 
});

$("#contacts").click(function() { 
    $('html, body').animate({
        scrollTop: $(".contact-me").offset().top 
    }, 1000); 
});

$("#contact-me").click(function() { 
    $('html, body').animate({
        scrollTop: $(".contact-me").offset().top 
    }, 1000); 
});

$("#free-consultation").click(function() { 
    $('html, body').animate({
        scrollTop: $(".contact-me").offset().top 
    }, 1000); 
});

$("#here").click(function() { 
    $('html, body').animate({
        scrollTop: $(".contact-me").offset().top 
    }, 1000); 
});


$('.mobile div').on('click', () => {
    $('.mobile div').toggleClass('active');
    $('.mobile nav').toggleClass('open');
    $('.mobile nav ul').toggleClass('show');
});
for (let a = 1; a <= $(".mobile ul li").length; a++){
    $(".mobile ul li:nth-child("+ a +")").css("animation-delay", "."+ (a+1) +"s");   
}

let content1 = document.getElementById("content1");
let content2 = document.getElementById("content2");
let content3 = document.getElementById("content3");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

function openHTML() {
    content1.style.transform = "translateX(0)";
    content2.style.transform = "translateX(100%)";
    content3.style.transform = "translateX(100%)";
}

function openCSS() {
    content1.style.transform = "translateX(100%)";
    content2.style.transform = "translateX(0)";
    content3.style.transform = "translateX(100%)";
}
function openJS() {
    content1.style.transform = "translateX(100%)";
    content2.style.transform = "translateX(100%)";
    content3.style.transform = "translateX(0)";
}