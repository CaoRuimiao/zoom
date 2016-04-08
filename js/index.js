$(function(){
    //$('.smallSence').css('height',$('#smallSence img').height());
    // 鼠标经过显示放大镜
    $('#smallSence').hover(function(){
        $('#zoom').css("display","block");
        $('#bigSence').css("display","block");
    },function(){
        $('#zoom').css("display","none");
        $('#bigSence').css("display","none");
    });

    var smallW=$('#smallSence').width();
    var zoomW=$('#zoom').width();
    var smallH=$('#smallSence').height();
    var zoomH=$('#zoom').height();

    // 鼠标移动时
    $('#smallSence').mousemove(function(e){
        var clientX= e.clientX;
        var clientY= e.clientY;
        var left=clientX-$('#smallSence').offset().left-zoomW/2;
        var top=clientY-$('#smallSence').offset().top-zoomH/2;

        //边界判断
        if(top<0){
            top=0;
        }else if(top>smallH-zoomH){
            top=smallH-zoomH;
        }
        if(left<0){
            left=0;
        }else if(left>smallW-zoomW){
            left=smallW-zoomW;
        }

        // 放大镜的位置
        $('#zoom').css({'left':left,'top':top});

        // 放大镜移动的百分比
        var percentX = left / (smallW - zoomW);
        var percentY = top / (smallH - zoomH);

        var newL=-percentX * ($('#bigSence img').width() - $('#bigSence').width()) + "px";
        var newT=-percentY* ($('#bigSence img').height() - $('#bigSence').height())+'px';

        $('#bigSence img').css({'left':newL,'top':newT});

    });



})