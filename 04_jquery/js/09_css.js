/**
 * display속성
 *  - show (speed, easing, callback)
 *  - hide (speed, easing, callback)
 */
$(btn1).click(() => {
    $(river1).show(1000, 'linear', () => {
        alert('보이십니까?');
    });
});

$(btn2).click(() => {
    $(river1).hide(1000, 'linear', () => {
        alert('이제는 안보입니다.')
    });
});

/**
 * 블라인드효과 적용된 display
 * - slideDown(speed, easing, callback) 노출
 * - slideUp(speed, easing, callback) 숨김
 */
$(btn3).click(() => {
    $(".menu").next().slideDown();
});
$(btn4).click(() => {
    $(".menu").next().slideUp();
});


$('.menu').click((e) => {  
    $(e.target).next().slideToggle().siblings(".content").slideUp();
});

// $(".menu").click((e)=> {
//     $(".content").not($(e.target).next().slideToggle()).slideUp(); // 위랑 결과가 동일
// });

/**
 * opacity/display 효과 연출
 * fadeIn(speed, easing, callback)
 * fadeOut(speed, easing, callback)
 */
$(btn5).click(() => {
    $(flower1).fadeIn(500);
});
$(btn6).click(() => {
    $(flower1).fadeOut(300);
});

$(flower2).hover((e) => {
    $(e.target)
    .fadeTo(300, 1)
    .css('transform', 'scale(1.1)')
}, (e) => {
    $(e.taget)
    .fadeTo(300, .5)
    .css('transform', 'scale(1)')
});