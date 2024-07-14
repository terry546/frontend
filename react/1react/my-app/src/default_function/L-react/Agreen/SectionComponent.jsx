import React from 'react';
import './SectionComponent.scss';


export default function SectionComponent() {

    // 상태(State)  관리(Management)
    // [1] 리액트 상태관리
    // [2] 리덕스 상태관리

    // 1. 리액트 상태관리 선언
    const [state, setState] = React.useState({
        주소록: {
            번호:1,
            이름:'문선종',
            휴대폰:'010-7942-5305',
            주소: '서울시 서초구 서초2로 서초동 서초빌딩 1303호'
        },
       '4학년 1반 주소록': [
            {번호:1,이름:'문선종',휴대폰:'010-7942-5305',주소: '서울시 서초구 서초2로 서초동 서초빌딩 1303호'},
            {번호:2,이름:'조지현',휴대폰:'010-8999-1305',주소: '서울시 종로구 종로3로 서초동 서초빌딩 303호'},
            {번호:3,이름:'정지현',휴대폰:'010-2344-4305',주소: '서울시 중구   가좌7로 서초동 서초빌딩 12호'},
            {번호:4,이름:'홍우현',휴대폰:'010-6782-5415',주소: '서울시 송파구 송파2로 서초동 서초빌딩 3호'},
            {번호:5,이름:'송영석',휴대폰:'010-1234-8399',주소: '서울시 강남구 강남2로 서초동 서초빌딩 99호'}
       ]
    });
    const [msg, setMsg] = React.useState('점심은 간단하게 든든하게 맛있게 즐겁세 먹자!');
    const [count, setCount] = React.useState(0);
    const [isOn, setIsOn] = React.useState(false);


    // state Object 안에 있는 키를 출력    
    console.log(  '=== state Object 안에 있는 키들(keys)을 출력 ==='   );
    console.log(  Object.keys(state)   );

    console.log(  '=== state Object 안에 있는 값들(values)을 출력 ==='   );
    console.log(  Object.values(state)   );


    // 토글버튼 클릭 이벤트
    const onClickToggle=(e)=>{
        e.preventDefault();
        // 세터함수 이용 isOn : false => true 변경
        // setIsOn(true);   // 단순변경
        setIsOn( !isOn );   // not 토글 => true 이면 false,  false이면 true
    }

    // 카운트 증가 버튼 클릭 이벤트
    const onClickIncrement=(e)=>{
        e.preventDefault(); 
        setCount( count + 1 );
    }

    // 카운트 감소 버튼 클릭 이벤트
    const onClickDecrement=(e)=>{
        e.preventDefault(); 
        setCount( count - 1 );
    }

    //  카운트 변수값이 0보다 작으면 => 0 으로 초기화
    //  count 변수 값을 감시하는 훅 사용 유즈이펙트
    React.useEffect(()=>{
        if(count<0){
            setCount(0);
        }
        return;
    },[count]);



    return (
        <section id="section3">
            <div className="container">
                <div className="title">
                         <h2>섹션3</h2>
                         <h4>Object & Array & 리액트 상태관리</h4>
                </div>
                <div className="content">
                        <h2>주소록 바인딩하기</h2>
                        <p>번호 : {state['주소록']['번호']}</p>
                        <p>이름 : {state['주소록']['이름']}</p>
                        <p>휴대폰 : {state.주소록.휴대폰}</p>
                        <p>주소 : {state.주소록.주소}</p>

                        <hr />
                        <h2>state 상태변수 addr 배열값 바인딩하기</h2>
                        <ul>
                            {
                                  state['4학년 1반 주소록'].map((item)=>{
                                        return(
                                                <li key={item.번호}>
                                                        <span>{item.번호}</span>
                                                        <span>{item.이름}</span>
                                                        <span>{item.휴대폰}</span>
                                                        <span>{item.주소}</span>
                                                </li>
                                        )
                                  })  

                            }
                        </ul>

                         <hr />
                         <h2>{msg}</h2>       
                        
                        <hr />
                        <h2>{count}</h2>       
                        <button  onClick={onClickIncrement}>카운트 증가(Increment 인크리먼트) 버튼(+)</button>
                        <button  onClick={onClickDecrement}>카운트 감소(Decrement 디크리먼트) 버튼(-)</button>

                        <hr />                                
                         <h2>{isOn===true ? 'true' : 'false' }</h2>       
                         <h2>{isOn===true ? '이미지보임' : '이미지안보임' }</h2>                                
                         <h2 className={`red${isOn===true?' on':''}`}>논리 부울 변수이용 스타일 적용가능</h2>       
                          { 
                            isOn &&  <img style={{width:'300px'}}  src="./img/header/3df368c8-e124-4d06-a9e9-af4c10d01b53.jpeg" alt="" />
                           }
                         <button  onClick={onClickToggle}>isOn 토글 버튼</button>


                         <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />       
                         <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />       
                </div>
            </div>
        </section>
    );
}