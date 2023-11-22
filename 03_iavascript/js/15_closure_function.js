/**
 * 자유변수 Free Variable
 *  - 함수 지역볌위에서 선언되지 않은 변수
 */
const test1 = () => {
    say('우진');
}
const hello = "안녕";

/**
 * 지역변수 : str1, str2, name(매개변수)
 * 자유변수 : hello
 */
const say = (name) => {
    const str1 = `${hello}~, ${name}`;
    const str2 = "밥 먹었니?"
    console.log(str1, str2);
};

/**
 * closure 함수
 *  - 닫힘함수. 참조하는 자유변수를 가지고 외부로부터 닫힌 함수
 *  - 함수를 반환하는 과정에서 클로져함수 생성가능
 */
const test2 = () => {
    const n = 20;
    const foo2 = foo();
    foo2();
}

const foo = () => {
    const n = 10;
    return () => console.log(n);
}


let cnt = 0;
/**
 * 전역 카운터
 */
const test3 = () => {
    cnt++;
    document.querySelector('#global-counter').innerHTML = cnt;
}


/**
 * 클로져 카운터
*/
const counterMaker = () => {
    let cnt = 0;
    return () => {
        cnt++;
        document.querySelector('#closure-counter').innerHTML = cnt;
    }
}

const test4 = counterMaker();

