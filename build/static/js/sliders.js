$(document).ready(function () {

    $('.swiper-sliders-container').each(function (ndx) {
        $(this).attr('id','slider-'+ (ndx + 1));
        var get_id = $(this).attr('id');
        var $this = $(this);
        var swiper_sliders = new Swiper('#'+get_id, {
            slidesPerView: 4,
            observer: true,
            observeParents: true,

            // pagination: {
            //     el: '.my-swiper-pagination',
            //     //dynamicBullets: true,
            //     clickable: true,
            // },
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
                    //loop:true,
                    centeredSlides: true,
                    spaceBetween: 30,
                    width: 540,

                },
                768: {
                    slidesPerView: 3,
                    // // width: 990,
                    // //loop:true,
                    // centeredSlides: true,
                    // // centeredSlides: true,
                    // spaceBetween: 10,
                    // width: 700,
                    // freeMode: true,


                },
                992: {
                    slidesPerView: 4,
                    // width: 990,


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


            //spaceBetween: 16,
            effect: 'fade',

            pagination: {
                el: this.closest(".faq-content--item__info--wrap").querySelector(".faq-swiper-pagination"),
                //dynamicBullets: true,
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    //width: 250,
                    spaceBetween: 16,
                },
                576: {
                    slidesPerView: 1,
                    //loop:true,
                    centeredSlides: true,
                    spaceBetween: 30,
                    width: 540,

                },
                768: {
                    slidesPerView: 1,
                    // // width: 990,
                    // //loop:true,
                    // centeredSlides: true,
                    // // centeredSlides: true,
                    // spaceBetween: 10,
                    // width: 700,
                    // freeMode: true,


                },
                992: {
                    slidesPerView: 1,
                    // width: 990,


                },
            },
        });
        let galleryThumbs = new Swiper(second_slide, {
            spaceBetween: 16,
            slidesPerView: 1,
            observer: true,
            observeParents: true,
            //width: 295,
            //effect: 'fade',
            // thumbs: {
            //     swiper: swiper_sliders
            // },


        });
        // swiper_sliders.thumbs.swiper = galleryThumbs;
        // galleryThumbs.thumbs.swiper = swiper_sliders;
        //console.log(first_slide);
        galleryThumbs.controller.control = swiper_sliders;
        swiper_sliders.controller.control = galleryThumbs;

    });


    // $('.faq-swiper-container-swipe').each(function (ndx) {
    //     $(this).attr('id','faq-slider-'+ (ndx + 1));
    //     var get_id = $(this).attr('id');
    //     var $this = $(this);
    //
    //     $(function () {
    //         var swiper_sliders = new Swiper('#'+get_id, {
    //             slidesPerView: 1,
    //             observer: true,
    //             observeParents: true,
    //             width: 295,
    //             //spaceBetween: 16,
    //             //effect: 'fade',
    //
    //             // pagination: {
    //             //     el: $this.parents('.faq-content--item__info--wrap').find('.faq-swiper-pagination')[0],
    //             //     //dynamicBullets: true,
    //             //     clickable: true,
    //             // },
    //             // thumbs: {
    //             //     swiper: galleryThumbs
    //             // },
    //             // navigation: {
    //             //     nextEl: $this.parents('.swiper-section').find('.js-swiper-arrows-next')[0],
    //             //     prevEl: $this.parents('.swiper-section').find('.js-swiper-arrows-prev')[0],
    //             // },
    //             breakpoints: {
    //                 320: {
    //                     slidesPerView: 1,
    //                     width: 250,
    //                     spaceBetween: 16,
    //                 },
    //                 576: {
    //                     slidesPerView: 1,
    //                     //loop:true,
    //                     centeredSlides: true,
    //                     spaceBetween: 30,
    //                     width: 540,
    //
    //                 },
    //                 768: {
    //                     slidesPerView: 1,
    //                     // // width: 990,
    //                     // //loop:true,
    //                     // centeredSlides: true,
    //                     // // centeredSlides: true,
    //                     // spaceBetween: 10,
    //                     // width: 700,
    //                     // freeMode: true,
    //
    //
    //                 },
    //                 992: {
    //                     slidesPerView: 1,
    //                     // width: 990,
    //
    //
    //                 },
    //             },
    //         });
    //         var galleryThumbs = new Swiper('#'+get_id, {
    //             spaceBetween: 16,
    //             slidesPerView: 1,
    //             observer: true,
    //             observeParents: true,
    //             width: 295,
    //             //effect: 'fade',
    //
    //
    //         });
    //         galleryThumbs.controller.control = swiper_sliders;
    //         swiper_sliders.controller.control = galleryThumbs;
    //     });
    //
    // });




    $('.swiper-lanch-container').each(function (ndx) {
        $(this).attr('id','slider-lanch-'+ (ndx + 1));
        var get_id = $(this).attr('id');
        var $this = $(this);
        var swiper_lanch2 = new Swiper('#'+get_id, {
            slidesPerView: 3,
            // pagination: {
            //     el: '.my-swiper-pagination',
            //     //dynamicBullets: true,
            //     clickable: true,
            // },
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
                    // // width: 990,
                    // //loop:true,
                    // centeredSlides: true,
                    // // centeredSlides: true,
                    // spaceBetween: 10,
                    // width: 700,
                    // freeMode: true,


                },
                992: {
                    slidesPerView: 4,
                    // width: 990,


                },
            },
        });
    });

    var swiper = new Swiper('.js-main-slider', {
        slidesPerView: 1,
        loop: true,
        // slidesPerColumn: 1,
        pagination: {
            el: '.my-swiper-pagination',
            //dynamicBullets: true,
            clickable: true,
        },
        // navigation: {
        //     nextEl: '.my-swiper-button-next',
        //     prevEl: '.my-swiper-button-prev',
        // },
        breakpoints: {
            320: {
                slidesPerView: 1,
                // width: 990,
                loop:true,
                centeredSlides: true,
                // centeredSlides: true,
                // spaceBetween: 10,
                // freeMode: true,


            },
            576: {
                slidesPerView: 1,
                // // width: 990,
                // loop:true,
                // centeredSlides: true,
                // // centeredSlides: true,
                // spaceBetween: 10,
                // width: 500,
                // freeMode: true,


            },
            768: {
                slidesPerView: 1,
                // // width: 990,
                // loop:true,
                // centeredSlides: true,
                // // centeredSlides: true,
                // spaceBetween: 10,
                // width: 700,
                // freeMode: true,


            },
            992: {
                slidesPerView: 1,
                // width: 990,

            },
        },
    });





    var swiper_review = new Swiper('.review-tab', {
        slidesPerView: 3,
        //loop: true,
        // pagination: {
        //     el: '.my-swiper-pagination',
        //     //dynamicBullets: true,
        //     clickable: true,
        // },
        navigation: {
            nextEl: '.review-swiper-button-next',
            prevEl: '.review-swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                width: 300,
                // // loop:true,
                // centeredSlides: true,
                // // centeredSlides: true,
                spaceBetween: 16,
                // // freeMode: true,


            },
            576: {
                slidesPerView: 2,
                width: 540,
                // //loop:true,
                centeredSlides: true,
                // // centeredSlides: true,
                spaceBetween: 30,
                //width: 255,
                // freeMode: true,


            },
            768: {
                slidesPerView:2,
            },
            992: {
                slidesPerView: 3,
                // width: 990,


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
        // pagination: {
        //     el: '.my-swiper-pagination',
        //     //dynamicBullets: true,
        //     clickable: true,
        // },
        navigation: {
            nextEl: '.review-v-swiper-button-next',
            prevEl: '.review-v-swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                //width: 320,
                //centeredSlides: true,
                spaceBetween: 16,
            },
            576: {
                slidesPerView: 1,
                // width: 990,
                //loop:true,
                //centeredSlides: true,
                // centeredSlides: true,
                // spaceBetween: 10,
                // width: 500,
                // freeMode: true,


            },
            // 768: {
            //     slidesPerView: 1,
            //     // width: 990,
            //     //loop:true,
            //     centeredSlides: true,
            //     // centeredSlides: true,
            //     spaceBetween: 10,
            //     width: 700,
            //     freeMode: true,
            //
            //
            // },
            992: {
                slidesPerView: 2,
                // width: 990,


            },
        },
    });
    $('.review-button-tab').on('click',function () {
        var get_tab = $(this).attr('data-tab');
        $(this).addClass('active').siblings().removeClass('active');
        $('.section-content-tabs .' + get_tab).addClass('active').siblings().removeClass('active');
        $('.review-swiper-arrows.'+ get_tab).addClass('active').siblings().removeClass('active');
        //swiper_rs.update();
    });
    var swiper_basket = new Swiper('.footer-basket-swiper', {
        slidesPerView: 4,
        spaceBetween: 15,
        // loop: true,
        // pagination: {
        //     el: '.my-swiper-pagination',
        //     //dynamicBullets: true,
        //     clickable: true,
        // },
        navigation: {
            nextEl: '.footer-swiper-button-next',
            prevEl: '.footer-swiper-button-prev',
        },
        breakpoints: {
            // 320: {
            //     slidesPerView: 1,
            //     // width: 990,
            //     // loop:true,
            //     centeredSlides: true,
            //     // centeredSlides: true,
            //     // spaceBetween: 10,
            //     // freeMode: true,
            //
            //
            // },
            576: {
                slidesPerView: 2,

            },
            768: {
                slidesPerView: 2,
                // // width: 990,
                // //loop:true,
                // centeredSlides: true,
                // // centeredSlides: true,
                // spaceBetween: 10,
                // width: 700,
                // freeMode: true,


            },
            992: {
                slidesPerView: 3,
                // width: 990,


            },
            1200: {
                slidesPerView: 4,
                // width: 990,


            },
        },
    });

    var swiper_notific = new Swiper('.popup-basket-notific', {
        slidesPerView: 2,
        // spaceBetween: 15,
        observer: true,
        observeParents: true,
        // loop: true,
        // pagination: {
        //     el: '.my-swiper-pagination',
        //     //dynamicBullets: true,
        //     clickable: true,
        // },
        navigation: {
            nextEl: '.popup-swiper-button-next',
            prevEl: '.popup-swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                width: 250,
                // loop:true,
                //centeredSlides: true,
                // centeredSlides: true,
                spaceBetween: 16,
                // freeMode: true,


            },
            576: {
                slidesPerView: 2,
                spaceBetween: 16,

            },
            // 768: {
            //     slidesPerView: 1,
            //     // width: 990,
            //     //loop:true,
            //     centeredSlides: true,
            //     // centeredSlides: true,
            //     spaceBetween: 10,
            //     width: 700,
            //     freeMode: true,
            //
            //
            // },
            // 992: {
            //     slidesPerView: 4,
            //     // width: 990,
            //
            //
            // },
        },
    });

    var swiper_notific = new Swiper('.articles-mobile-sidebar--items', {
        slidesPerView: 4,
        // spaceBetween: 15,
        observer: true,
        observeParents: true,
        // loop: true,
        // pagination: {
        //     el: '.my-swiper-pagination',
        //     //dynamicBullets: true,
        //     clickable: true,
        // },
        navigation: {
            nextEl: '.popup-swiper-button-next',
            prevEl: '.popup-swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                width: 250,
                // loop:true,
                //centeredSlides: true,
                // centeredSlides: true,
                spaceBetween: 30,
                // freeMode: true,


            },
            576: {
                slidesPerView: 2,
                spaceBetween: 30,

            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,


            },
            // 992: {
            //     slidesPerView: 4,
            //     // width: 990,
            //
            //
            // },
        },
    });



    var swiper_card = new Swiper('.card-content-swiper', {
        slidesPerView: 1,
        spaceBetween: 15,
        observer: true,
        observeParents: true,
        // loop: true,
        pagination: {
            el: '.card-swiper-pagination',
            //dynamicBullets: true,
            clickable: true,
        },

        breakpoints: {
            320: {
                // slidesPerView: 1,
                // // width: 990,
                // // loop:true,
                // centeredSlides: true,
                // // centeredSlides: true,
                // // spaceBetween: 10,
                // // freeMode: true,


            },
            576: {
                // slidesPerView: 1,
                // // width: 990,
                // //loop:true,
                // centeredSlides: true,
                // // centeredSlides: true,
                // spaceBetween: 10,
                // width: 500,
                // freeMode: true,



            },
            // 768: {
            //     slidesPerView: 1,
            //     // width: 990,
            //     //loop:true,
            //     centeredSlides: true,
            //     // centeredSlides: true,
            //     spaceBetween: 10,
            //     width: 700,
            //     freeMode: true,
            //
            //
            // },
            // 992: {
            //     slidesPerView: 4,
            //     // width: 990,
            //
            //
            // },
        },
    });

    var swiper_card = new Swiper('.team-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        // loop: true,
        // pagination: {
        //     el: '.my-swiper-pagination',
        //     //dynamicBullets: true,
        //     clickable: true,
        // },
        navigation: {
            nextEl: '.team-swiper-button-next',
            prevEl: '.team-swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                width: 250,
                // // loop:true,
                // centeredSlides: true,
                // // centeredSlides: true,
                spaceBetween: 15,
                // // freeMode: true,


            },
            576: {
                slidesPerView: 2,
                // // width: 990,
                // //loop:true,
                // centeredSlides: true,
                // // centeredSlides: true,
                // spaceBetween: 10,
                // width: 500,
                // freeMode: true,


            },
            768: {
                slidesPerView: 3,
                // // width: 990,
                // //loop:true,
                // centeredSlides: true,
                // // centeredSlides: true,
                // spaceBetween: 10,
                // width: 700,
                // freeMode: true,


            },
            992: {
                slidesPerView: 3,
                // width: 990,


            },
        },
    });

    var mobile_index = function() {
        if ($(window).width() <= 768) {
            var mobile_c = new Swiper('.index-menu--content', {
                slidesPerView: 2,
                observer: true,
                observeParents: true,
                // loop: true,
                // pagination: {
                //     el: '.my-swiper-pagination',
                //     //dynamicBullets: true,
                //     clickable: true,
                // },
                navigation: {
                    nextEl: '.team-swiper-button-next',
                    prevEl: '.team-swiper-button-prev',
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        width: 250,
                        // // loop:true,
                        //centeredSlides: true,
                        // // centeredSlides: true,
                        spaceBetween: 16,
                        // // freeMode: true,


                    },
                    576: {
                        slidesPerView: 2,
                        //loop:true,
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
                // loop: true,
                pagination: {
                    el: '.mobile-delivery-pagination',
                    //dynamicBullets: true,
                    clickable: true,
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        // width: 250,
                        // loop:true,
                        centeredSlides: true,
                        // centeredSlides: true,
                        // spaceBetween: 16,
                        // freeMode: true,


                    },
                    576: {
                        slidesPerView: 1,
                        //loop:true,
                        spaceBetween: 30,

                    },
                },
            });

            var mobile_about = new Swiper('.section-why-us--swiper', {
                slidesPerView: 2,
                observer: true,
                observeParents: true,
                // loop: true,

                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        width: 250,
                        // loop:true,

                        // centeredSlides: true,
                        spaceBetween: 15,
                        // freeMode: true,


                    },
                    576: {
                        slidesPerView: 1,
                        //loop:true,
                        width: 382.5,
                       // spaceBetween: 30,

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
                        // loop:true,
                        //centeredSlides: true,
                        // centeredSlides: true,
                        spaceBetween: 30,
                        // freeMode: true,


                    },
                    576: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                        width: 382.5,

                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 0,


                    },
                    992: {
                        slidesPerView: 2,
                        // width: 990,


                    },
                },
            });
        }
    }
    mobile_recept()
    $(window).resize(mobile_recept);


});