//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "18 October 2025 00:00:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	
