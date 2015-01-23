//general inits
(function($) {
  
	"use strict";


	$(document).ready(function() {
		
		if ($(this).width() > 768) {
			$(window).stellar({
				horizontalScrolling: false
			});
		}

		$("#navigation").headroom();

	});


	//fittext init
	$("[data-fittext]").fitText(1, { minFontSize: '50px', maxFontSize: '200px' });

})(jQuery);


//headroom init for navbar
(function($) {

	if(!$) {
		return;
	}

	////////////
	// Plugin //
	////////////

	$.fn.headroom = function(option) {
		return this.each(function() {
			var $this   = $(this),
				data      = $this.data('headroom'),
				options   = typeof option === 'object' && option;

			options = $.extend(true, {}, Headroom.options, options);

			if (!data) {
				data = new Headroom(this, options);
				data.init();
				$this.data('headroom', data);
			}
			if (typeof option === 'string') {
				data[option]();
			}
		});
	};

	//////////////
	// Data API //
	//////////////

	$('[data-headroom]').each(function() {
		var $this = $(this);
		$this.headroom($this.data());
	});

}(window.Zepto || window.jQuery));