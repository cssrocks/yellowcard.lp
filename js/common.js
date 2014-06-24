head.ready(function() {


/* 
 * Lazy Line Painter - Path Object 
 * Generated using 'SVG to Lazy Line Converter'
 * 
 * http://lazylinepainter.info 
 * Copyright 2013, Cam O'Connell  
 *  
 */ 
 
var pathObj = {
    "lazy": {
        "strokepath": [
            {
                "path": "M81.507,7.087c0,0-74,6.246-74,53.006  c0,63.46,145.327,103.323,216,58C284.84,78.759,195.069-32.157,52.255,22.668",
                "duration": 600
            },
            {
                "path": "M552.914-12.947c0,0-2.444,0.011-6.993,0.466c-4.541,0.465-11.21,1.366-19.444,3.554   c-4.109,1.108-8.603,2.564-13.3,4.607c-4.684,2.051-9.604,4.67-14.285,8.254c-4.682,3.558-9.116,8.119-12.494,13.763   c-1.669,2.826-3.095,5.892-4.181,9.161c-1.068,3.275-1.807,6.74-2.203,10.322c-0.418,3.595-0.45,7.257,0.126,10.94   c0.558,3.679,1.673,7.339,3.278,10.853c3.209,7.048,8.323,13.438,14.413,19.021c6.114,5.587,13.208,10.425,20.846,14.636   c7.656,4.19,15.847,7.809,24.4,10.872c17.117,6.103,35.647,10.079,54.663,11.739c19.001,1.629,38.594,0.98,57.503-3.106   c9.433-2.068,18.701-4.951,27.395-9.008c4.345-2.021,8.551-4.328,12.514-6.953c3.899-2.599,7.431-5.761,10.299-9.396   c2.856-3.646,5.02-7.793,6.275-12.199c1.266-4.401,1.65-9.027,1.252-13.565c-0.781-9.12-4.475-17.744-9.417-25.205   c-4.973-7.492-11.23-13.926-17.993-19.377c-6.756-5.481-14.072-9.968-21.529-13.628c-14.953-7.316-30.433-11.247-44.853-13.066   c-7.223-0.903-14.206-1.283-20.847-1.283c-6.642-0.019-12.946,0.321-18.844,0.911c-11.803,1.172-21.972,3.25-30.236,5.325   c-8.267,2.09-14.657,4.14-18.989,5.6c-2.161,0.745-3.817,1.322-4.924,1.733c-1.111,0.403-1.684,0.61-1.684,0.61   s0.568-0.221,1.669-0.65c1.098-0.437,2.739-1.054,4.884-1.851c4.3-1.555,10.637-3.797,18.893-6.021   c8.248-2.228,18.415-4.497,30.264-5.888c11.833-1.395,25.389-1.878,40.019-0.195c14.594,1.681,30.32,5.483,45.62,12.761   c7.63,3.643,15.145,8.136,22.13,13.676c6.962,5.548,13.417,12.145,18.604,19.889c5.147,7.716,9.075,16.71,9.947,26.423   c0.441,4.831,0.052,9.806-1.298,14.562c-1.336,4.76-3.663,9.254-6.716,13.178c-3.071,3.919-6.801,7.278-10.936,10.055   c-4.09,2.729-8.406,5.114-12.864,7.206c-8.92,4.182-18.378,7.214-28.01,9.26c-19.289,4.097-39.144,4.678-58.374,2.965   c-19.244-1.747-37.966-5.829-55.293-12.072c-8.66-3.125-16.964-6.831-24.7-11.195c-7.728-4.365-14.917-9.371-21.132-15.167   c-6.188-5.792-11.414-12.441-14.685-19.82c-1.634-3.678-2.762-7.518-3.307-11.373c-0.564-3.852-0.486-7.726-0.019-11.389   c0.447-3.685,1.245-7.255,2.385-10.627c1.15-3.369,2.668-6.522,4.446-9.403c3.584-5.763,8.215-10.358,13.045-13.902   c4.832-3.571,9.86-6.135,14.624-8.126c4.777-1.982,9.325-3.37,13.474-4.414c8.31-2.078,15.02-2.78,19.574-3.157   C550.471-12.992,552.914-12.947,552.914-12.947z",
                "duration": 1800
            }
        ],
        "dimensions": {
            "width": 254,
            "height": 147
        }
    }
}; 
 
 
/* 
 Setup and Paint your lazyline! 
 */ 
 
 $(document).ready(function(){ 
 $('#lazy').lazylinepainter( 
 {
    "svgData": pathObj,
    "strokeWidth": 2,
    "strokeColor": "#fc5a01"
}).lazylinepainter('paint'); 
 });

	// isMobile = ( $('.touch').length )? true : false;
	// if( !isMobile ){

	// 	// Cache the Window object
	// 	$window = $(window);

	// 	$('section[data-type="background"]').each(function(){
	// 		var $bgobj = $(this); // assigning the object

	// 		$(window).scroll(function() {
	// 			var yPos = -($window.scrollTop() / $bgobj.data('speed'));

	// 			// Put together our final background position
	// 			var coords = '50% '+ yPos + 'px';

	// 			// Move the background
	// 			$bgobj.css({ backgroundPosition: coords });
	// 		});
	// 	});
	// }


	// $('.b-intro__unit').addClass('slideUp').delay(2000);

	// setTimeout(function(){
	// 	$('.b-intro__unit').addClass('slideUp');
	// }, 500);

	// $(window).scroll(function() {

		// $('#phone').each(function(){
		// var imagePos = $(this).offset().top;

		// var topOfWindow = $(window).scrollTop();
		// 	if (imagePos < topOfWindow+400) {
		// 		$(this).addClass("slideUp");
		// 	}
		// });

				// $('#pin').each(function(){
				// var imagePos = $(this).offset().top;

				// var topOfWindow = $(window).scrollTop();
				// 	if (imagePos < topOfWindow+400) {
				// 		$(this).addClass("hatch");
				// 	}
				// });

				// $('#pop-up-message').each(function(){
				// var imagePos = $(this).offset().top;

				// var topOfWindow = $(window).scrollTop();
				// 	if (imagePos < topOfWindow+400) {
				// 		$(this).addClass("slideExpandUp");
				// 	}
				// });

				// $('#example-4').each(function(){
				// var imagePos = $(this).offset().top;

				// var topOfWindow = $(window).scrollTop();
				// 	if (imagePos < topOfWindow+400) {
				// 		$('.device-arrow').addClass("stretchRight");
				// 	}
				// });

				// $('#example-5').each(function(){
				// var imagePos = $(this).offset().top;
				// var topOfWindow = $(window).scrollTop();
				// 	if (imagePos < topOfWindow+400) {
				// 		$('.graph-bar').addClass("pullUp");
				// 	}
				// });

	// });


	// var target1 = $(".b-app").offset().top;

	// $(window).on('scroll', function(){

	// 		if ($(window).scrollTop() >= target1 && $(window).scrollTop() > target1) {

	// 			$(".b-app").addClass("myClass");

	// 		}else if ($(window).scrollTop() > target1) {

	// 			$(".b-app").removeClass("myClass");
	// 		}
	// });


});