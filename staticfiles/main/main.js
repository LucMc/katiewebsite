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

$(document).ready(function(){
    $(window).resize();
});
$(window).resize(function(){
    // your code
    var windowWidth=$(window).width();
    var mainContainerWidth=windowWidth-500; // For example
    $("#content").css({"width":mainContainerWidth+"px"});
});