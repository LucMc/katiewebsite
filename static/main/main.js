(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });

})(jQuery);
$(window).resize(function{
    // your code
    var windowWidth=$(window).width();
    var mainContainerWidth=windowWidth-500; // For example
    $("#yourMainContainer").css({"width":mainContainerWidth+"px"});
});