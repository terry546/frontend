import React from 'react';
import './scss/SectionPublicComponent.scss';
import './scss/Section1Component.scss';

export default function Section1Component(props) {

    const slideWrap = React.useRef(); // 슬라이드 선택자    
  
    const [state, setState] = React.useState({
        cnt: 0,
        n: 24,
        isOn: false,
        next: true
    });

    // 다음 카운트 함수
    const nextCount=()=>{
        setState({
            ...state,
            cnt:state.cnt + 1
        })
    }
    // 다음 카운트 함수
    const preCount=()=>{
        setState({
            ...state,
            cnt:state.cnt - 1
        })
    }

    // 자동 타이머
    React.useEffect(() => {

        // 상태변수 isOn false이면 자동 타이머가 동작하고
        // 상태변수 isOn true이면 자동 타이머가 동작안함
        if(!state.isOn === false){
            // 4초 간격으로 자동타이머 실행
            // 메모리에 자동타이머가 인덱스번호가 할당되어 실행된다.
            const setId = setInterval(()=>{
                if(state.next===true){
                    nextCount();
                }
                else{
                    preCount();
                }
            }, 3000);
            return ()=> clearInterval(setId); // 즉시 삭제 버블링 제거
            console.log(setId); // 할당된 메모리 인덱스에 저장된 타이머 내용을 삭제하고 다시 할당
        }
    },[state]) //상태변수 cnt가 변경되면 실행;


    // 다음 카운트
    const onClickNext=(e)=>{
        e.preventDefault();
        // 1. 다음슬라이드 이동 실행
        nextCount();
        // 비동기처리
        // 2. 상태변수 변경 처리
        setState({...state, next:true})    
    }

    // 이전 카운트
    const onClickPrev=(e)=>{
        e.preventDefault();
        preCount();
        setState({...state, next:false})    
    }

    


    // 애니메이션 구현 다음 슬라이드 구현
    // 언제? cnt 가 증가로 변경되면 애니메이션 구현
    // 리액트에서 제공하는 함수를 훅이라한다.
    React.useEffect(()=>{
        //카운트가 24보다크면 슬라이드를 만나면 리턴 한다.
        if(state.cnt>state.n){
            slideWrap.current.style.transition = 'all 0s ease-in-out';
            // transition이 0s이 때문에 순간이동 효과처럼 보인다.
            slideWrap.current.style.left = `${-100 * state.cnt}%`;
            // state.cnt => 상태변 값을 초기화
            setState({ ...state, cnt:1 });
        }else if(state.cnt<0){
            slideWrap.current.style.transition = 'all 0s ease-in-out';
            // transition이 0s이 때문에 순간이동 효과처럼 보인다.
            slideWrap.current.style.left = `${-100 * state.cnt}%`;
            // state.cnt => 상태변 값을 초기화
            setState({ ...state, cnt: state.n-1 }); //마지막 이전으로 셋팅
        }
        else{
            slideWrap.current.style.transition = 'all 0.3s ease-in-out';
            slideWrap.current.style.left = `${-100 * state.cnt}%`;
        }
        // 선택자 slideWrap -100% 씩

    }, [state.cnt]) //[]의존성배열, 상태변수 값 cnt가 변경되면 => 유즈 이펙트를 실행

    // 슬라이드 컨테이너 마우스 오버 이벤트 onMouseIn
    const onMouseEnterContiner=()=>{
        setState({...state, isOn:true})
    }

    // 슬라이드 컨테이너 마우스 아웃 이벤트 onMouseOut
    const onMouseLeaveContiner=()=>{
        setState({...state, isOn:false})
    }

    return (
        <section id='section1' className='section'>
            <div className="slide-container" onMouseEnter= {onMouseEnterContiner} onMouseLeaveContiner ={onMouseLeaveContiner}>
                <div className="slide-view">
                    <ul ref={slideWrap} className="slide-wrap">
                        <li className="slide slide24"><a href="!#"><img src="./images/main/sec01/sec01_slide_24.png" alt="" /></a></li>
                        <li className="slide slide01"><a href="!#"><img src="./images/main/sec01/sec01_slide_01.jpg" alt="" /></a></li>
                        <li className="slide slide02"><a href="!#"><img src="./images/main/sec01/sec01_slide_02.png" alt="" /></a></li>
                        <li className="slide slide03"><a href="!#"><img src="./images/main/sec01/sec01_slide_03.png" alt="" /></a></li>
                        <li className="slide slide04"><a href="!#"><img src="./images/main/sec01/sec01_slide_04.jpg" alt="" /></a></li>
                        <li className="slide slide05"><a href="!#"><img src="./images/main/sec01/sec01_slide_05.jpg" alt="" /></a></li>
                        <li className="slide slide06"><a href="!#"><img src="./images/main/sec01/sec01_slide_06.png" alt="" /></a></li>
                        <li className="slide slide07"><a href="!#"><img src="./images/main/sec01/sec01_slide_07.jpg" alt="" /></a></li>
                        <li className="slide slide08"><a href="!#"><img src="./images/main/sec01/sec01_slide_08.jpg" alt="" /></a></li>
                        <li className="slide slide09"><a href="!#"><img src="./images/main/sec01/sec01_slide_09.jpg" alt="" /></a></li>
                        <li className="slide slide10"><a href="!#"><img src="./images/main/sec01/sec01_slide_10.jpg" alt="" /></a></li>
                        <li className="slide slide11"><a href="!#"><img src="./images/main/sec01/sec01_slide_11.jpg" alt="" /></a></li>
                        <li className="slide slide12"><a href="!#"><img src="./images/main/sec01/sec01_slide_12.jpg" alt="" /></a></li>
                        <li className="slide slide13"><a href="!#"><img src="./images/main/sec01/sec01_slide_13.png" alt="" /></a></li>
                        <li className="slide slide14"><a href="!#"><img src="./images/main/sec01/sec01_slide_14.jpg" alt="" /></a></li>
                        <li className="slide slide15"><a href="!#"><img src="./images/main/sec01/sec01_slide_15.jpg" alt="" /></a></li>
                        <li className="slide slide16"><a href="!#"><img src="./images/main/sec01/sec01_slide_16.jpg" alt="" /></a></li>
                        <li className="slide slide17"><a href="!#"><img src="./images/main/sec01/sec01_slide_17.jpg" alt="" /></a></li>
                        <li className="slide slide18"><a href="!#"><img src="./images/main/sec01/sec01_slide_18.jpg" alt="" /></a></li>
                        <li className="slide slide19"><a href="!#"><img src="./images/main/sec01/sec01_slide_19.jpg" alt="" /></a></li>
                        <li className="slide slide20"><a href="!#"><img src="./images/main/sec01/sec01_slide_20.jpg" alt="" /></a></li>
                        <li className="slide slide21"><a href="!#"><img src="./images/main/sec01/sec01_slide_21.jpg" alt="" /></a></li>
                        <li className="slide slide22"><a href="!#"><img src="./images/main/sec01/sec01_slide_22.jpg" alt="" /></a></li>
                        <li className="slide slide23"><a href="!#"><img src="./images/main/sec01/sec01_slide_23.jpg" alt="" /></a></li>
                        <li className="slide slide24"><a href="!#"><img src="./images/main/sec01/sec01_slide_24.png" alt="" /></a></li>
                        <li className="slide slide01"><a href="!#"><img src="./images/main/sec01/sec01_slide_01.jpg" alt="" /></a></li>
                    </ul>
                </div>

                <button onClick={onClickNext}  className={`next-slide-btn ${state.isOn?'on':''}`}><img src="./images/main/sec01/icon_gray_circle.svg" alt="" /></button>
                <button onClick={onClickPrev}  className={`prev-slide-btn ${state.isOn?'on':''}`}><img src="./images/main/sec01/icon_gray_circle.svg" alt="" /></button>
            </div>
        </section>
    );
}