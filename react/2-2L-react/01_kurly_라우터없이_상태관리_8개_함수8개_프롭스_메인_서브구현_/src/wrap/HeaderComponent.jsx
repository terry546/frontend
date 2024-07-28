import React from 'react';

export  default function  HeaderComponent ({mainSetter, sub1Setter, sub2Setter, sub3Setter, sub4Setter, sub5Setter, sub6Setter, sub7Setter}) {

    // 메뉴 메인(인트로 홈) 클릭 이벤트
    const onClickMain=(e)=>{
        e.preventDefault(); // a 링크태그는 새로고침 발생 제거
        mainSetter();  // 부모컴포넌트의 서브1 페이지 보이도록 하는 함수를 호출 실행
    }
    // 메뉴 서브1 클릭 이벤트
    const onClickSub1=(e)=>{
        e.preventDefault(); // a 링크태그는 새로고침 발생 제거
        sub1Setter();  // 부모컴포넌트의 서브1 페이지 보이도록 하는 함수를 호출 실행
    }

    // 메뉴 서브2 클릭 이벤트
   const onClickSub2=(e)=>{
        e.preventDefault();
        sub2Setter();
   }
    // 메뉴 서브3 클릭 이벤트
    const onClickSub3=(e)=>{
        e.preventDefault();
        sub3Setter();
   }    
    // 메뉴 서브4 클릭 이벤트
    const onClickSub4=(e)=>{
        e.preventDefault();
        sub4Setter();
   }
    // 메뉴 서브5 클릭 이벤트
    const onClickSub5=(e)=>{
        e.preventDefault();
        sub5Setter();
   }
    // 메뉴 서브6 클릭 이벤트
    const onClickSub6=(e)=>{
        e.preventDefault();
        sub6Setter();
   }
    // 메뉴 서브7 클릭 이벤트
    const onClickSub7=(e)=>{
        e.preventDefault();
        sub7Setter();
   }


    return(
        <header id='header'>
            <div className='row1'>
                <div className='container'>
                    <div className='content'>
                        <aside>
                            <ul>
                                
                                <li><a onClick={onClickSub5}  href='!#' className='on'>회원가입</a></li>
                                <li><i>|</i></li>
                                <li><a onClick={onClickSub6}  href='!#'>로그인</a></li>
                                
                                <li>
                                    <a href='?Page=/wrap/sub/signup.jsp' className='on'> 님 <img width='8' src='./images/header/ico_down_16x10.png' alt='' /></a>
                                    <div className='aside-sub login'>
                                        
                                        <ul>
                                            <li><a href='!#'>주문 내역</a></li>
                                            <li><a href='!#'>쿠폰</a></li>
                                            <li><a href='!#'>찜한 상품</a></li>
                                            <li><a href='!#'>자주 구매</a></li>
                                            <li><a href='!#'>적립금 · 컬리캐시</a></li>
                                            <li><a href='!#'>결제수단 · 컬리페이</a></li>
                                            <li><a href='!#'>상품 후기</a></li>
                                            <li><a href='!#'>선물 내역</a></li>
                                            <li><a href='!#'>상품 문의</a></li>
                                            <li><a href='!#'>컬리멤버스</a></li>
                                            <li><a href='!#'>배송지 관리</a></li>
                                            <li><a href='!#'>나의 컬리 스타일</a></li>
                                            <li><a href='?Page=/wrap/sub/signup_info.jsp'>개인 정보 수정</a></li>
                                            <li><a href='UserLogoutActionServlet.do'>로그아웃</a></li>	
                                        </ul>
                                    
                                        <ul>
                                            <li><a href='!#'>회원 목록</a></li>
                                            <li><a href='?Page=/wrap/admin/signup_info.jsp'>개인 정보 수정</a></li>
                                            <li><a href='AdminLogoutActionServlet.do'>로그아웃</a></li>	
                                        </ul>
                                    
                                        
                                    </div>
                                </li>										
                    
                                <li><i>|</i></li>
                                <li>
                                    <a onClick={onClickSub7}  href='!#'>고객센터 <img width='8' src='./images/header/ico_down_16x10.png' alt='' /></a>
                                    <div className='aside-sub board'>
                                        <ul>
                                            <li><a  onClick={onClickSub7}  href='!#'>공지사항</a></li>
                                            <li><a href='!#'>자주하는 질문</a></li>
                                            <li><a href='!#'>1:1 문의</a></li>
                                            <li><a href='!#'>대량주문 문의</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </aside>
                    </div>
                </div>
            </div>
            <div className='row2'>
                <div className='container'>
                    <div className='content'>
                        <div className='left'>
                            <h1 className='header-logo'>
                                <img alt="logo" src="./images/main/logo.svg" />
                                <a  onClick={onClickMain}  href='!#'>마켓컬리</a>
                            </h1>
                            <i>|</i>
                            <a onClick={onClickMain}  href='!#'>뷰티컬리</a>
                        </div>
                        <div className='center'>
                            <input name='headerSearch' id='headerSearch' placeholder='검색어를 입력해주세요' />
                        </div>
                        <div className='right'>
                            <span>
                                <a href='!#'><img alt="logo" src="./images/main/icon_delivery.svg" /></a>
                                <a href='!#'><img alt="logo" src="./images/main/icon_heart.svg" /></a>
                                <a href='!#'><img alt="logo" src="./images/main/icon_cart.svg" /></a>
                            </span>					
                        </div>
                    </div>
                </div>
            </div>
            <div className='row3'>
                <div className='container'>
                    <div className='content'>
                        <div className='left'>
                            <a href='!#'>
                                <img src='./images/main/icon_3bar.svg' alt='' />
                                <strong>카테고리</strong>
                            </a>
                        </div>
                        <div className='center'>
                            <nav>
                                <ul>
                                    <li><a onClick={onClickSub1}  href='!#' className='main-btn'>신상품</a></li>
                                    <li><a onClick={onClickSub2}  href='!#' className='main-btn'>베스트</a></li>
                                    <li><a onClick={onClickSub3}  href='!#' className='main-btn'>알뜰상품</a></li>
                                    <li><a onClick={onClickSub4}  href='!#' className='main-btn'>특가/혜택</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className='right'>
                            <span>
                                <strong>샛별·하루</strong>
                                <em>배송안내</em>
                            </span>
                        </div>
                    </div>
                </div>	
            </div>
        </header> 
    )
}
