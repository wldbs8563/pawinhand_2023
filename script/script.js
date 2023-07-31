//변수생성
const m_nav_open = document.querySelector('.m_nav_open');
const m_nav = document.querySelector('.m_nav');
const close = document.querySelector('#close');
//정상출력확인
console.log(m_nav_open, m_nav, close);

//1. 모바일 메뉴 숨기기
m_nav_open.style.display = 'none';
//객체 = 모바일메뉴m_nav_open
//객체.속성 style.display = 'none'
//2. 햄버거 메뉴 클릭 시 모바일 메뉴 보이기
m_nav.addEventListener('click',function(){
    m_nav_open.style.display = 'block';
})
//객체.이벤트
//객체 = 햄버거메뉴m_nav, 모바일메뉴m_nav_open
//3. x버튼 클릭 시 모바일 메뉴 숨기기
//x버튼close, 모바일메뉴m_nav_open
close.addEventListener('click',function(){
    m_nav_open.style.display = 'none';
})
//main-swiper-slide
//const 변수생성 = new Swiper('적용대상');
//const 변수생성 = new Swiper('적용대상',{속성:값, 속성:값});
const pawin_slide = new Swiper('#pawin_slide',{
    autoplay:{
        delay:10000,//슬라이드 간격(밀리초) 기본3초
        disableOnInteraction:false,//버튼 클릭 후 자동재생 유지
    },//자동재생
    loop:true,//반복재생 (기본값 false)
    direction:'horizontal',
    //effect:'fade',//제자리 변경 슬라이드 효과
    //direction:'vertical'//위에서 아래로 재생
    navigation: {//이전, 다음 내비게이션 연결
        //next,prev 객체 연결시 부모를 안적으면
        //body 안에 있는 모든 swiper-next,prev를 인식하기 때문에
        //개별인식 가능한 부모이름을 반드시 앞에 먼저 작성한다
        nextEl: '#pawin_slide .swiper-button-next',
        prevEl: '#pawin_slide .swiper-button-prev',
    }
})
// const pawin_slide2 = new Swiper('#pawin_slide2',{
//     autoplay:{delay:10000},
//     effect:'fade',
//     direction:'vertical',
//     loop:true,
//     navigation: {
//         nextEl: '#pawin_slide2 .swiper-button-next',
//         prevEl: '#pawin_slide2 .swiper-button-prev',
//     },
// })
