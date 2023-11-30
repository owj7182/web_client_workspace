$("#btn1").on('click', () => {
    console.log('🥩');

    console.log($); // jquery함수
    console.log(jQuery); // jquery함수. $ 변수명 충돌을 방지하기 위해 jquery변수도 제공. 위의 코드와 동치

    // $("선택자") -> jquery객체(js태그객체를 감싼 객체)
    // jquery객체를 담은 변수는 $ 시작하는 관례가 있다.
    const $p1 = $("#p1");
    console.log($p1);
    $p1.css('color', 'red');

    // const $group1 = $(".group1");
    // $group1.log($group1);
    // $group1.css('text-decoration', 'underline');

    document.querySelector('.group1').forEach((p) => {
        p.style.textDecoration = 'underLine';
    });
   
    // p태그에 font-size 2배 적용
    $("P").css('font-size', '2em');

    // title속성이 있는 요소 background 적용
    $("[title]").css('background-color', 'green');
    
    // title속성이 안녕3인 요소 color 변경
    $("[title=안녕3]").css('color', 'white');
});

/**
 * jquery 객체
 * js 객체
 */
$("#btn2").on('click', () => {
    // jquery객체
    console.log($("p")); // p태그객체(js)를 감싼 객체

    // js객체
    console.log($("p")[0]); // p#p1
    console.log($("p").get(0)); // 위의 코드와 동치 p#p1
    console.log($("p").get()); // [p#p1, p#p2, p#p3, p#p4, p#p5]

    // js객체를 전달해서 jquery객체 생성
    console.log($(document.querySelector('#p1')));
    console.log($(p1));
    console.log($([p1, p2, p3]));
});

/**
 * jquery전용 선택자
 * - input 타입별로 pseudo Class 선택자
 */
$("#btn3").on('click', () => {
    // input[type=text]
    $(":text") 
        .css('background-color', 'tomato') // 원래 jquery객체를 다시 리턴하기 때문에 연결해서 사용가능. 메소드 chaining
        .css('color', 'white');
    // 객체형을 전달가능 (css 속성명 주의 : -이 있다면 문자열 처리 또는 카멜케이싱지원)
    $(":password")
        .css({
            // 'background-color' : 'yellowgreen',
            backgroundColor : 'yellowgreen',
            'color' : 'white'
        });

        $(":radio#male").prop("checked", true); // 체크처리
        $(":checkbox#baseball, checkbox#basketball").prop('checked', true);
        
        $(":button").val('Click me!');
    });

/**
 * 순서관련
 * - :first
 * - :last
 * - :odd
 * - :even
 * 
 * - :eq(n)
 * - :gt(n)
 * - :lt(n)
 * 
 * 내용포함
 * - :contains(text)
 *
 * 자식요소포함
 * - :has(selector)
 *  
 */
$(btn4).on('click', () => {
    // const $selected = $("#people tr:first");
    // const $selected = $("#people tr:last");
    // const $selected = $("#people tr:odd"); // 0-based index 홀수 :nth-child(2n+1)
    // const $selected = $("#people tr:even"); // 0-based index 짝수 :nth-child(2n)

    // const $selected = $("#people tr:eq(3)"); // 3번지와 같은
    // const $selected = $("#people tr:gt(0)"); // 0번지 보다 큰
    // const $selected = $("#people tr:lt(3)"); // 0번지 보다 작은
    
    // const $selected = $("#people tr:contains('A')"); // text기반
    const $selected = $("#people tr:has(a[href]"); // text기반

    
    $selected.css('background-color', 'slateblue');
})