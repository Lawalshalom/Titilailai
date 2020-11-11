import React, { useEffect } from 'react';
import "jquery";
import "owl.carousel";

const Photos = () => {

useEffect(() => {

        /* eslint-disable no-restricted-globals */
    /* eslint-disable no-unused-expressions */
    /* eslint-disable eqeqeq */
    /* eslint-disable no-undef */
    !(function($) {
    // Testimonials carousel (uses the Owl Carousel library)
    $(document).ready(function() {
    $(".photo1-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    center: true,
    slideTransition: 'linear',
    responsive: {
    0: {
    items: 2
    },
    768: {
    items: 3
    },
    900: {
    items: 4
    }
    }
    });
});

    $(document).ready(function() {
        $(".photo2-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        center: true,
        responsive: {
        0: {
        items: 2
        },
        768: {
        items: 2
        },
        900: {
        items: 4
        }
        }
        });
    });


    })(jQuery);

})

    return (
        <>
            <div className="owl-carousel photo1-carousel overflow-hidden">
                <img src="tinified/5.png" alt="" />
                <img src="tinified/11.png" alt="" />
                <img src="tinified/6.png" alt="" />
                <img src="tinified/15.png" alt="" />
                <img src="tinified/7.png" alt="" />
                <img src="tinified/8.png" alt="" />
                <img src="tinified/12.png" alt="" />
                <img src="tinified/16.png" alt="" />
                <img src="tinified/9.png" alt="" />
                <img src="tinified/10.png" alt="" />
                <img src="tinified/13.png" alt="" />
                <img src="tinified/17.png" alt="" />
                <img src="tinified/11.png" alt="" />
                <img src="tinified/19.png" alt="" />
                <img src="tinified/14.png" alt="" />
            </div>

            <div className="owl-carousel photo2-carousel">
                <img src="tinified/1.png" alt="" />
                <img src="tinified/21.png" alt="" />
                <img src="tinified/2.png" alt="" />
                <img src="tinified/3.png" alt="" />
                <img src="tinified/22.png" alt="" />
                <img src="tinified/4.png" alt="" />
                <img src="tinified/23.png" alt="" />
                <img src="tinified/24.png" alt="" />
            </div>
        </>
   )
}
export default Photos;