$(function() {
    $ ('.scroll').click(function(e){
        e.preventDefault(); // 클릭한 메뉴의 링크 막음
        $('html').animate({screenTop:$(this.hash).offset().top}, 500);
        //this.hash는 현재 클릭한 메뉴가 연결된 #ms1, #ms2, #ms3의 위치
        //offset().top은 문서의 절대 위치값.
    });


    $(window).resize(function(){
        $('.container').width($(window).width()).height($(window).height());

        $('.content').each(function() {
            $(this).css('margin-left', ($(this).width() / 2 * -1) + 'px')
            .css('margin-top', ($(this).height() / 2 * -1) + 'px');
        })
    })
    // 마진레프트 같은 것은 자스에서 이렇게 써도 적용된다 대소문자 구분 x, 그나저나 뒤에 연산자가 압권이다. 

    setTimeout(function(){
        $(window).resize();
    }, 1000);


    $('.bg-holder').parallaxScroll({
        friction: 0.3 
        //0~1의 값 범위, 0이면 컨텐츠를 따라 스크롤, 1이면 배경이 고정됨.
    });

    $('.icon img').hover(function(){
        $(this).attr('src',$(this).attr('src').replace('.png', '_over.png'));
    }, function() {
        $(this).attr('src', $(this).attr('src').replace('_over.png', '.png')); 
    });
});