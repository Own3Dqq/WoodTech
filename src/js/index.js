// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar, EffectFade } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.hero__swiper', {
    modules: [Navigation, Pagination, Scrollbar, EffectFade],
    speed: 300,
    // effect: '',
    // fadeEffect: {
    //     crossFade: true,
    // },
    slidesPerView: 1,

    // If we need pagination
    pagination: {
        el: '.control__numbers',
        type: 'custom',
        clickable: true,

        renderCustom: function (swiper, current, total) {
            return (
                '<span class="counter">' +
                current +
                '</span>' +
                '<span class="devide">|</span> ' +
                '<span class="total">' +
                total +
                '</span>'
            );
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.control__next',
        prevEl: '.control__prev',
    },

    // Scrollbar
    scrollbar: {
        el: '.control__scrollbar',
        dragSize: '60',
        dragClass: 'control__scrollbar-drag',
        hide: false,
    },
});

// /* Slick slider (Hero) */
// $(document).ready(function () {
//     $('.hero-slider__list').slick({
//         arrows: true,
//         infinite: false,
//         autoplay: false,
//         dots: true,
//         speed: 500,
//         fade: true,
//         initialSlide: 0,
//         cssEase: 'linear',
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         prevArrow: '.hero__prev',
//         nextArrow: '.hero__next',
//         dotsClass: 'hero__wrapper',
//         appendDots: '.hero__switchers',
//         slickPrev: '.hero__prev',
//         slickPrev: '.hero__next',
//     });
// });

/* Works Slider */
// $('.work-slider').slick({
//     dots: true,
//     infinite: false,
//     speed: 300,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     responsive: [
//         {
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 3,
//                 infinite: true,
//                 dots: true,
//             },
//         },
//         {
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//             },
//         },
//         {
//             breakpoint: 320,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//             },
//         },
//     ],
// });

// /* Blog Slider */
// $(document).ready(function () {
//     $('.blog__list').slick({
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         arrows: false,
//         infinite: false,
//         dots: true,
//         dotsClass: 'blog__dots',
//         appendDots: '.blog__wrapper',
//     });
// });

/* Hamburger Menu */
