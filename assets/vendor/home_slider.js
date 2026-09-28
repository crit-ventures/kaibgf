/**
 * kbpf_main.js
 */
$(window).load(function() {
        // 메인 비쥬얼 슬라이더
        $('.section_1 .slider_set').on('init', function(event, slick) {
            $('.control_box .layout_current').text(slick.currentSlide + 1);
            $('.control_box .layout_total').text(slick.slideCount);
        }).slick({
            dots: false,
            arrows: false,
            autoplay: true,
            infinite: true,
            fade: true,
            speed: 800,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            pauseOnHover:false
        }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            $('.control_box .layout_current').text(nextSlide + 1);
        });
        $(".section_1").on('afterChange',function(){
            $(".pro-bar").addClass('pro-ani');
        });
        $(".section_1").on('beforeChange',function(){
            $(".pro-bar").removeClass('pro-ani');
        });
        $(".control_btn").on("click", function(){
            if($(this).hasClass("pause")){
                $('.slider_set').slick('slickPlay');
                $(this).removeClass("pause");
                $(".pro-bar").removeClass("pause");
            }else{
                $('.slider_set').slick('slickPause');
                $(this).addClass("pause");
                $(".pro-bar").addClass("pause");
            }
        });

        // 메인 sly
        var slyInit = false;    //sly 초기화 여부 flag
        //sly 초기화 함수
        //가로 사이즈를 확인해서 sly 를 생성 또는 삭제 한다
        function slyCheckAndInit(){
            var ww = $(window).width();
            var $frame = $('.sly_slider');
            var $wrap  = $frame.parent();
            if (ww < 1280) {
                //sly 미생성 됐을 때만 실행
                //sly 초기화 여부 flag 가 false 일 때만 생성
                if(!slyInit){
                    //sly 초기화 여부 flag - true
                    slyInit = true;

                    $frame.sly({// 기본 옵션
                        horizontal: true,
                        itemNav: 'basic',
                        smart: true,
                        activateOn: 'click',
                        mouseDragging: true,
                        touchDragging: true,
                        releaseSwing: true,
                        startAt: 0,
                        scrollBar: $wrap.find('.scrollbar'),
                        scrollBy: 1,
                        speed: 300,
                        elasticBounds: true,
                        easing: 'swing',
                        dragHandle: true,
                        dynamicHandle: true,
                        clickBar: true
                    });
                }else{
                    //이미 생성 되어 있다면 reload
                    $frame.sly('reload');
                }
            } else if (ww >= 1280) {
                //sly 가 초기화 되어 있다면 제거
                if(slyInit){
                    //sly 제거
                    $frame.sly(false);
                    //sly 초기화 여부 flag - false
                    slyInit = false;
                }
            }
        }
        //브라우저 리사이즈 시..
        $(window).on("resize", function(){
            slyCheckAndInit();
            setTimeout(slyCheckAndInit, 500);
        }).trigger("resize");
    });