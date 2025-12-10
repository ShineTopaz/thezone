const wo_right = new Swiper(".wo_right", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
        768: { slidesPerView: 'auto', },
    },

})

function setActiveByScreen() {
    if ($(window).width() <= 768) {

        $(".wo_right li").find(".list_img").addClass("active"); // 첫 번째 고정
        $(".wo_right li").find(".list_txt").stop().fadeIn();
    } else {
        $(".wo_right li").find(".list_txt").fadeOut();
        $(".wo_right li").find(".list_img").removeClass("active");
    }
}

// 화면 로드 시 실행
setActiveByScreen();

// 화면 크기 변경 시 실행
$(window).on("resize", function () {
    setActiveByScreen();
});


$(".wo_right li").mouseenter(function () {
    if ($(window).width() <= 768) return;
    $(this).find(".list_txt").stop().fadeIn();
    $(this).find(".list_img").addClass("active")
})

$(".wo_right li").mouseleave(function () {
    if ($(window).width() <= 768) return;
    $(this).find(".list_txt").stop().fadeOut();
    $(this).find(".list_img").removeClass("active")
})



const mission_wrap = new Swiper(".mission_wrap", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 5000,
    },
    breakpoints: {
        1400: { slidesPerView: 'auto', },
        768: { slidesPerView: 2, },
    },
})

$(".vision ul li").click(function () {
    $(this).find(".vision_list").addClass("active")
    $(this).find(".vision_content").stop().slideDown()

    $(this).siblings().find(".vision_list").removeClass("active");
    $(this).siblings().find(".vision_content").stop().slideUp();
})

$(".news_list_tab li").click(function () {
    $(this).addClass("active").siblings().removeClass("active")

})

$(".news_list li").hover(function () {
    $(this).find("a:first-child div").stop().fadeToggle();
})


const news_wrap = new Swiper(".news_wrap", {
    slidesPerView: 2,
    loop: true,
    spaceBetween: 20,
    breakpoints: {
        768: { slidesPerView: 4, },
    },

})

const place_wrap = new Swiper(".place_wrap", {
    slidesPerView: 1.5,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
        768: { slidesPerView: 4, },
    }
})