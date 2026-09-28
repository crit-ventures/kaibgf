/**
 * member - LNB 고정 + 스크롤 위치에 따른 활성 탭
 */
$(function(){
  $(window).on("scroll", function(){
    var scrollTop = $(window).scrollTop();
    var headerHeight = $(".KBPFheader").outerHeight();
    var tabMenuHeight = $(".lnb").outerHeight();

    // LNB 상단 고정
    var tabMenuTop = $(".lnb_wrap").offset().top - headerHeight;
    if(scrollTop < tabMenuTop){
      $(".lnb_wrap").removeClass("on");
    }else{
      $(".lnb_wrap").addClass("on");
    }

    // 고정 헤더 + LNB 높이만큼 아래로 내린 지점을 기준선으로 사용
    var trigger = scrollTop + headerHeight + tabMenuHeight + 2;
    var c1 = $("#KBPFcont_1").offset().top;
    var c2 = $("#KBPFcont_2").offset().top;

    var idx = (trigger >= c2) ? 2 : 1;

    // 페이지 최하단이면 마지막 탭 활성화
    if(scrollTop + $(window).height() >= $(document).height() - 2){ idx = 2; }

    $(".lnb a").removeClass("on");
    $(".lnb a:nth-child(" + idx + ")").addClass("on");
  }).trigger('scroll');
});
