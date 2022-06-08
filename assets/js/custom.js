
$(document).ready(function(){
    //all slider function
    alle_section_slider();
    leistungen_inner_slider();   
    bewertungen_section_slider();

    unser_main_team_slider();

    //woww js
    new WOW().init();

    // Show hide popover
    $(".dropdown").click(function(){
        $(this).find(".dropdown-menu").slideToggle("fast");
    });

    
    $(".dropdown-menu li a").click(function(){
        var drop_down_contain = $(this).text();
        var drop_down_data_value = $(this).attr('data-value');

        $(this).parents('.dropdown').find(".main_drop_title p").text(drop_down_contain);
        $(this).parents('.dropdown').find(".main_drop_title p").attr('data-value', drop_down_data_value);

        // $(".ihr_chart_section").removeClass('active');

        check_training();
    });

    //chart js
    $('.ihr_inner_chart_section .dropdown-menu li a').click(function() {
        $(this).addClass('active').siblings().removeClass('active');

        var ihr_day = $(this).attr('id');
        $('.'+ ihr_day).addClass('active').siblings().removeClass('active');

        on_ref();
    });

  $(".menu-toggle-btn").click(function(){
    $(".menu-nav-block").addClass("open");
    $(".nav-link").addClass("nav-link-open");
    $("body, html").addClass("cm-overflow");
    $(".logo-hold").addClass("white_logo");
    $(".menu-back-btn").addClass("active");
});

  $(".menu-back-btn").click(function(){
    $(".menu-nav-block").removeClass("open");
    $(".nav-link").removeClass("nav-link-open");
    $("body, html").removeClass("cm-overflow");
    $(".logo-hold").removeClass("white_logo");
    $(".menu-back-btn").removeClass("active");
    $('.has-submenu i.fa-angle-down').removeClass('angle_rotact');
});


  $('.has-submenu').click(function () {
    if ($(window).width() <= 1199) {
        $(".dropdown-submenu").slideToggle();
        $(this).find('.fa-angle-down').toggleClass('angle_rotact');
    }
});


    //drop-down js
    $(document).on("click", function(event){
        var $trigger = $(".dropdown");
        if($trigger !== event.target && !$trigger.has(event.target).length){
            $(".dropdown-menu").slideUp("fast");
        }            
    });

    //faq Accordion
    $(".ct_accordion_wrap .ct_accordion_lable").click(function(){
        $(this).parents('.ct_accordion_wrap').siblings().find('.ct_accordion_info').slideUp(); 
        $(this).parents('.ct_accordion_wrap').find('.ct_accordion_info').slideToggle();

        $(this).toggleClass('pluse_rotact');
        $(this).parents('.ct_accordion_wrap').siblings().find('.ct_accordion_lable').removeClass('pluse_rotact');
    });


    //was_wir_bieten_section slider
   $('.was_wir_bieten_section .owl-carousel').owlCarousel({
        loop:false,
        margin:112,
        nav:true,
        dots: false,
        navText: ["<img src='assets/images/leistungen/owl_left.svg'>","<img src='assets/images/leistungen/owl_right.svg'>"],
        responsive:{
            0:{
                dots: true,
                items:1
            },
            576:{
                items:2,
                margin:15
            },
            992:{
                items:3,
                margin:30
            },
            1200:{
                margin:80
            },
            1440:{
                margin:112
            }
        }
    })
   

    $('.moreless-button').click(function() {
        // was_wir_bieten section more-contain slidetoggle
        $(this).parents('.main_more_text').find('.moretext').slideToggle();
        $(this).parents('.main_more_text').find('.slide_toggle_btn').fadeToggle('fast');

        $(this).parents('.owl-item').siblings().find('.moretext').slideUp('slow');
        $(this).parents('.main_more_text').siblings().find('.moretext').slideUp('slow');


        if ($(this).find('span').text() == "weniger") {
            $(this).find('span').text("mehr dazu")
            $(this).find('.fa-angle-down').removeClass('angle_rotact');
            
        } else {
            $(this).find('span').text("weniger");
            $(this).find('.fa-angle-down').addClass('angle_rotact');
        }
    });


    $('.kurse_im_umerblick_section .owl-carousel').owlCarousel({
        // loop:true,
        margin:20,
        nav:false,
        stagePadding: 110,
        dots: false,
        loop: false,
        responsive:{
            0:{
                items:1,
                stagePadding: 0,
                dots:true,
                nav: true,
                navText: ["<img src='assets/images/leistungen/owl_left.svg'>","<img src='assets/images/leistungen/owl_right.svg'>"],
            },
            576:{
                items:2,
                stagePadding: 0,
            },
            992:{
                items:3,
                stagePadding: 0,
            },
            1200:{
                items: 3
            }
        }
    })

    // video js
    $(".play").click(function(){
        $('.video_bm').find('video').get(0).play();
        $(this).parents('.einblicke_video').find('.video_details, .power_by').hide();
        $(this).parents('.einblicke_video::before').css({'content' : 'none'});
    });
    $(".video_bm").click(function(){
        $(this).find('video').get(0).pause();
        $(this).parents('.einblicke_video').find('.video_details, .power_by').show();
    });


    //pop-Up menu js
    $(".ihr_call").click(function(){
        $('.call_popup_menu').addClass('active');
    });

    $(".ja_close").click(function(){
        $('.call_popup_menu').removeClass('active');
    });


    //kurse table js
    $(".kurse_left_contain ul li a").click(function(){
        $(this).addClass('active').parents('.kurse_left_contain ul li').siblings().find('a').removeClass('active'); 

        var kurse_left_contain = $(this).attr('id');
        $('.' + kurse_left_contain).addClass('active').siblings().removeClass('active'); 
    });

    // footer-fixed menu
    $(".footer-fixed-trigger").click(function(){
        $(".footer-fixed-trigger").toggleClass("active");
        $(".footer-fixed-icon").toggleClass("show");
    });

    //studio-page slider
    $('.studio_page .box_container .owl-carousel').owlCarousel({
        loop:true,
        margin:60,
        nav: true,
        navText: ["<img src='assets/images/leistungen/owl_left.svg'>","<img src='assets/images/leistungen/owl_right.svg'>"],
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2,
                margin:30,
                dots:false,
            },
            992:{
                items:3,
                dots:false,
                nav:false,
            }
        }
    })

    $('.news_page .box_container .owl-carousel').owlCarousel({
        loop:true,
        margin:60,
        nav: true,
        navText: ["<img src='assets/images/leistungen/owl_left.svg'>","<img src='assets/images/leistungen/owl_right.svg'>"],
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2,
                margin:30,
                dots:false,
            },
            992:{
                items:3,
                dots:false,
                nav:false,
            }
        }
    });

});

//all slider resize windows
$(window).resize(function(){
    alle_section_slider();
    leistungen_inner_slider();   
    bewertungen_section_slider();

    unser_main_team_slider();
});


//addclass in ihr chart
var s = $(".ihr_chart_section");
var offset1 = 100;
var pos = s.position(); 
function on_ref(){
    var windowpos = $(window).scrollTop();
    if(jQuery(pos).length)  {    
        if (windowpos >= pos.top){
           s.addClass('active'); 
       }
   }
}

$(document).on("load scroll", function(event){
    on_ref();
});

//video controls
function myFunction() {
  document.getElementById("myVideo").controls = false;
}

//slider function
function alle_section_slider() {
    var checkWidth = $(window).width();

    var owlPost = $(".alle_section_slider");

    if (checkWidth >= 992) {

        if (typeof owlPost.data('owl.carousel') != 'undefined') {
            owlPost.data('owl.carousel').destroy();
        }

        owlPost.removeClass('owl-carousel owl-theme');

    } else if (checkWidth <= 991) {

        owlPost.addClass('owl-carousel owl-theme');

        owlPost.owlCarousel({
            loop:true,
            margin:15,
            dots:true,
            nav: true,
            navText: ["<img src='assets/images/leistungen/owl_left.svg'>","<img src='assets/images/leistungen/owl_right.svg'>"],
            responsive:{
                0:{
                    items:1,
                    dots:true,
                },
                576:{
                    items:1,
                    dots:true,
                    
                },
                768:{
                    items:2,
                    dots:false,
                },
            }
        });
    }
}

function leistungen_inner_slider() {
    var checkWidth = $(window).width();

    var owlPost = $(".leistungen_inner_section");

    if (checkWidth >= 992) {

        if (typeof owlPost.data('owl.carousel') != 'undefined') {
            owlPost.data('owl.carousel').destroy();
        }

        owlPost.removeClass('owl-carousel owl-theme');

    } else if (checkWidth <= 991) {

        owlPost.addClass('owl-carousel owl-theme');

        owlPost.owlCarousel({
            loop: true,
            margin: 30,
            dots: false,
            nav: true,
            navText: ["<img src='assets/images/leistungen/owl_left.svg'>","<img src='assets/images/leistungen/owl_right.svg'>"],
            responsive:{
                0:{
                    items:1,
                    dots: true,
                },
                576:{
                    items:1,
                },
                768:{
                    items:2,
                },
            }
        });
    }
}

function bewertungen_section_slider() {
    var checkWidth = $(window).width();

    var owlPost = $(".bewertungen_inner_section");

    if (checkWidth >= 992) {

        if (typeof owlPost.data('owl.carousel') != 'undefined') {
            owlPost.data('owl.carousel').destroy();
        }

        owlPost.removeClass('owl-carousel owl-theme');

    } else if (checkWidth <= 991) {

        owlPost.addClass('owl-carousel owl-theme');

        owlPost.owlCarousel({
            loop: true,
            margin: 15,
            nav: true,
            navText: ["<img src='assets/images/leistungen/owl_left.svg'>","<img src='assets/images/leistungen/owl_right.svg'>"],
            responsive:{
                0:{
                    items:1,
                    dots:true,
                },
                576:{
                    items:1,
                },
                768:{
                    items:2,
                    dots:false,
                },
            }
        });
    }
}


// Slider For Studio Page

function unser_main_team_slider() {
    var checkWidth = $(window).width();

    var owlPost = $(".unser_main_team_slider");

    if (checkWidth >= 768) {

        if (typeof owlPost.data('owl.carousel') != 'undefined') {
            owlPost.data('owl.carousel').destroy();
        }

        owlPost.removeClass('owl-carousel owl-theme');

    } else if (checkWidth <= 767) {

        owlPost.addClass('owl-carousel owl-theme');

        owlPost.owlCarousel({
            loop:true,
            margin:0,
            nav: true,
            navText: ["<img src='assets/images/leistungen/owl_left.svg'>","<img src='assets/images/leistungen/owl_right.svg'>"],
            responsive:{
                0:{
                    items:1,
                    margin:15,
                },
                576:{
                    items:2,
                    dots:false,
                },
                768:{
                    items:2,
                },
            }
        });
    }
}

// Studio Page Slider


// email input js
$('.email_input').on('click change input', function(){
    email_input();
})
function email_input(){
    var valsearch = $(".email_input").val().length;

    if(valsearch > 0){
        $('.email_box .email_img').css("opacity", "0");
    }
    else{
        $('.email_box .email_img').css("opacity", "1");
    }
}

//mobile drop_down click function
function check_training(){

    var traning_value = $(".drop_down_first .main_drop_title p").attr('data-value');
    var day_value = $(".drop_down_sec .main_drop_title p").attr('data-value');

    console.log(traning_value);
    console.log(day_value);


    var merge_class = traning_value + "_" + day_value;
    console.log(merge_class);

    $(".main_kurse_mobile_section").find("." + merge_class).addClass('active').siblings().removeClass('active');

}