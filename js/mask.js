var left = ($(window).width() - $('.hj').width())/2;
var scrollLeft = $(document).scrollLeft();
/*点击出现遮罩层*/
$('.fr>a').on('click',function () {
    showOverlay();
    $('.hj').css('display','block');
    $('.hj').css('position' ,'absolute').css('left',left + scrollLeft).css('top','185px');
    $('.hj').bind("touchmove",function(e){
        e.preventDefault();
    });
    $('body').css('overflow','hidden');

});
/*点击关闭遮罩层*/
$('.hj>.close-btn').on('click',function () {
    $('.hj').css('display','none');
    hideOverlay()
    $('body').css('overflow','auto');
})

//
$('.ok-btn').on('click',function () {
    hideOverlay()
    $('.info').css("display",'none')
    $('body').css('overflow','auto');
})

/* 显示遮罩层 */
function showOverlay() {
    $("#overlay").height($(document).height());
    $("#overlay").width(pageWidth());

    // fadeTo第一个参数为速度，第二个为透明度
    $("#overlay").fadeTo(100, 0.8);
}

/* 隐藏覆盖层 */
function hideOverlay() {
    $("#overlay").fadeOut(100);

}

/* 当前页面高度 */
function pageHeight() {
    return document.body.scrollHeight;
}

/* 当前页面宽度 */
function pageWidth() {
    return document.body.scrollWidth;
}

//浏览器视口的高度
function windowHeight() {
    var de = document.documentElement;

    return self.innerHeight || (de && de.clientHeight) || document.body.clientHeight;
}

//浏览器视口的宽度
function windowWidth() {
    var de = document.documentElement;

    return self.innerWidth || (de && de.clientWidth) || document.body.clientWidth
}

/* 浏览器垂直滚动位置 */
function scrollY() {
    var de = document.documentElement;

    return self.pageYOffset || (de && de.scrollTop) || document.body.scrollTop;
}

/* 浏览器水平滚动位置 */
function scrollX() {
    var de = document.documentElement;

    return self.pageXOffset || (de && de.scrollLeft) || document.body.scrollLeft;
}