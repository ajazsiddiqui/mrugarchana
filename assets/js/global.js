/**
 * Theme javascript functions file.
 *
 */
(function ($) {
    "use strict";

    // Nav
    function navigation() {
        // Add current class to active menu's item
        var links = $(".navbar a, .nav a");
        $.each(links, function (key, va) {
            if (va.href === document.URL) {
                $(this)
                    .addClass("active")
                    .parents("li")
                    .addClass("active");
            }
        });
    }

    // Initialize lozad library
    lozad('.lozad', {
        load: function(el) {
            el.src = el.dataset.src;
            
        }
    }).observe()

    // Popup 
    function popupGallery() {
        $(".popup-gallery").magnificPopup({
            delegate: "img",
            type: "image",
            mainClass: "mfp-with-zoom mfp-img-mobile",
            fixedContentPos: false,
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300 // don't foget to change the duration also in CSS
            },
            callbacks: {
                elementParse: function (qw) {
                    qw.src = qw.el.attr("src");
                }
            }
        });
		
		 $(".popup-gallery.alt").magnificPopup({
            delegate: "a",
            type: "image",
            mainClass: "mfp-with-zoom mfp-img-mobile",
            fixedContentPos: false,
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300 // don't foget to change the duration also in CSS
            },
            callbacks: {
                elementParse: function (qw) {
                    qw.src = qw.el.attr("href");
                }
            }
        });
		
		$('.popup-gallery.alt2').each(function() { // the containers for all your galleries
			$(this).magnificPopup({
				delegate: 'a', // the selector for gallery item
				type: 'image',
				gallery: {
				  enabled:true
				},
            zoom: {
                enabled: true,
                duration: 300 // don't foget to change the duration also in CSS
            },
            callbacks: {
                elementParse: function (qw) {
                    qw.src = qw.el.attr("href");
                }
            }
			});
		});


        // For video popup (PLAY VIDEO TRIGGER)
        $(".iframe-trigger, #iframe-trigger").magnificPopup({
            disableOn: 700,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    }

    // Passive listeners to improve scrolling performance
    window.addEventListener("mousewheel", function( event ) {

    }, { passive: true})


    /* Document Ready */
    $(document).ready(function () {

        // Navigation
        navigation();

        // CSS animations
        AOS.init({
            offset: 200,
            duration: 1500,
            once: true,
        });

        // countTo
        if ($(".timer").length) {
            $(".timer").countTo();
        }

        // countdown
        $("#getting-started").countdown("2022/01/01", function (event) {
            var $this = $(this);
            $this.html(
                event.strftime(
                    '<span class="countdown_value"> %m <span class="countdown_lable"> Months  </span></span> <span class="countdown_value"> %d <span class="countdown_lable"> Days </span> </span> <span class="countdown_value"> %H <span class="countdown_lable"> Hours </span></span> <span class="countdown_value"> %M <span class="countdown_lable"> Minutes </span></span> <span class="countdown_value"> %S <span class="countdown_lable"> Seconds </span></span>'
                )
            );
        });

        // Popup
        popupGallery();
    });

})(jQuery);

/*=========================================================================
	Open form on mobile
=========================================================================*/ 	
 jQuery(document).ready(function($) {
  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww < 992) {
      $('.slide-form').addClass('open');
    } else if (ww >= 992) {
      $('.slide-form').removeClass('open');
    }
  };
  // $(window).resize(function(){
    // alterClass();
  // });
  //Fire it when the page first loads:
  alterClass();
});

$('#slide-btn').click(function(e) {
	e.preventDefault();
	$(this).parent().toggleClass('open');
});

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

var stats = getUrlParameter('form');

if(stats=='submitted'){
	$('#scs-msg').addClass('show');
	setTimeout(function() {
		$('#scs-msg').removeClass('show');
	}, 3000);
}
	