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
    smartSpeed: 1000,
    slideTransition: 'linear',
    nav: true,
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
        smartSpeed: 1000,
        rtl: true,
        nav: true,
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
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1605134852/titilailai/5_eerxyn.png" alt="" />
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1605134856/titilailai/11_uwmdk4.png" alt="" />
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1605134852/titilailai/6_jdfail.png" alt="" />
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1605134870/titilailai/15_s9pwe2.png" alt="" />
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1605134860/titilailai/7_hecgan.png" alt="" />
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1605134858/titilailai/8_cg2t6w.png" alt="" />
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1605134861/titilailai/12_sfvga0.png" alt="" />
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1605134864/titilailai/16_o4oyqx.png" alt="" />
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1605134862/titilailai/9_ozmnpl.png" alt="" />
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1605134864/titilailai/18_e5ag6l.png" alt="" />
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1605134858/titilailai/10_amy8bg.png" alt="" />
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1605134864/titilailai/13_ib0jyp.png" alt="" />
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1605134866/titilailai/17_camfcj.png" alt="" />
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1605134856/titilailai/11_uwmdk4.png" alt="" />
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1605134869/titilailai/19_l25arc.png" alt="" />
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1605134863/titilailai/14_urstoq.png" alt="" />
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1605134868/titilailai/20_a5cz8v.png" alt="" />
            </div>

            <div className="owl-carousel photo2-carousel">
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1605134855/titilailai/1_pd03qw.png" alt="" />
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1605134873/titilailai/21_syoy3v.png" alt="" />
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1605134856/titilailai/2_ckgt8j.png" alt="" />
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1605134875/titilailai/23_mtfgyj.png" alt="" />
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1605134852/titilailai/3_qxhcg8.png" alt="" />
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1605134875/titilailai/22_vmpred.png" alt="" />
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1605134859/titilailai/4_ipgbhs.png" alt="" />
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1605134876/titilailai/24_chzd7s.png" alt="" />
            </div>
        </>
   )
}
export default Photos;