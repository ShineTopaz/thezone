function setActiveByScreen() {

    $(".nav>ul>li:last-child").off("click mouseenter mouseleave");


    if ($(window).width() <= 768) {
        $(".nav>ul>li:last-child").on("click", function () {
            $(".drop_menu").stop().slideToggle();
            $(this).stop().toggleClass("active")
        })
    }
    else {
        $(".drop_menu").stop().hide();
        $(".nav>ul>li:last-child").on("mouseenter", function () {
            $(".drop_menu").stop().slideDown();
            $(this).stop().addClass("active")
        })
        $(".nav>ul>li:last-child").on("mouseleave", function () {
            $(".drop_menu").stop().slideUp();
            $(this).stop().removeClass("active")
        })
    }
}



// 화면 로드 시 실행
setActiveByScreen();

// 화면 크기 변경 시 실행
$(window).on("resize", function () {
    setActiveByScreen();
});


$(".map_img>div").hide().eq(0).show();
$(".ad>p").hide().eq(0).show();
$(".how>ul").hide().eq(0).show();


$(".map_tab ul li").click(function () {
    $(this).addClass("active").siblings().removeClass("active")
    const index = $(this).index();
    $(".map_img>div").eq(index).show().siblings().hide();
    $(".ad>p").eq(index).show().siblings().hide();
    $(".how>ul").eq(index).show().siblings().hide();
})

