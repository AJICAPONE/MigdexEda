$(document).ready(function () {
    svg4everybody({});

    $('[data-dismiss="modal"][data-target]').click(function () {

        if($('.modal').hasClass('show')){
            $('body').addClass('modal-open-2');
        } else {
            $('body').removeClass('modal-open-2');
        }

    });
    $('.popup-close-modal2').click(function () {
        $('body').removeClass('modal-open-2');
    });

    $('.popup-complex--button').click(function () {
        $(this).addClass('active');
        $(this).text('Выбрано');
    });


    // Только цифры
    $('.only-number').on('input',function () {

        if (/\D/g.test(this.value)) {
            // Filter non-digits from input value.
            this.value = this.value.replace(/\D/g, '');
        }
    });


    $(".yakor").click( function (event) {
        event.preventDefault();
        var header_h = $('header').height();
        var id  = $(this).attr('data-yakor'),
            top = $(id).offset().top - header_h;
        $('body,html').animate({scrollTop: top}, 1000);
    });





    $('.header-mobile-menu--icon,.header-mobile-sandwich-menu').click(function () {
       $('.tablet-menu-sandwich,.tel-menu-sandwich').toggleClass('active');
       if($('.tablet-menu-sandwich,.tel-menu-sandwich').hasClass('active')){
           $('body').addClass('overflow-hidden');
           $('.content').addClass('tablet-bg');
       } else {
           $('body').removeClass('overflow-hidden');
           $('.content').removeClass('tablet-bg');
       }
    });


    // ================= Sidebar Меню ================= //
    $(function () {
        $('.nav-sidebar-menu--list li ul').hide();

        $('.nav-sidebar-menu--item--wrap').on('click',function () {
            $(this).parent().toggleClass('active').siblings().removeClass('active');
            $(this).next().slideToggle(200);
        });

        $('.nav-sidebar-menu--item--depth2--wrap').on('click',function () {
            $(this).parent().toggleClass('active').siblings().removeClass('active');
            $(this).next().slideToggle(200);
        });

        $('.nav-sidebar-menu--item').click('next', function () {
            $(this).prevAll().children('.nav-sidebar-menu--list--depth2').slideUp(200);

        });

        $('.nav-sidebar-menu--item').click('prev', function () {
            $(this).nextAll().children('.nav-sidebar-menu--list--depth2').slideUp(200);
        });

        $('.nav-sidebar-menu--item--depth2').click('next', function () {
            $(this).prevAll().children('.nav-sidebar-menu--list--depth3').slideUp(200);

        });

        $('.nav-sidebar-menu--item--depth2').click('prev', function () {
            $(this).nextAll().children('.nav-sidebar-menu--list--depth3').slideUp(200);
        });

    });


    function headerScroll() {

        if ($(window).scrollTop() > 90) {
            $('header').addClass('header-fix');
            $('.footer-mobile-card-lanch-fixed').addClass('active');
        } else {
            $('header').removeClass('header-fix');
            $('.footer-mobile-card-lanch-fixed').removeClass('active');
        }
    }

    headerScroll();

    $(window).scroll(function () {
        headerScroll();
    });
    $('.footer-basket-arrow').click(function () {
        $(this).toggleClass('active');
        $('.footer-basket,.footer-lanch--fast').toggleClass('active');
        $('footer').toggleClass('fixed-basket-padding');
    });





    $('.section-menu-sidebar--item').click(function () {
        $(this).toggleClass('active');
    });


    $('.button-basket--product__wrap .button-basket--product').click(function () {
        $(this).parent().addClass('active');
        $(this).addClass('button-basket-active');
        $(this).html('' +
            '<svg class="icon icon-basket ">' +
            '<use xlink:href="static/img/svg/symbol/sprite.svg#basket"></use>' +
            '</svg>');
    });

    $('.basket-product--plus').click(function () {
        $(this).prev().val(+$(this).prev().val() + 1);

    });
    $('.basket-product--minus').click(function () {
        if ($(this).next().val() > 1) {
            if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);

        }
    });
    $('.product-basket-product--plus').on('click',function () {
        $(this).prev().val(+$(this).prev().val() + 1);
        var get_price = $(this).parents('.product-basket-added--card').prev('.section-menu-content--price__wrap').find('.product-content--price_item').text();
        var get_price_attr = $(this).parents('.product-basket-added--card').prev('.section-menu-content--price__wrap').find('.product-content--price_item').attr('data-price-item');
        $(this).parents('.product-basket-added--card').prev('.section-menu-content--price__wrap').find('.product-content--price_item').text(parseInt(get_price) + parseInt(get_price_attr));

    });
    $('.product-basket-product--minus').click(function () {
        if ($(this).next().val() > 1) {
            if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
            var get_price = $(this).parents('.product-basket-added--card').prev('.section-menu-content--price__wrap').find('.product-content--price_item').text();
            var get_price_attr = $(this).parents('.product-basket-added--card').prev('.section-menu-content--price__wrap').find('.product-content--price_item').attr('data-price-item');
            $(this).parents('.product-basket-added--card').prev('.section-menu-content--price__wrap').find('.product-content--price_item').text(parseInt(get_price) - parseInt(get_price_attr));
        }

    });



    $('.basket-product--input').each(function () {
        $(this).change(function () {

            var get_val = $(this).val();
            if($(this).val().length >= 3){
                $(this).parents('.product-basket-added--card').find('.button-product-basket--count').attr('style','font-size:8px');
            }
            $(this).parents('.product-basket-added--card').find('.button-product-basket--count').text(get_val);
            return 1;
        });
    });
    function setStrictNumberPattern() {
        let inp = document.querySelectorAll('.basket-product--input');
        for (let i = 0; i < inp.length; i++) {
            let lastVal = "";
            inp[i].addEventListener('input', function() {
                if (!this.value) return (lastVal = "");
                if ((/^(([1-9]\d*)|0)(.\d+)?$/).test(this.value)) {
                    lastVal = this.value;
                } else {
                    this.value = lastVal;
                }
            });
        }
    };
    setStrictNumberPattern();



    // class Cart {
    //     constructor(el) {
    //         this.count = 3500;
    //         this.parent = el;
    //         this.el = el.querySelector(".basket-el-selector");
    //         this.btn = el.querySelector(".button-basket--v2");
    //         this.input = el.querySelector(".basket-product--input");
    //         this.notification = el.querySelector(".button-product-basket--count");
    //         this.time;
    //         this.onChange = this.onChange.bind(this);
    //         this.addEventHandlers();
    //
    //     }
    //
    //     addEventHandlers() {
    //         this.el.addEventListener("click", this.onChange);
    //         this.el.addEventListener("mousemove", this.onChange);
    //         this.el.addEventListener("keydown", this.onChange);
    //     }
    //
    //     onChange(e) {
    //         clearTimeout(this.time);
    //         this.time = setTimeout(this.timer.bind(this.parent), this.count);
    //
    //         if (e.type != "mousemove" && this.btn.contains(e.target)) {
    //             if (this.parent.classList.contains("active")) {
    //                 this.parent.classList.remove("active");
    //                 this.input.value == 0 ? this.notification.innerHTML = "" : this.notification.innerHTML = this.input.value;
    //                 clearTimeout(this.time);
    //             } else {
    //                 this.parent.classList.add("active");
    //
    //
    //             }
    //
    //         }
    //
    //
    //     }
    //
    //     timer(e) {
    //         //this.classList.remove("active");
    //         let isMove = false;
    //         if(!this.classList.contains("active")){
    //             isMove = true;
    //         }
    //         this.classList.remove("active");
    //         let input = this.querySelector(".basket-product--input");
    //         let notification = this.querySelector(".button-product-basket--count");
    //         let isShow = false;
    //
    //         //let ss = this.classList.contains("active");
    //         //console.log(ss);
    //
    //
    //
    //         input.value == 0 ? notification.innerHTML = "" : notification.innerHTML = input.value;
    //         if(notification.innerHTML >= 1 && !isMove){
    //             notification.classList.add('active');
    //             if (!this.isShow){
    //                 $('#popup-added-basket').modal('show');
    //                 $('#custom-popup-mobile-basket').addClass('active');
    //                 $('header').addClass('header-transform-hidden');
    //                 $('body').addClass('overflow-hidden');
    //                 $('.content').addClass('mobile-popup-bg');
    //                 $('.close-mobile--popups').addClass('active');
    //                 this.isShow = true;
    //
    //             }
    //
    //
    //         }
    //
    //
    //     }
    //
    // }
    // for (let cart of document.querySelectorAll(".basket-count-buttons--wrapper")) new Cart(cart);
    $('.product-basket-added--card .button-basket--v2').click(function () {
        var get_count = $(this).next().children('.basket-product--input').val();
        $(this).parents('.product-basket-added--card').children('.button-product-basket--count').text(get_count).addClass('active');
    });
    $('.modal-backdrop,.popup-header--close').click(function () {
        $('header').removeClass('header-transform-hidden');
        $('body').removeClass('overflow-hidden');
        $('.content').removeClass('mobile-popup-bg');
        $('.close-mobile--popups').removeClass('active');
    });

    $('.lanch-page .content,.card-header-fixed--added .content').click(function () {
        $('.footer-mobile-card-lanch-fixed .product-basket-added--card').removeClass('product-basket-count--hover');
    });

    var mobile_card_b = function() {
        if ($(window).width() <= 768) {
            $('.favourites-wrapper .button-basket--product__wrap .button-basket--product,.catalog-page .button-basket--product__wrap .button-basket--product').html('' +
                '<svg class="icon icon-basket ">' +
                '<use xlink:href="static/img/svg/symbol/sprite.svg#basket"></use>' +
                '</svg>');

        }
    };
    mobile_card_b();
    $(window).resize(mobile_card_b);


    // *************************** RateYo Rating ***************************//
    $(function () {
        $(".rate-yo").rateYo({
            "ratedFill": "#FF651D",
            "normalFill": "#E6E9ED",
            "starWidth": "25px",
            "spacing": "8px",
            "starSvg": '<svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M12.8656 3.97214L12.6457 3.31195C12.3401 2.39514 11.3336 2.02456 10.529 2.34121L10.5006 2.25726C10.2818 1.60012 9.69265 1.17578 9 1.17578C8.30735 1.17578 7.7182 1.60012 7.49932 2.25726L7.47098 2.34121C7.21659 2.24182 6.93232 2.20681 6.64752 2.25005C5.63832 2.40006 5.43371 3.07548 5.13436 3.97214C2.10009 5.37495 0 8.24444 0 11.0238C0 14.5478 3.55405 16.8246 9 16.8246C14.4459 16.8246 18 14.5478 18 11.0238C18 8.24444 15.8999 5.37495 12.8656 3.97214ZM7.2283 6.12325L6.17361 7.17794C5.9676 7.38395 5.63393 7.38395 5.42791 7.17794C5.22193 6.97196 5.22193 6.63822 5.42791 6.43224L6.4826 5.37755C6.68858 5.17157 7.02232 5.17157 7.2283 5.37755C7.43428 5.58353 7.43432 5.91723 7.2283 6.12325ZM9.52734 6.80507C9.52734 7.09655 9.29148 7.33241 9 7.33241C8.70852 7.33241 8.47266 7.09655 8.47266 6.80507V5.75038C8.47266 5.4589 8.70852 5.22304 9 5.22304C9.29148 5.22304 9.52734 5.4589 9.52734 5.75038V6.80507ZM12.5721 7.17794C12.366 7.38395 12.0324 7.38395 11.8264 7.17794L10.7717 6.12325C10.5657 5.91727 10.5657 5.58353 10.7717 5.37755C10.9776 5.17157 11.3114 5.17157 11.5174 5.37755L12.5721 6.43224C12.7781 6.63822 12.7781 6.97192 12.5721 7.17794Z"/></svg>',
        }).on("rateyo.change", function (e, data) {
            var rating = data.rating;
            $(this).parent().find('.rateyo-hidden').val(rating);

        });
    });

    $(".reviews-slider-comment-rating").each( function() {
        var rating = $(this).attr("data-rating");
        $(this).rateYo(
            {
                rating: rating, //rating
                "ratedFill": "#FF651D",
                "normalFill": "#E6E9ED",
                "starWidth": "18px",
                "spacing": "7px",
                "starSvg": '<svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M12.8656 3.97214L12.6457 3.31195C12.3401 2.39514 11.3336 2.02456 10.529 2.34121L10.5006 2.25726C10.2818 1.60012 9.69265 1.17578 9 1.17578C8.30735 1.17578 7.7182 1.60012 7.49932 2.25726L7.47098 2.34121C7.21659 2.24182 6.93232 2.20681 6.64752 2.25005C5.63832 2.40006 5.43371 3.07548 5.13436 3.97214C2.10009 5.37495 0 8.24444 0 11.0238C0 14.5478 3.55405 16.8246 9 16.8246C14.4459 16.8246 18 14.5478 18 11.0238C18 8.24444 15.8999 5.37495 12.8656 3.97214ZM7.2283 6.12325L6.17361 7.17794C5.9676 7.38395 5.63393 7.38395 5.42791 7.17794C5.22193 6.97196 5.22193 6.63822 5.42791 6.43224L6.4826 5.37755C6.68858 5.17157 7.02232 5.17157 7.2283 5.37755C7.43428 5.58353 7.43432 5.91723 7.2283 6.12325ZM9.52734 6.80507C9.52734 7.09655 9.29148 7.33241 9 7.33241C8.70852 7.33241 8.47266 7.09655 8.47266 6.80507V5.75038C8.47266 5.4589 8.70852 5.22304 9 5.22304C9.29148 5.22304 9.52734 5.4589 9.52734 5.75038V6.80507ZM12.5721 7.17794C12.366 7.38395 12.0324 7.38395 11.8264 7.17794L10.7717 6.12325C10.5657 5.91727 10.5657 5.58353 10.7717 5.37755C10.9776 5.17157 11.3114 5.17157 11.5174 5.37755L12.5721 6.43224C12.7781 6.63822 12.7781 6.97192 12.5721 7.17794Z"/></svg>',
                readOnly: true
            }
        );
    });
    // ==================================================================== //
    $('.section-menu-content--favourite').click(function () {
       $(this).toggleClass('added-favourite');
    });
    $(function () {
        $('.catalog-sort-select').removeClass('active');
        $('.catalog-sort-select--list').hide();

        $('.catalog-sort--col__sort').click(function () {
            $(this).children().children().toggleClass('active');
            $(this).children().children('.catalog-sort-select--list').slideToggle(200);
        });
        $('.catalog-sort--col__sort').click('next', function () {
            $(this).prevAll().children().children().removeClass('active');
            $(this).prevAll().children().children('.catalog-sort-select--list').slideUp(200);
        });
        $('.catalog-sort--col__sort').click('prev', function () {
            $(this).nextAll().children().children().removeClass('active');
            $(this).nextAll().children().children('.catalog-sort-select--list').slideUp(200);
        });
        $('.catalog-sort-select--item').click(function () {
           var get_text = $(this).text();
           $(this).parents('.catalog-sort-select__wrap').children().children().children('.catalog-sort-item--choise').text(get_text);
        });
        $(document).click(function (e) {
            if (!$(e.target).closest(".catalog-sort-select,.catalog-sort-select--list").length) {
                $('.catalog-sort-select--list').slideUp(200);
                $('.catalog-sort-select').removeClass('active');
            }
            e.stopPropagation();
        });
    });
    $('.catalog-menu-tab').click(function () {
       $(this).toggleClass('active');
    });
    // ======================== Pagination =======================//

    $(function () {
        var items_wrap = $('.section-pagination--container');
        var items_count = $('.section-pagination--container').attr('data-pagination-count');
        for(let item of items_wrap){
            let items = $(item).find('.section-menu-content--col');
            let numItems = items.length;
            let perPage = items_count;


            items.slice(perPage).hide();

            if(numItems > perPage){
                $(item).find('.section-bottom-pagination').pagination({
                    items: numItems,
                    itemsOnPage: perPage,
                    ellipsePageSet: false,
                    displayedPages: 4,
                    edges: 0,
                    prevText: '<div class="section-bottom-paginationprev migdex-arrow-button-pagination"><svg class="icon icon-arrow-left "><use xlink:href="static/img/svg/symbol/sprite.svg#arrow-left"></use></svg></div>',
                    nextText: '<div class="section-bottom-paginationnext migdex-arrow-button-pagination"><svg class="icon icon-arrow-right "><use xlink:href="static/img/svg/symbol/sprite.svg#arrow-right"></use></svg></div>',
                    onPageClick: function (pageNumber) {
                        let showFrom = perPage * (pageNumber - 1);
                        let showTo = showFrom + perPage;
                        items.hide().slice(showFrom, showTo).show();
                        //$('.catalog-pag-show-items').text(showFrom);
                    }

                });
            } else if(numItems <= perPage){
                $(item).find('.section-bottom-pagination--wrap').css('display','none');
            }
        }

    });

    $('.card-content-filling--item').click(function () {
       $(this).addClass('active').siblings().removeClass('active');
    });


    function deleteLanch(){ // Удаление сообщений отправителя
        $(this).parents('.lanch-choise-product--wrap').removeClass('active-lanch');
        $(this).parents('.lanch-choise-product--wrap').html('<div class="lanch-choise-button"><span>Выбрать</span></div>');

    }
    function addedlanch(){
        $(this).parent().addClass('active-lanch');
        $(this).html('<span>Выбрано</span><div class="lanch-delete-product"><svg class="icon icon-close ">' +
            '<use xlink:href="static/img/svg/symbol/sprite.svg#close"></use>' +
            '</svg>' +
            '</div>'
        );
        var x = document.getElementsByClassName("lanch-delete-product");
        if (x.length > 0)
            for (let item of x)
                item.addEventListener("click", deleteLanch);


    }
    $('.lanch-choise-product--wrap').on('click','.lanch-choise-button',addedlanch);



    function deleteLanch2(){ // Удаление сообщений отправителя
        $(this).parents('.lanch-choise-product--wrap2').removeClass('active-lanch');
        $(this).parents('.lanch-choise-product--wrap2').html('<div class="lanch-choise-button2"><span>Заменить</span></div>');

    }
    function addedlanch2(){
        $(this).parent().addClass('active-lanch');
        $(this).html('<span>Заменено</span><div class="lanch-delete-product2"><svg class="icon icon-close ">' +
            '<use xlink:href="static/img/svg/symbol/sprite.svg#close"></use>' +
            '</svg>' +
            '</div>'
        );
        var x = document.getElementsByClassName("lanch-delete-product2");
        if (x.length > 0)
            for (let item of x)
                item.addEventListener("click", deleteLanch2);


    }
    $('.lanch-choise-product--wrap2').on('click','.lanch-choise-button2',addedlanch2);


    $('.order-tab').click(function () {
        var get_tab = $(this).attr('data-order-tab');
        $(this).addClass('active').siblings().removeClass('active')
        $('.order-time-block .' + get_tab).addClass('active').siblings().removeClass('active');
    });

    $('.tab-item').click(function () {
        var get_tab = $(this).attr('data-tab');
        $(this).addClass('active').siblings().removeClass('active')
        $('.tab-content--wrap .' + get_tab).addClass('active').siblings().removeClass('active');
    });
    $('.card-content-mobile--tabs__item').click(function () {
        var get_tab = $(this).attr('data-tab');
        $(this).addClass('active').siblings().removeClass('active')
        $('.card-content-mobile--tabs__content .' + get_tab).addClass('active').siblings().removeClass('active');
    });

    $('.order-date').each(function(){
        $(this).datepicker({
            autoShow: false,
            autoPick: true,
            language: 'ru-RU',
            autoHide: true,
            //inline: true,
            //trigger: '.data-exam-popup',
            offset: 20,
            container: '.popup-calendar',
            pickedClass: 'picked-day-migdex',
            highlightedClass: 'today-day-migdex',
            zIndex: 1050,
            startDate: function(date){
                date.valueOf() < now ? true : false;
            },
        });
    });

    $('.order-checkbox-everyday').click(function () {
       $(this).toggleClass('active');
       if($(this).hasClass('active')){
           $(this).children('input').prop('checked',true);
       } else {
           $(this).children('input').prop('checked',false);
       }

    });

    $('.article-comments--item__depth').click(function () {
       $(this).toggleClass('active');
       $(this).next().slideToggle(200);
    });

    $("#user-photo").change(function () {

        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('.lk-photo-added').attr('style', 'background-image:url("'+ e.target.result +'");');

            };
            reader.readAsDataURL(this.files[0]);
        }

    });
    $('.lk-input-input').click(function () {
       $(this).find('.lk-input--list').slideToggle(150);
    });
    $('.lk-input--item').click(function () {
       var get_text = $(this).text();
       $('.lk-input-input .main-input').text(get_text);
    });

    $('.lk-subscribe--sub').click(function () {
        $(this).toggleClass('active');
        if($(this).hasClass('active')){
            $(this).children('input').prop('checked',true);
        } else {
            $(this).children('input').prop('checked',false);
        }
    });

    $('.footer-middle--title--wrap').click(function () {
       $(this).children('.footer-middle--title__icon').toggleClass('active');
       $(this).next().slideToggle(200).css('display','flex');
    });


    (function($) {
        $.fn.swipeDetector = function(options) {
            // States: 0 - no swipe, 1 - swipe started, 2 - swipe released
            var swipeState = 0;
            // Coordinates when swipe started
            var startX = 0;
            var startY = 0;
            // Distance of swipe
            var pixelOffsetX = 0;
            var pixelOffsetY = 0;
            // Target element which should detect swipes.
            var swipeTarget = this;
            var defaultSettings = {
                // Amount of pixels, when swipe don't count.
                swipeThreshold: 40,
                // Flag that indicates that plugin should react only on touch events.
                // Not on mouse events too.
                useOnlyTouch: true
            };

            // Initializer
            (function init() {
                options = $.extend(defaultSettings, options);
                // Support touch and mouse as well.
                swipeTarget.on("mousedown touchmove", swipeStart);
                $("html").on("mouseup touchmove", swipeEnd);
                $("html").on("mousemove touchmove", swiping);
            })();

            function swipeStart(event) {
                if (options.useOnlyTouch && !event.originalEvent.touches) return;

                if (event.originalEvent.touches) event = event.originalEvent.touches[0];

                if (swipeState === 0) {
                    swipeState = 1;
                    startX = event.clientX;
                    startY = event.clientY;
                }
            }

            function swipeEnd(event) {
                if (swipeState === 2) {
                    swipeState = 0;

                    if (
                        Math.abs(pixelOffsetX) > Math.abs(pixelOffsetY) &&
                        Math.abs(pixelOffsetX) > options.swipeThreshold
                    ) {
                        // Horizontal Swipe
                        if (pixelOffsetX < 0) {
                            swipeTarget.trigger($.Event("swipeLeft.sd"));
                            //console.log("Left");
                        } else {
                            swipeTarget.trigger($.Event("swipeRight.sd"));
                            //console.log("Right");
                        }
                    } else if (Math.abs(pixelOffsetY) > options.swipeThreshold) {
                        // Vertical swipe
                        if (pixelOffsetY < 0) {
                            swipeTarget.trigger($.Event("swipeUp.sd"));
                            //console.log("Up");
                        } else {
                            swipeTarget.trigger($.Event("swipeDown.sd"));
                            //console.log("Down");
                        }
                    }
                }
            }

            function swiping(event) {
                // If swipe don't occuring, do nothing.
                if (swipeState !== 1) return;

                if (event.originalEvent.touches) {
                    event = event.originalEvent.touches[0];
                }

                var swipeOffsetX = event.clientX - startX;
                var swipeOffsetY = event.clientY - startY;


                if (
                    Math.abs(swipeOffsetX) > options.swipeThreshold ||
                    Math.abs(swipeOffsetY) > options.swipeThreshold
                ) {
                    swipeState = 2;
                    pixelOffsetX = swipeOffsetX;
                    pixelOffsetY = swipeOffsetY;

                }
            }

            return swipeTarget; // Return element available for chaining.
        };
    })(jQuery);



    $('.tablet-menu-sandwich,.tel-menu-sandwich').swipeDetector({swipeThreshold: 25}).on("swipeLeft.sd", function (event) {
        if (event.type === "swipeLeft") {
            $(this).removeClass('active')
            $('body').removeClass('overflow-hidden');
            $('.content').removeClass('tablet-bg');
        }
    });
    $('.content').click(function () {
        $('.tablet-menu-sandwich,.tel-menu-sandwich').removeClass('active')
        $('body').removeClass('overflow-hidden');
        $('.content').removeClass('tablet-bg');
    });



    var mobile_modal = function() {
        if ($(window).width() <= 768) {
            $('[data-custom-modal]').click(function () {
                $(this).addClass('active');
                var get_id = $(this).attr('data-custom-modal');
                $(get_id).addClass('active');
                $('header').addClass('header-transform-hidden');
                $('body').addClass('overflow-hidden');
                $('.content').addClass('mobile-popup-bg');
                $('.close-mobile--popups').addClass('active');

            });
            $('[data-custom-dismiss="modal"]').click(function () {
               $(this).parents('.popup-mobile-added').removeClass('active');
            });
            $('[data-custom-close="modal"]').click(function () {
                $(this).parents('.popup-mobile-added').removeClass('active');
                $('.content').removeClass('mobile-popup-bg');
                $('header').removeClass('header-transform-hidden');
                $('body').removeClass('overflow-hidden');
                $('.close-mobile--popups').removeClass('active');
            });


        }
    };
    mobile_modal();
    $(window).resize(mobile_modal);

    $(".popup-header").swipeDetector({swipeThreshold: 20}).on("swipeDown.sd", function (event) {
        if (event.type === "swipeLeft") {

        } else if (event.type === "swipeRight") {

        } else if (event.type === "swipeUp") {

        } else if (event.type === "swipeDown") {
            $('.popup-mobile-added').removeClass('active');
            $('header').removeClass('header-transform-hidden');
            $('.content').removeClass('mobile-popup-bg');
            $('.close-mobile--popups').removeClass('active');
            $('body').removeClass('overflow-hidden modal-open');
        }
    });

    $('.close-mobile--popups,.popup-mobile-cat--item').click(function () {
        $('.popup-mobile-added').removeClass('active');
        $('header').removeClass('header-transform-hidden');
        $('.content').removeClass('mobile-popup-bg');
        $('.close-mobile--popups').removeClass('active');
        $('body').removeClass('overflow-hidden modal-open');
    });

    var mobile_delete_basket = function() {
        if ($(window).width() <= 576) {

            $('.basket-content-mini-basket__item').each(function (ndx) {
                $(this).attr('id','basket-delete-'+ (ndx + 1));
                var get_id = $(this).attr('id');

                $('#'+get_id).swipeDetector({swipeThreshold: 2}).on("swipeLeft.sd swipeRight.sd", function (event) {

                    if (event.type === "swipeLeft") {
                        $(this).addClass('delete-active');
                    } else if (event.type === "swipeRight") {
                        $(this).removeClass('delete-active');
                    } else if (event.type === "swipeUp") {

                    } else if (event.type === "swipeDown") {

                    }
                });
            });

            $('.swipe-item--wrapper').each(function (ndx) {
                $(this).attr('id','swipe-delete-'+ (ndx + 1));
                var get_id = $(this).attr('id');

                $('#'+get_id).swipeDetector({swipeThreshold: 3}).on("swipeLeft.sd swipeRight.sd", function (event) {

                    if (event.type === "swipeLeft") {
                        $(this).addClass('delete-active');
                    } else if (event.type === "swipeRight") {
                        $(this).removeClass('delete-active');
                    } else if (event.type === "swipeUp") {

                    } else if (event.type === "swipeDown") {

                    }
                });
            });


        }
    };
    mobile_delete_basket();
    $(window).resize(mobile_delete_basket);

    var mobile_sort = function() {
        if ($(window).width() <= 992) {
            $('.catalog-page .catalog-sort--col__sort').wrapAll('<div class="catalog-sort--col__sort--wrap"></div>')
            $('.card-content-count--added .main-button-transparent').html('<svg class="icon icon-basket ">' +
                '<use xlink:href="static/img/svg/symbol/sprite.svg#basket"></use>' +
                '</svg>');
            $('.card-content-composition--item').slice(-3).wrapAll('<div class="card-content-composition--list__mobile"></div>');
        }
    };
    mobile_sort();
    $(window).resize(mobile_sort);

    var mobile_bas = function() {
        if ($(window).width() <= 1200) {
            $('.lanch-components--bottom .card-content-count--added .main-button-transparent').html('<svg class="icon icon-basket ">' +
                '<use xlink:href="static/img/svg/symbol/sprite.svg#basket"></use>' +
                '</svg>');
        }
    };
    mobile_bas();
    $(window).resize(mobile_bas);


    $('.card-content-composition--link').click(function () {
        $(this).toggleClass('active');
        $('.card-content-composition--list__mobile').slideToggle(200);
        if($(this).hasClass('active')){
            $(this).text('Скрыть');
        } else {
            $(this).text('Подробнее');
        }
    });
    $('.catalog-sort--col__filter').click(function () {
        $(this).toggleClass('active');
        $('.catalog-sort--col__sort--wrap').slideToggle(200).css('display','flex');
    });

    $('.popup-mobile-check--item__wrap').click(function () {
        $(this).toggleClass('active');
    });

    // Фильтр цена
    $(function () {
        $('#filter-slider').slider({
            animate: true,
            range: true,
            min: 300,
            max: 1000000,
            values: [ 300, 1000000 ],
            slide: function(event, ui) {

                $('.ui-slider-handle:eq(0) .price-range-min').html(ui.values[ 0 ]);
                $('.ui-slider-handle:eq(1) .price-range-max').html(ui.values[ 1 ]);
                $('.price-range-both').html('<i>' + ui.values[ 0 ] + ' - </i>' + ui.values[ 1 ] );
                // $('#filter-dot-slide1').val(ui.values[0]);
                // $('#filter-dot-slide2').val(ui.values[1]);
                $('#hidden1').val(ui.values[0]);
                $('#hidden2').val(ui.values[1]);


            },
        });

        $("input.sliders-filters").change(function() {
            var $this = $(this);
            $("#filter-slider").slider("values", $this.data("index"), $this.val());
        });

        var min = $("#filter-slider").slider( "option", "min" );
        var max = $("#filter-slider").slider( "option", "max" );
        $(".min-values").text(min);
        $(".max-values").text(max);

        $('#price-reset').click(function () {
            $('#hidden1').val('');
            $('#hidden2').val('');
        });

    });
    $( ".ui-slider-handle" ).draggable({ axis: "x" });

    $('.mobile-lanch-basket--comp').click(function () {
       $(this).toggleClass('active');
       $(this).parents('.mobile-mini-basket--item--lanch__wrap').children('.mobile-lanch-basket--depth').slideToggle(200);
    });
    $('.basket-item-depth--arrow').click(function () {
        $(this).toggleClass('active');
        $(this).parents('.basket-content-mini-basket__item').children('.basket-item-depth--list').slideToggle(200);
    });
    $('.favourite-links').click(function () {
       $(this).toggleClass('active');
    });

    $('.mobile-lanch-search--button').click(function () {
        $('.mobile-lanch-search--fixed').addClass('active');
    });
    $('.mobile-lanch-search--close').click(function () {
        $('.mobile-lanch-search--fixed').removeClass('active');
        $('body').removeClass('overflow-hidden');
        $('.mobile-lanch-search--content--wrap').removeClass('active');
        $('.mobile-lanch-search--input').val('');
    });

    $(".mobile-lanch-search--input").on('keydown',function() {
        if ($(this).val().length) {
            $(this).addClass('active');
            $('.mobile-lanch-search--content--wrap').addClass('active');
            $('body').addClass('overflow-hidden');
        } else {
            $(this).removeClass('active');
            $('.mobile-lanch-search--content--wrap').removeClass('active');
            $('body').removeClass('overflow-hidden');
        }
    });
    $('.faq-content--item--wrap .faq-content--item').click(function () {
       $(this).toggleClass('active');
       $(this).next().slideToggle(200);
    });

    $('.faq-swiper-tab').click(function () {
       var get_tab = $(this).attr('data-tab');
       var get_buttons = document.querySelectorAll('.faq-swiper-tab[data-tab='+get_tab+']');
       for(let item of get_buttons){
           $(item).addClass('active').siblings().removeClass('active');
       }
       $('.faq-content--item__info--wrap.' + get_tab).addClass('active').siblings().removeClass('active');
    });

    var faq_tablet = function() {
        if ($(window).width() <= 992) {
            $('.faq-swiper--desc').removeClass('active')

        }
    };
    faq_tablet();
    $(window).resize(faq_tablet);


    var x = document.getElementById("popup-load-you-input");
    if (x) x.addEventListener("change", function() {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('.popup-load-you-file--zone').attr('style', 'background-image:url("'+ e.target.result +'");');

            };
            reader.readAsDataURL(this.files[0]);
        }
        var elem = document.getElementById("mod-vid-progress");
        var num = document.getElementById("mod-vid-progress-number");
        var count = 0;
        let id = setInterval(frame, 20);

        function frame() {
            if (count >= 100) {
                $('.popup-load-you-file--video').attr('data-fancybox','iframe').attr('href','https://youtu.be/svPxOMQXads').css('z-index','20');
                $('.popup-load-you-file--zone').addClass('opacity-show');
                $('.popup-file--video--button').removeAttr('disabled').addClass('not-disabled');
                $('.popup-progress-load').fadeOut(0);
                $('.pp-reviews__icon').fadeIn(100).css('display','flex');
                clearInterval(id);
            } else {
                $('.popup-progress-load').fadeIn(50).css('display','flex');
                count++;
                elem.value = count;
                num.innerHTML = count + '%';
            }
        }
    })

    $(function () {
        var x = document.getElementById("popup-load-you-input2");
        if (x) x.addEventListener("change", function() {
            if (this.files && this.files[0]) {
                var reader2 = new FileReader();
                reader2.onload = function (e) {
                    $('.popup-load-you-file--zone').attr('style', 'background-image:url("'+ e.target.result +'");');

                };
                reader2.readAsDataURL(this.files[0]);
            }
            var elem2 = document.getElementById("mod-vid-progress2");
            var num2 = document.getElementById("mod-vid-progress-number2");
            var count2 = 0;
            let id2 = setInterval(frame2, 20);

            function frame2() {
                if (count2 >= 100) {
                    $('.popup-load-you-file--video').attr('data-fancybox','iframe').attr('href','https://youtu.be/svPxOMQXads').css('z-index','20');
                    $('.popup-load-you-file--zone').addClass('opacity-show');
                    $('.popup-file--video--button').removeAttr('disabled').addClass('not-disabled');
                    $('.popup-progress-load').fadeOut(0);
                    $('.pp-reviews__icon').fadeIn(100).css('display','flex');
                    clearInterval(id);
                } else {
                    $('.popup-progress-load').fadeIn(50).css('display','flex');
                    count2++;
                    elem2.value = count2;
                    num2.innerHTML = count2 + '%';
                }
            }
        })
    });

    $('.lk-adress-deafalt--button').click(function () {
       $(this).toggleClass('active');
    });

    document.querySelectorAll(".code-auth--wrap").forEach(x => {
        let digits = x.querySelectorAll(".code-auth");
        if (digits[0]) {

            for (let i = 0; i < digits.length - 1; i++) {
                digits[i].addEventListener("input", function(e) {
                    console.log("i1 val " + this.value);
                    console.log("i1 pars " + parseInt(this.value[this.value.length - 1]));
                    let letter = parseInt(this.value[this.value.length - 1]);
                    if (letter) {
                        this.value = letter;
                        this.nextElementSibling.focus();
                    } else {
                        this.value = "";
                    }
                });
            }

            for (let i = 1; i < digits.length; i++) {
                digits[i].addEventListener("keydown", function(e) {
                    console.log("kd val " + this.value);
                    console.log("kd pars " + parseInt(this.value[this.value.length - 1]));
                    let isFilled = false;
                    if (this.value != "") isFilled = true;
                    if (e.key == "Backspace" && !isFilled) this.previousElementSibling.focus();
                });
            }

            digits[digits.length - 1].addEventListener("input", function(e) {
                console.log("i2 val " + this.value);
                console.log("i2 pars " + parseInt(this.value[this.value.length - 1]));
                let letter = parseInt(this.value[this.value.length - 1]);
                if (letter) {
                    this.value = letter;
                } else {
                    this.value = "";
                }
            });

        }
    });

    $(function () {
        var get_text = document.querySelectorAll('.review-card-review__bottom');

        for (let item of get_text ){
            let get_count = item.innerText.length;
            if (get_count >= 300){
                $(item).html('<div class="review-card-review__bottom">'+ item.innerText +'</div><div class="review-card-review--showmore">Еще</div>');

            }

        }
        $('.review-card-review--showmore').click(function () {
            $(this).prev('.review-card-review__bottom').toggleClass('active');
        });
    });
    $(function () {
        var get_text = document.querySelectorAll('.article-comments--item__comment span');

        for (let item of get_text ){
            let get_count = item.innerText.length;
            if (get_count >= 200){
                $(item).parent('.article-comments--item__comment').append('<div class="review-card-review--showmore">Читать полностью</div>');

            }

        }
        $('.review-card-review--showmore').click(function () {
            $(this).parent('.article-comments--item__comment').toggleClass('active');
            if($(this).parent('.article-comments--item__comment').hasClass('active')){
                $('.article-comments--item__comment .review-card-review--showmore').text('Скрыть');
            }else {
                $('.article-comments--item__comment .review-card-review--showmore').text('Читать полностью');
            }
        });
    });

    $(function () {
        var get_text = document.querySelectorAll('.catalog-desc-p');

        for (let item of get_text ){
            let get_count = item.innerText.length;
            if (get_count >= 300){
                $(item).parents('.section-recommend').find('.section-container').append('<div class="review-card-review--showmore2">Подробнее</div>');


            }

        }
        $('.review-card-review--showmore2').click(function () {
            $(this).prev('.catalog-desc-p').toggleClass('active');
            if($('.catalog-desc-p').hasClass('active')){
                $('.review-card-review--showmore2').text('Скрыть');
            }else {
                $('.review-card-review--showmore2').text('Подробнее');
            }
        });
    });

    $('.popup-mobile-sort--item').click(function () {
       var get_text = $(this).text();
       $(this).addClass('active').siblings().removeClass('active');
       $('.catalog-sort-block--mobile--left span').text(get_text);
    });


    $('.basket-header-mini-basket__delete').click(function () {
        $(this).parents('.basket-content-mini-basket__item').addClass('deleted-item');
        setTimeout(function () {
            $('.deleted-item').remove();
        },700)
    });

    $(window).scroll(function () {
       var get_height = $(window).scrollTop();
       if(get_height >= 3700){
           $('.mobile-lanch-list--show').addClass('transform');
       } else{
           $('.mobile-lanch-list--show').removeClass('transform');
       }

    });







});

