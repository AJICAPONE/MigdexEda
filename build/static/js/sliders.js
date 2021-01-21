$(document).ready(function () {

    $('.swiper-sliders-container').each(function (ndx) {
        $(this).attr('id','slider-'+ (ndx + 1));
        var get_id = $(this).attr('id');
        var $this = $(this);
        var swiper_sliders = new Swiper('#'+get_id, {
            slidesPerView: 4,
            observer: true,
            observeParents: true,
            navigation: {
                nextEl: $this.parents('.swiper-section').find('.js-swiper-arrows-next')[0],
                prevEl: $this.parents('.swiper-section').find('.js-swiper-arrows-prev')[0],
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    width: 250,
                    spaceBetween: 16,
                },
                576: {
                    slidesPerView: 2,
                    centeredSlides: true,
                    spaceBetween: 30,
                    width: 540,
                },
                768: {
                    slidesPerView: 3,
                },
                992: {
                    slidesPerView: 4,
                },
            },
        });
    });

    $('.lk-order-bottom--swiper').each(function (ndx) {
        $(this).attr('id','lk-slider-swiper-'+ (ndx + 1));
        var get_id = $(this).attr('id');
        var $this = $(this);
        var lk_swiper_sliders = new Swiper('#'+get_id, {
            slidesPerView: 4,
            observer: true,
            observeParents: true,
            navigation: {
                nextEl: $this.parents('.lk-swiper-section').find('.lk-swiper-arrows-next')[0],
                prevEl: $this.parents('.lk-swiper-section').find('.lk-swiper-arrows-prev')[0],
            },
            breakpoints: {
                320: {
                    slidesPerView: 2,
                    //width: 250,
                    spaceBetween: 16,
                },
                576: {
                    slidesPerView: 2,
                    //centeredSlides: true,
                    //spaceBetween: 30,
                },
                768: {
                    slidesPerView: 4,
                },
                992: {
                    slidesPerView: 3,
                },
                1199: {
                    slidesPerView: 4,
                },
            },
        });
    });

    $('.faq-content--item__info--wrap').each(function () {
        let first_slide = this.querySelector('.faq-swiper-container-swipe');
        let second_slide = this.querySelector('.faq-content-info--right--swiper');


        let swiper_sliders = new Swiper(first_slide, {
            slidesPerView: 1,
            observer: true,
            observeParents: true,
            width: 295,
            effect: 'fade',
            pagination: {
                el: this.closest(".faq-content--item__info--wrap").querySelector(".faq-swiper-pagination"),
                clickable: true,
            },
            navigation: {
                nextEl: this.closest(".faq-content--item__info--wrap").querySelector('.faq-swiper-arrows-next'),
                prevEl: this.closest(".faq-content--item__info--wrap").querySelector('.faq-swiper-arrows-prev'),
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 16,
                },
                576: {
                    slidesPerView: 1,
                    centeredSlides: true,
                    spaceBetween: 30,
                    width: 540,

                },
                768: {
                    slidesPerView: 1,
                },
                992: {
                    slidesPerView: 1,
                },
            },
        });
        let galleryThumbs = new Swiper(second_slide, {
            spaceBetween: 16,
            slidesPerView: 1,
            observer: true,
            observeParents: true,

        });
        galleryThumbs.controller.control = swiper_sliders;
        swiper_sliders.controller.control = galleryThumbs;

    });

    $('.swiper-lanch-container').each(function (ndx) {
        $(this).attr('id','slider-lanch-'+ (ndx + 1));
        var get_id = $(this).attr('id');
        var $this = $(this);
        var swiper_lanch2 = new Swiper('#'+get_id, {
            slidesPerView: 3,
            navigation: {
                nextEl: $this.parents('.swiper-lanch-section').find('.js-lanch-swiper-arrows-next')[0],
                prevEl: $this.parents('.swiper-lanch-section').find('.js-lanch-swiper-arrows-prev')[0],
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    width: 250,
                    spaceBetween: 16,
                },
                576: {
                    slidesPerView: 2,
                    centeredSlides: true,
                    spaceBetween: 30,
                    width: 540,

                },
                768: {
                    slidesPerView: 3,
                },
                992: {
                    slidesPerView: 3,
                },
            },
        });
    });


    $('.swiper-basket-complex-container').each(function (ndx) {
        $(this).attr('id','slider-basket-c-'+ (ndx + 1));
        var get_id = $(this).attr('id');
        var $this = $(this);
        var swiper_basket_c = new Swiper('#'+get_id, {
            slidesPerView: 4,
            navigation: {
                nextEl: $this.parents('.swiper-lanch-section').find('.js-lanch-swiper-arrows-next')[0],
                prevEl: $this.parents('.swiper-lanch-section').find('.js-lanch-swiper-arrows-prev')[0],
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    width: 250,
                    spaceBetween: 16,
                },
                576: {
                    slidesPerView: 2,
                    //loop:true,
                    centeredSlides: true,
                    spaceBetween: 30,
                    width: 540,

                },
                768: {
                    slidesPerView: 3,
                },
                992: {
                    slidesPerView: 3,
                },
                1199: {
                    slidesPerView: 4,
                },
            },
        });
    });

    var swiper = new Swiper('.js-main-slider', {
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: '.my-swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                loop:true,
                centeredSlides: true,
            },
            576: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 1,
            },
        },
    });





    var swiper_review = new Swiper('.review-tab', {
        slidesPerView: 3,
        navigation: {
            nextEl: '.review-swiper-button-next',
            prevEl: '.review-swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                width: 300,
                spaceBetween: 16,
            },
            576: {
                slidesPerView: 2,
                width: 540,
                centeredSlides: true,
                spaceBetween: 30,
            },
            768: {
                slidesPerView:2,
            },
            992: {
                slidesPerView: 3,
            },
        },
    });
    var swiper_rs = new Swiper('.review-video-tab--slider', {
        slidesPerView: 2,
        centeredSlides: true,
        spaceBetween: 30,
        loop: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.review-v-swiper-button-next',
            prevEl: '.review-v-swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 16,
            },
            576: {
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 2,
            },
        },
    });
    $('.review-button-tab').on('click',function () {
        var get_tab = $(this).attr('data-tab');
        $(this).addClass('active').siblings().removeClass('active');
        $('.section-content-tabs .' + get_tab).addClass('active').siblings().removeClass('active');
        $('.review-swiper-arrows.'+ get_tab).addClass('active').siblings().removeClass('active');
    });
    var swiper_basket = new Swiper('.footer-basket-swiper', {
        slidesPerView: 4,
        spaceBetween: 15,
        navigation: {
            nextEl: '.footer-swiper-button-next',
            prevEl: '.footer-swiper-button-prev',
        },
        breakpoints: {
            576: {
                slidesPerView: 2,

            },
            768: {
                slidesPerView: 2,
                width: 540,
            },
            992: {
                slidesPerView: 3,
            },
            1199.6: {
                slidesPerView: 4,
            },
        },
    });

    var swiper_popup_categ = new Swiper('.popup-tabs--container', {
        slidesPerView: 'auto',
        //centeredSlides: true,
        //freeMode: true,
        observer: true,

        watchOverflow: true,
        observeParents: true,
        navigation: {
            nextEl: '.popup-swiper-categ-next',
            prevEl: '.popup-swiper-categ-prev',
        },
        breakpoints: {
            576: {

                freeMode: true,

            },

        },
    });

    $('.popup-basket-notific').each(function (ndx) {
        $(this).attr('id','popup-basket-slider-'+ (ndx + 1));
        var get_id = $(this).attr('id');
        var $this = $(this);
        var swiper_notific = new Swiper('#'+get_id, {
            slidesPerView: 1,
            observer: true,
            observeParents: true,
            navigation: {
                nextEl: $this.parents('.popup-tab--item').find('.popup-swiper-button-next')[0],
                prevEl: $this.parents('.popup-tab--item').find('.popup-swiper-button-prev')[0],
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    width: 250,
                    spaceBetween: 16,
                },
                576: {
                    slidesPerView: 2,
                    spaceBetween: 16,

                },
                768: {
                    slidesPerView: 2,

                },

                992: {
                    slidesPerView: 3,
                    // width: 990,
                },
                1199.6: {
                    slidesPerView: 4,
                    // width: 990,
                },
            },
        });
    });


    var swiper_notific = new Swiper('.articles-mobile-sidebar--items', {
        slidesPerView: 4,
        // spaceBetween: 15,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.popup-swiper-button-next',
            prevEl: '.popup-swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                width: 250,
                spaceBetween: 30,
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 30,

            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,


            },
        },
    });



    var swiper_card = new Swiper('.card-content-swiper', {
        slidesPerView: 1,
        spaceBetween: 15,
        observer: true,
        observeParents: true,
        pagination: {
            el: '.card-swiper-pagination',
            clickable: true,
        },

    });

    var swiper_card = new Swiper('.team-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.team-swiper-button-next',
            prevEl: '.team-swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                width: 250,
                spaceBetween: 15,


            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
        },
    });

    var mobile_index = function() {
        if ($(window).width() <= 768) {
            var mobile_c = new Swiper('.index-menu--content', {
                slidesPerView: 2,
                observer: true,
                observeParents: true,
                navigation: {
                    nextEl: '.team-swiper-button-next',
                    prevEl: '.team-swiper-button-prev',
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        width: 250,
                        spaceBetween: 16,
                    },
                    576: {
                        slidesPerView: 2,
                        centeredSlides: true,
                        spaceBetween: 30,
                        width: 540,

                    },
                },
            });
            $('.mobile-index-blog--slider').each(function (ndx) {
                $(this).attr('id','slider-blog'+ (ndx + 1));
                var get_id = $(this).attr('id');
                var $this = $(this);
                var swiper_sliders = new Swiper('#'+get_id, {
                    slidesPerView: 2,
                    observer: true,
                    observeParents: true,
                    breakpoints: {
                        320: {
                            slidesPerView: 1,
                            width: 250,
                            spaceBetween: 16,
                        },
                        576: {
                            slidesPerView: 1,
                            centeredSlides: true,
                            width: 382.5,
                        },

                    },
                });
            });

            var mobile_d = new Swiper('.mobile-delivery-icon--slider', {
                slidesPerView: 2,
                observer: true,
                observeParents: true,
                pagination: {
                    el: '.mobile-delivery-pagination',
                    clickable: true,
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        centeredSlides: true,
                    },
                    576: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                },
            });

            var mobile_about = new Swiper('.section-why-us--swiper', {
                slidesPerView: 2,
                observer: true,
                observeParents: true,
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        width: 240,
                        spaceBetween: 15,
                    },
                    576: {
                        slidesPerView: 1,
                        width: 382.5,

                    },
                },
            });



        }
    };
    mobile_index();

    $(window).resize(mobile_index);

    var mobile_recept = function () {
        if($(window).width() <= 992){
            var swiper_recept = new Swiper('.recept-other-flex--wrap', {
                slidesPerView: 4,
                // spaceBetween: 15,
                observer: true,
                observeParents: true,
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        width: 250,
                        spaceBetween: 30,
                    },
                    576: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                        width: 405,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                    },
                    992: {
                        slidesPerView: 2,
                    },
                },
            });
        }
    }
    mobile_recept()
    $(window).resize(mobile_recept);


});