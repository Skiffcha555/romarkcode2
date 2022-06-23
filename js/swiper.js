const swiperAllCat = new Swiper('.swiper.swiper--all', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 5000,
    },
    spaceBetween: 40,
    slidesPerView: 'auto',
    centeredSlides: true,
    grabCursor: true,

    // currentClass: 'swiper-pagination-current',
    // totalClass: 'swiper-pagination-total',

    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        375: {
            slidesPerView: 1,
            spaceBetween: 15
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1399: {
            slidesPerView: 'auto',
            spaceBetween: 40
        }
    }
});

const swiperAppsCat = new Swiper('.swiper.swiper--apps', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 5000,
    },
    spaceBetween: 40,
    slidesPerView: 'auto',
    centeredSlides: true,
    grabCursor: true,

    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        375: {
            slidesPerView: 1,
            spaceBetween: 15
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1399: {
            slidesPerView: 'auto',
            spaceBetween: 40
        }
    }
});

const swiperBrandsCat = new Swiper('.swiper.swiper--brands', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 5000,
    },
    spaceBetween: 40,
    slidesPerView: 'auto',
    centeredSlides: true,
    grabCursor: true,

    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        375: {
            slidesPerView: 1,
            spaceBetween: 15
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1399: {
            slidesPerView: 'auto',
            spaceBetween: 40
        }
    }
});

const swiperWebCat = new Swiper('.swiper.swiper--web', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 5000,
    },
    spaceBetween: 40,
    slidesPerView: 'auto',
    centeredSlides: true,
    grabCursor: true,

    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        375: {
            slidesPerView: 1,
            spaceBetween: 15
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1399: {
            slidesPerView: 'auto',
            spaceBetween: 40
        }
    }
});

const swiperFeedback = new Swiper('.swiper.swiper--feedback', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 5000,
    },
    spaceBetween: 40,
    slidesPerView: 3,
    centeredSlides: true,
    grabCursor: true,

    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        375: {
            slidesPerView: 1,
            spaceBetween: 15,
            centeredSlides: true
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 15,
            centeredSlides: false
        },
        769: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: false
        },
        1399: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    }
});

const swiperChooseIndustry = new Swiper('.swiper.swiper--choose-industry', {
    direction: 'horizontal',
    loop: false,
    autoplay: {
        delay: 5000,
    },
    slidesPerView: '1',
    centeredSlides: true,
    grabCursor: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});

/* <div class="counts">
    <strong class="web current-slide">current-slide</strong>
    /
    <strong class="web total-slides">Total</strong>
</div> */

// on: {
//     slideChange: function () {
//         let currentSlideWeb = this.realIndex + 1;
//         document.querySelector('.web.current-slide').innerHTML = currentSlideWeb;
//     },
//     beforeInit: function () {
//         let numOfSlidesWeb = this.wrapperEl.querySelectorAll(".web.swiper-slide").length;
//         document.querySelector('.web.total-slides').innerHTML = numOfSlidesWeb;
//     }
// },