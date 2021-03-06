(function( $ ) {
  $.fn.handleUpbtn = function(options) {
    var _this = this;

    var settings = $.extend({
      text: 'Go to top',
      easing: 'swing',
      speed: 450
    }, options);

    if(!this.length) {
      var selector = this.selector;
      selector = selector.substr(1);

      var $button = $('<button class="' + selector + '">' + settings.text +'</button>');

      $('body').append( $button );

      this[0] = document.querySelector('button.' + selector);
      this.length = 1;
    }

    isActive( $(window).scrollTop() );

    $(window).scroll(function () {
      isActive( $(this).scrollTop() );
    });

    this.click(function () {
      scrollTo(0);

      return false;
    });

    function isActive(topcoord) {
      if ( topcoord >= 100 ) {
        _this.addClass('active');
      } else {
        _this.removeClass('active');
      }
    }

    function scrollTo(coordY) {
      var testKey = settings.easing in jQuery.easing;

      if ( testKey == 0 ) {
        settings.easing = 'swing';
      }

      $('html, body').animate({
        scrollTop: coordY
      }, settings.speed, settings.easing);
    }
  };
})(jQuery);
