$(window).on('load', function() {

    $(".loading-overlay img").fadeOut(500,
        function() {
            $(this).parent().fadeOut(500);
            $("body").removeClass("overflow")
        });
})

var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null, // optional scroll container selector, otherwise use window,
    resetAnimation: true, // reset animation on end (default is true)
});
wow.init();


$(document).ready(function() {

    // This is to Open Language menu in large Screens
    $(".page-language .lang .lang-name").click(function() {
        $(".lang-back").fadeIn(600);
    });

    $(".page-language .lang .lang-name").click(function() {
        $(".lang .lang-list").slideDown(600);
    });

    $(".lang-back").click(function() {
        $(".lang-back").fadeOut(600);
    });

    $(".lang-back").click(function() {
        $(".lang .lang-list").slideUp(600);
    });


    // This is to Open Configuration menu in 
    $(".user-terms .config a").click(function() {
        $(".overlay-box").fadeIn(600);
    });

    $(".user-terms .config a").click(function() {
        $(".config .config-list").slideDown(600);
    });

    $(".overlay-box").click(function() {
        $(".overlay-box").fadeOut(600);
    });

    $(".overlay-box").click(function() {
        $(".config .config-list").slideUp(600);
    });


    $('.main-slider .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        margin: 10,
        rtl: true,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true,
                loop: true
            },
            768: {
                items: 1,
                nav: false,
                dots: true,
                loop: true
            },
            992: {
                items: 1,
                nav: true,
                dots: true,
                loop: true
            },
            1200: {
                items: 1,
                nav: true,
                dots: true,
                loop: true
            }
        }
    })

    $('.courses .owl-carousel').owlCarousel({
        loop: true,
        // autoplay: true,
        // autoplayTimeout: 4000,
        margin: 30,
        rtl: true,
        navText: ["<i class='fas fa-chevron-right fa-lg'></i>", "<i class='fas fa-chevron-left fa-lg'></i>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false,
                loop: true
            },
            480: {
                items: 2,
                dots: true,
                nav: false,
                loop: true
            },
            720: {
                items: 3,
                dots: true,
                nav: false,
                loop: true
            },
            992: {
                items: 4,
                nav: false,
                dots: true,
                loop: true
            },
            1200: {
                items: 4,
                nav: false,
                dots: true,
                loop: true
            }
        }
    });


    $('.products .owl-carousel').owlCarousel({
        loop: true,
        // autoplay: true,
        // autoplayTimeout: 4000,
        margin: 30,
        rtl: true,
        navText: ["<i class='fas fa-chevron-right fa-lg'></i>", "<i class='fas fa-chevron-left fa-lg'></i>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false,
                loop: true
            },
            480: {
                items: 2,
                dots: true,
                nav: false,
                loop: true
            },
            720: {
                items: 3,
                dots: true,
                nav: false,
                loop: true
            },
            992: {
                items: 4,
                nav: false,
                dots: true,
                loop: true
            },
            1200: {
                items: 4,
                nav: false,
                dots: true,
                loop: true
            }
        }
    });

    //this is to make the features part as owl-carousel slider  
    if ($(window).width() <= 991) {
        $(".gallary-content").addClass("owl-carousel owl-theme");
        $(".gallary-content .element").removeClass("owl-carousel");
        $('.owl-carousel').owlCarousel({
            loop: false,
            margin: 10,
            rtl: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2,
                    nav: false,
                    loop: false
                },
                500: {
                    items: 2,
                    nav: false,
                    loop: false
                }
            }
        })
    } else {
        $(".gallary-content").removeClass("owl-carousel");
        $(".gallary-content .element").removeClass("owl-carousel");
    };


    if ($(window).width() <= 991) {
        $('.collapse[data-parent="#parent"]').on('show.bs.collapse', function() {
            $('.collapse[data-parent="#parent"]').not(this).collapse('hide');
        });
    } else {
        $(".slide-list").addClass("in")
    }


    //This is to Open Search Box in small screens
    $(".hidden-tools .hidden-search").click(function() {
        $(".overlay-box2").fadeIn(600);
    });

    $(".hidden-tools .hidden-search").click(function() {
        $(".hidden-search a span").removeClass("open-search")
        $(".hidden-search a span").addClass("close-search")
        $(".search-box").slideDown(600);
    });

    $(".overlay-box2").click(function() {
        $(".overlay-box2").fadeOut(600);
    });

    $(".overlay-box2").click(function() {
        $(".hidden-search a span").addClass("open-search")
        $(".hidden-search a span").removeClass("close-search")
        $(".search-box").slideUp(600);
    });


    //This is to Open Side Menu in Small Screens
    $(".menu-button,.hidden-menu-link").click(function() {
        $("body").addClass("overflow")
        $(".side-menu").addClass("overflow");
        $(".overlay-box").fadeIn(600);
    });

    $(".menu-button,.hidden-menu-link").click(function() {
        $(".side-menu").addClass("overflow");
        $(".side-menu").addClass("menu-open");
        $(".overlay-box").fadeIn(600);
    });

    $(".close,.overlay-box").click(function() {
        $("body").removeClass("overflow")
        $(".side-menu").removeClass("overflow");
        $(".overlay-box").fadeOut(600);
    });

    $(".close,.overlay-box").click(function() {
        $(".side-menu").removeClass("overflow");
        $(".side-menu").removeClass("menu-open");
        $(".back-overlay").fadeOut(600);
    });



    //This is to Open Products Menu in Small Screens Side Menu
    $(".products-menu").click(function() {
        $(".products-menu-list").slideToggle(600);
    });

    //This is to Open user-config & language Menus in Small Screens Side Menu
    $(".account p").click(function() {
        $(".account ul").slideToggle(600);
    });

    $(".language p").click(function() {
        $(".language ul").slideToggle(600);
    });
});