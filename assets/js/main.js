"use strict";

/* ======= Header animation ======= */   
const header = document.getElementById('header');  

window.onload=function() 
{   
    headerAnimation(); 

};

window.onresize=function() 
{   
    headerAnimation(); 

}; 

window.onscroll=function() 
{ 
    headerAnimation(); 

}; 
    

function headerAnimation () {

    var scrollTop = window.scrollY;
	
	if ( scrollTop > 100 ) {	    
	    header.classList.add('header-shrink');    
	    	    
	} else {
	    header.classList.remove('header-shrink');
	}

};

/* ===== Smooth scrolling ====== */
/*  Note: You need to include smoothscroll.min.js (smooth scroll behavior polyfill) on the page to cover some browsers */
/* Ref: https://github.com/iamdustan/smoothscroll */


let scrollLinks = document.querySelectorAll('.scrollto');
const pageNavWrapper = document.getElementById('navigation');

scrollLinks.forEach((scrollLink) => {

	scrollLink.addEventListener('click', (e) => {
		
		e.preventDefault();

		let element = document.querySelector(scrollLink.getAttribute("href"));
		
		const yOffset = 69; //page .header height
		
		//console.log(yOffset);
		
		const y = element.getBoundingClientRect().top + window.pageYOffset - yOffset;
		
		window.scrollTo({top: y, behavior: 'smooth'});
		
		
		//Collapse mobile menu after clicking
		if (pageNavWrapper.classList.contains('show')){
			pageNavWrapper.classList.remove('show');
		}

		
    });
	
});
    

/* ===== Gumshoe SrollSpy ===== */
/* Ref: https://github.com/cferdinandi/gumshoe  */
// Get the sticky header


// Initialize Gumshoe
var spy = new Gumshoe('#navigation a', {
	offset: 69 //page .header heights
});


/* ======= Countdown ========= */
// set the date we're counting down to
var target_date = new Date("Apr 26, 2022").getTime();
 
// variables for time units
var days, hours, minutes, seconds;
 
// get tag element
var countdown =  document.getElementById("countdown-box");
var days_span = document.createElement("SPAN");
days_span.className = 'days';
countdown.appendChild(days_span);
var hours_span = document.createElement("SPAN");
hours_span.className = 'hours';
countdown.appendChild(hours_span);
var minutes_span = document.createElement("SPAN");
minutes_span.className = 'minutes';
countdown.appendChild(minutes_span);
var secs_span = document.createElement("SPAN");
secs_span.className = 'secs';
countdown.appendChild(secs_span);
 
// update the tag with id "countdown" every 1 second
setInterval(function () {
 
    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
 
    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;
     
    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
     
    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);
     
    // format countdown string + set tag value.
    days_span.innerHTML = '<span class="number">' + days + '</span>' + '<span class="unit">Dias</span>';
    hours_span.innerHTML = '<span class="number">' + hours + '</span>' + '<span class="unit">Horas</span>';
    minutes_span.innerHTML = '<span class="number">' + minutes + '</span>' + '<span class="unit">Minutos</span>';
    secs_span.innerHTML = '<span class="number">' + seconds + '</span>' + '<span class="unit">Segundos</span>'; 
 
}, 1000);

$('#bootstrapForm').submit(function (event) {
    event.preventDefault()
    var extraData = {}
    $('#bootstrapForm').ajaxSubmit({
        data: extraData,
        dataType: 'jsonp',  // This won't really work. It's just to use a GET instead of a POST to allow cookies from different domain.
        error: function () {
            // Submit of form should be successful but JSONP callback will fail because Google Forms
            // does not support it, so this is handled as a failure.
            alert('Form Submitted. Thanks.')
            // You can also redirect the user to a custom thank-you page:
            window.location = 'https://mpebrasil.com.br/'
        }
    })
})
