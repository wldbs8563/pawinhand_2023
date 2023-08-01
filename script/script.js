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
const pawin_slide2 = new Swiper('#pawin_slide2',{
    autoplay:{delay:10000},
    effect:'fade',
    direction:'vertical',
    loop:true,
    navigation: {
        nextEl: '#pawin_slide2 .swiper-button-next',
        prevEl: '#pawin_slide2 .swiper-button-prev',
    },
})
//pawin-slide3
const pawin_slide3 = new Swiper('#pawin_slide3',{
    autoplay:{delay:1000},
    loop:true,
    effect:'fade',
});
/* 입양정보 slide */
const dog_info_slide = new Swiper('#dog_info_slide',{
    slidesPerView:'auto', //breakpoints옵션추가시 'auto, 한번에 보이는 슬라이드 갯수
    spaceBetween:20, // 슬라이드 사이 여백
    // swiper-slide 반응형웹 옵션
    breakpoints:{
        //해상도:{옵션:값}
        //해상도 순서는 작은 해상도 -> 큰 해상도 순으로 작성
        400:{slidesPerView:2},//400~899
        // 700:{slidesPerView:2}, //700이상일 때
        900:{slidesPerView:3}, //900이상일 때
        1160:{slidesPerView:4} //1160이상일 경우 슬라이드 4개 표시
    },
    autoplay:{delay:1000},
    loop:true,
});
