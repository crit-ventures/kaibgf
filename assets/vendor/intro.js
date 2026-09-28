/**
 * intro
 */
$(function(){
        //탭 메뉴 초기화
        $(".tab_history .tab_menu li").removeClass("active");
        $(".tab_history .tab_content").removeClass("show");

        $(".tab_history .tab_menu li:first").addClass("active");
        $(".tab_history .tab_content:first").addClass("show");

        //탭 클릭 시
        $(".tab_history .tab_menu li").on("click", function(){
            $(".tab_history .tab_menu li").removeClass("active");
            $(this).addClass("active");

            $(".tab_history .tab_content").removeClass("show");
            var activeTab = $(this).attr("rel");
            $("#" + activeTab).addClass("show");
        });
    });