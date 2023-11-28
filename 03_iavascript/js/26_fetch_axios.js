/**
 * fetch api
 * - promise기반의 비동기통신 객체
 * - fetch - 비동기작업(네트워크상의 요청) - then - 콜백
 * - json응답에 대한 처리
 *  - json이란? javascript object notation, 프로그램간의 데이터교환언어(약속)
 *  - {"id":"shqkel","company":"KH정보교육원","classroom":"352","cnt":106}
 */
document.querySelector('#btn1').addEventListener('click', () => {
    const url = 'https://asia-northeast3-focal-elf-326215.cloudfunctions.net/user';

    fetch(url)
        .then((response) => {
            // fetch의 첫번째 콜백함수는 응답이 시작되는 순간 호출 -> 응답 데이터 확인불가
            console.log(response);
            return response.json(); // 응답 데이터중 json 추출
        })
        // .then((text) => {
        //     console.log(text, JSON.parse(text)); // string -> js object
        // })
        .then((student) => {
            console.log(student);
            const {id, company, classroom, cnt} = student;
            document.getElementById('id').innerHTML = id;
            document.getElementById('company').innerHTML = company;
            document.getElementById('classroom').innerHTML = classroom;
            document.getElementById('cnt').innerHTML = cnt;
        });

        fetch('https://kh-academy.co.kr/main/main.kh?null')
            .then((response) => response.text())
            .then((html) => console.log(html));

});


document.querySelector('#btn2').addEventListener('click', () => {
    const url = 'https://api.github.com/users/owj7182';
    fetch(url)
        .then((response) => response.json())
        .then((user) => {
            // console.log(user);
            const {avatar_url} = user;
            console.log(avatar_url);
            
            const img = document.createElement('img');
            img.src = avatar_url;
            img.style.width = '200px';
            document.querySelector(".img-wrapper").appendChild(img);
        });
        
});

/**
 * axios
 * - 내부적으로 XMLHttpRequest객체를 promise기반으로 사용하도록 하는 js라이브러리
 * - fetch대비 응답데이터를 추출하기 간단.
 * - 그외 편의기능
 */
document.querySelector('#btn3').addEventListener('click', () => {
    const url = 'https://asia-northeast3-focal-elf-326215.cloudfunctions.net/user';
    axios(url)
        .then((response) => {
            console.log(response);
            const {data : {id, company, classroom, cnt}} = response;
            document.getElementById('id').innerHTML = id;
            document.getElementById('company').innerHTML = company;
            document.getElementById('classroom').innerHTML = classroom;
            document.getElementById('cnt').innerHTML = cnt;
        })
});

/**
 * 1. .img-wrapper>img 추가하기
 * 2. load된지 3초후에 제거하기
 */
document.querySelector('#btn4').addEventListener('click', () => {
    const url = 'https://api.github.com/users/owj7182';
    
    // axios(url)
    axios.get(url) // get방식 전송
    .then(({data : {avatar_url}}) => new Promise((resolve) => { 
        
        const img = document.createElement('img');
        img.src = avatar_url;
        img.style.width = '200px';
        document.querySelector(".img-wrapper").appendChild(img);
        img.onload = () => resolve(img);
            setTimeout(() => img.remove(), 3000);
        
    }))
    .then((img) => {
        setTimeout(() => img.remove(), 3000);
    })
});
