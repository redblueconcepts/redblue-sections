jQuery(document).ready(function($){$("#featured-item-carousel").slick({dots:!0,infinite:!0,slidesToShow:3,slidesToScroll:3,adaptiveHeight:!0,speed:2e3,fade:!1,centerMode:!1,autoplay:!0,autoplaySpeed:2e3,arrows:!1,responsive:[{breakpoint:1023,settings:{arrows:!1,slidesToShow:2,slidesToScroll:2}},{breakpoint:600,settings:{dots:!1,arrows:!0,slidesToShow:1,slidesToScroll:1}}]})});