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
    m_nav_open.style.display = 'block'
})
//객체.이벤트
//객체 = 햄버거메뉴m_nav, 모바일메뉴m_nav_open
//3. x버튼 클릭 시 모바일 메뉴 숨기기
close.addEventListener('click',function(){
    m_nav_open.style.display = 'none'
})
//x버튼close, 모바일메뉴m_nav_open

