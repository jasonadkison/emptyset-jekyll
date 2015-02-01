//general inits
(function($) {
  
	"use strict";


	$(document).ready(function() {
		
		if ($(this).width() > 768) {
			$(window).stellar({
				horizontalScrolling: false
			});
		}
	});


	//fittext init
	$("[data-fittext]").fitText(1, { minFontSize: '50px', maxFontSize: '200px' });

	//fitvids init
	jQuery(".postbody").fitVids();
	jQuery(".excerpt").fitVids();

})(jQuery);



jQuery(document).ready(function(){

	//ANALYTICS
	if(config.analytics_id != '' || config.analytics_id != null || config.analytics_id != undefined){
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		ga('create', config.analytics_id, config.analytics_domain);
		ga('send', 'pageview');
	}


	//FEATURE SCROLL
	$(".project-see-more").click(function(){
		$("html, body").animate({scrollTop: $('.project-hero').height()}, 1000);
	});

	//MENU TOGGLE
	$("#toggle").on("click", function(e) {
		$(this).toggleClass('on');
		e.preventDefault();
	});


});


