var swiper = new Swiper(".slide-container", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        400: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        555: {
            slidesPerView: 1.5,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 1.7,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 2.7,
            spaceBetween: 20
        },
    },
});