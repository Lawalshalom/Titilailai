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
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1606143115/titilailai/26_t98wif.webp" alt="" />
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1606143115/titilailai/27_m8ppx1.webp" alt="" />
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1606143117/titilailai/34_ixcqw3.webp" alt="" />
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1606143117/titilailai/35_hx9o0l.webp" alt="" />
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1606143115/titilailai/24_otswrr.webp" alt="" />
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1606143117/titilailai/31_l0g4s7.webp" alt="" />
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1606143115/titilailai/25_xyuhjg.webp" alt="" />
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1606143116/titilailai/32_gbv4fr.webp" alt="" />
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1606143116/titilailai/29_qxywgw.webp" alt="" />
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1606143116/titilailai/28_n3qo0d.webp" alt="" />
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1606143116/titilailai/33_rwjwke.webp" alt="" />
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1606143115/titilailai/30_qc4cdm.webp" alt="" />
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1606143114/titilailai/23_dymsep.webp" alt="" />
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1606143114/titilailai/22_ff3pln.webp" alt="" />
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1606143113/titilailai/14_dvidto.webp" alt="" />
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1606143114/titilailai/19_hufkuj.webp" alt="" />
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1606143113/titilailai/17_tpdpil.webp" alt="" />
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1606143113/titilailai/18_s1klj7.webp" alt="" />
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1606143112/titilailai/12_w84ukk.webp" alt="" />
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1606143112/titilailai/11_ywghhh.webp" alt="" />
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1606143112/titilailai/9_lbecwi.webp" alt="" />
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1606143112/titilailai/13_cajqtc.webp" alt="" />
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1606143111/titilailai/10_akx5mg.webp" alt="" />
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1606143110/titilailai/6_lsgkyf.webp" alt="" />
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1606143110/titilailai/3_tydhyl.webp" alt="" />
                <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1606143109/titilailai/1_yqfazi.webp" alt="" />
            </div>
        </>
   )
}
export default Photos;