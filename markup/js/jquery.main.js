jQuery(function() {
    initSliders();
    scrollDown();
    headerScroll();
    mobileHeaderDrop();
});

const header = $(".header");


//carousels
let initSliders = () => {
    const membershipsSwiper = new Swiper('.memberships-slider', {  
        spaceBetween: 0,
        speed: 6000,
        autoplay: {
            delay: 1,
        },
        loop: true,
        slidesPerView:'auto',
        allowTouchMove: false,
        disableOnInteraction: true
      });

    const infoSwiper = new Swiper('.info-slider', {  
        spaceBetween: 0,
        autoplay: {
            delay: 5000,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
    });

    const mediaSwiper = new Swiper('.media-slider', {  
        spaceBetween: 9,
        slidesPerView:'auto',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          1200: {
            spaceBetween: 22,
          }
        }

    });

};

//scroll-down
let scrollDown = () => {
    const button = $(".scroll-down");

    button.on("click", function(e){
        e.preventDefault();
        const $this = $(this);
        const headerHeight = $(".header").height() || 0;
        const offsetTopNextElement = $this.closest(".hero-section").next().offset().top - headerHeight;

        $('html, body').animate({ 
            scrollTop: offsetTopNextElement
        }, 1000);
    });
};

//header on scroll
let headerScroll = () => {
    $(window).on("load scroll", function() {
        const windowTop = $(this).scrollTop();

        header[`${windowTop > 0 ? "add" : "remove"}Class`]("scrolled");
    });
};

//mobile drop-down
let mobileHeaderDrop = () => {
    const mobileOpenClose = $(".nav-open-close");
    const navLinks = $(".header-nav-link-view");
    const backBtn = $(".nav-back");

    mobileOpenClose.on("click", function(e) {
        e.preventDefault();
        header.toggleClass("active-header");

        backBtn.text("").removeClass("active");
        navLinks.css("display", "inline-block");
    });

    navLinks.on("click", function (e){
        const $this = $(this);
        const windowWidth = $(window).width();

        if($this.closest(".has-child").length && windowWidth < 1200) {
            e.preventDefault();
            backBtn.text($this.text()).addClass("active");
            navLinks.css("display", "none");
        }
    });

    backBtn.on("click", function(e) {
        e.preventDefault();
        const $this = $(this);
        $this.text("").removeClass("active");
        navLinks.css("display", "inline-block");
    });
};