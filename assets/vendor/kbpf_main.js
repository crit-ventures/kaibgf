// gnb 메뉴
// 메뉴 링크에 마우스 진입 시
$(".gnb > li").on("mouseenter", function(){
        $(this).find(">a").addClass("on");
        $(this).find(".depth").slideDown(100);
}).on("mouseleave", function(){
        $(this).find(">a").removeClass("on");
        $(this).find(".depth").stop(true, true).slideUp(100);
});

// 메뉴 링크에 포커스 될 때
$(".gnb > li > a").on("focus", function(){
    $(".gnb > li > a").removeClass("on");
    $(this).addClass("on");
    $(".depth").not($(this).next(".depth")).stop(true, true).slideUp(100);
    $(this).next(".depth").slideDown(100);
})
// 마지막 서브메뉴에서 포커스 아웃 될 때
$(".gnb > li > ul > li:last-child > a").on("blur", function(){
    $(this).mouseleave();
});

// 서브 메뉴 포커스 될 때
$(".depth > li > a").on("focus", function(){
    $(".depth > li > a").removeClass("on");
    $(this).addClass("on");
})

// 모바일용
// 대메뉴 클릭 시
$(".gnb > li > a").on("click", function(){
    //1280 미만일 때만 실행
    if($(window).width() < 1280) {
        $(".gnb .depth").removeClass("active");
        $(this).siblings(".depth").addClass("active");
    }
});

// 메뉴 아이콘 클릭 시
$(".m_menu").on("click", function(){
    if($(this).hasClass("on")){
        $(this).removeClass("on");
        $(".KBPFheader").removeClass("open");
    }else{
        $(this).addClass("on");
        $(".KBPFheader").addClass("open");
    }
});
$(".m_menu").on("click", function(){
    if($(window).width() < 1280) {
        if($(this).hasClass("on")){
            $( "html, body" ).css('height','100vh');
            $( ".KBPFwrap" ).addClass("fixed");
        }else{
            $( "html, body" ).css('height','auto');
            $( ".KBPFwrap" ).removeClass("fixed");
        }
    }
});

$(window).on('scroll',function(){
    if($(window).scrollTop()){
        $('.KBPFheader').addClass('active');
    }else{
        $('.KBPFheader').removeClass('active');
    }
}).trigger('scroll');