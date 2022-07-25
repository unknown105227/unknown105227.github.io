$(document).ready(function(){//로딩이 끝나면 실행
    var wd= $(window);
    $('section[data-type"background"]').each(function() {
        var bg = $(this); //section[data-type="background"]
        wd.scroll(function(){ //스크롤 하면,
            var yPos = -(wd.scrollTop)()  .bg.data("speed") // 500/5-x\>> -1000, 500/0.2 =>
            //결과값은 -값을 가지므로 콘텐츠와 반대방향의 y값을 가짐, 즉 스크롤 방향을 반대로 만듬.
            var cords = '50%' + yPos + 'px'; // x좌표는 50%, ye좌표는 yPost의 값.
            bg.css({backgroundPosition:coords});
        });
        });

});