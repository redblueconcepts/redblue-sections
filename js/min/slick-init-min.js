jQuery(document).ready(function($){$(".slick-slider.background_rotator").slick({dots:!1,infinite:!0,adaptiveHeight:!0,speed:2e3,slidesToShow:1,fade:!0,autoplay:!0,autoplaySpeed:2e3,arrows:!1,lazyLoad:"ondemand"}),$("#testimonial-slider").slick({dots:!1,infinite:!0,adaptiveHeight:!0,speed:2e3,slidesToShow:4,fade:!1,autoplay:!0,autoplaySpeed:2e3,arrows:!1,lazyLoad:"ondemand",responsive:[{breakpoint:1400,settings:{arrows:!1,centerMode:!0,slidesToShow:3}},{breakpoint:1023,settings:{arrows:!1,centerMode:!0,slidesToShow:2}},{breakpoint:768,settings:{arrows:!1,centerMode:!0,slidesToShow:1}}]}),$("#featured-content-carousel").slick({dots:!0,infinite:!0,slidesToShow:6,slidesToScroll:6,adaptiveHeight:!0,speed:2e3,fade:!1,centerMode:!1,autoplay:!0,autoplaySpeed:2e3,arrows:!1,responsive:[{breakpoint:1400,settings:{arrows:!1,slidesToShow:4,slidesToScroll:4}},{breakpoint:1023,settings:{arrows:!1,slidesToShow:2,slidesToScroll:2}},{breakpoint:768,settings:{dots:!1,arrows:!0,slidesToShow:1,slidesToScroll:1}}]})});