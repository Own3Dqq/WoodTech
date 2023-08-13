import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const heroSwiper = new Swiper('.hero__swiper', {
    modules: [Navigation, Pagination, Scrollbar],
    speed: 300,
    spaceBetween: 40,
    effect: 'flip',
    cssMode: true,

    // Pagination
    pagination: {
        el: '.control__numbers',
        type: 'custom',
        clickable: true,

        renderCustom: function (swiper, current, total) {
            return (
                '<span class="counter">' +
                '0' +
                '' +
                current +
                '</span>' +
                '<span class="devide">|</span> ' +
                '<span class="total">' +
                '0' +
                '' +
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

const blogSwiper = new Swiper('.blog__swiper', {
    modules: [Navigation, Pagination],
    effect: 'flip',
    flipEffect: {
        slideShadows: false,
    },
    cssMode: true,
    slidesPerView: 3,
    speed: 300,
    spaceBetween: 40,
    grabCursor: true,
    maxBackfaceHiddenSlides: 0,

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        768: {
            // slidesPerGroup: 1,
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
});
