function setActiveByScreen() {
    $(".nav>ul>li:nth-child(3)").off("click mouseenter mouseleave");
    $(".nav>ul>li:last-child").off("click mouseenter mouseleave");

    if ($(window).width() > 768) {
        $(".nav>ul>li:nth-child(3)").on("mouseenter", function () {
            $(".drop_menu").stop().slideDown();
            $(this).stop().addClass("active")
        })
        $(".nav>ul>li:nth-child(3)").on("mouseleave", function () {
            $(".drop_menu").stop().slideUp();
            $(this).stop().removeClass("active")
        })

        $(".nav>ul>li:last-child").on("mouseenter", function () {
            $(".drop_menu_2").stop().slideDown();
            $(this).stop().addClass("active")
        })
        $(".nav>ul>li:last-child").on("mouseleave", function () {
            $(".drop_menu_2").stop().slideUp();
            $(this).stop().removeClass("active")
        })
    } else {
        $(".drop_menu , .drop_menu_2").stop().hide();
        $(".nav>ul>li:nth-child(3)").on("click", function () {
            $(".drop_menu").stop().slideToggle();
            $(this).stop().toggleClass("active")
        })

        $(".nav>ul>li:last-child").on("click", function () {
            $(".drop_menu_2").stop().slideToggle();
            $(this).stop().toggleClass("active")
        })
    }

    /* AOS 속성 제어 */
    if ($(window).width() < 800) {
        $(".middle_txt").removeAttr("data-aos");
    } else {
        $(".middle_txt").attr("data-aos", "fade-up");
    }
}

// 화면 로드 시 실행
setActiveByScreen();

// 화면 크기 변경 시 실행
$(window).on("resize", function () {
    setActiveByScreen();
});


function setHoverEvent() {
    // 기존 hover 모두 제거
    $(".content_1 ul li").off("mouseenter mouseleave");

    // 1250px 초과일 때만 hover 작동
    if ($(window).width() > 1250) {
        $(".content_1 ul li ").removeClass("active").eq(0).addClass("active")
        $(".content_1 ul li p").hide().eq(0).show();
        $(".content_1 ul li").hover(function () {
            $(this).stop().animate({ width: "27%" }).siblings().stop().animate({ width: "15%" });
            $(this).addClass("active").siblings().removeClass("active");
            $(this).find("p").stop().fadeIn(1000);
            $(this).siblings().find("p").stop().fadeOut(0);
        });
    } else {
        $(".content_1 ul li p").show();
        $(".content_1 ul li ").addClass("active")
    }
}

// 페이지 로드 시 실행
setHoverEvent();

// 창 크기 변경 시 다시 체크
$(window).on("resize", function () {
    setHoverEvent();
});


const content_2_wrap = new Swiper(".content_2_wrap", {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        1250: { slidesPerView: "auto", },
        700: { slidesPerView: 2, },

    },
})

