import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const heroSwiper = new Swiper('.hero__swiper', {
    modules: [Navigation, Pagination, Scrollbar, EffectFade],
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
