import React from 'react';
import './scss/SectionPublicComponent.scss';
import './scss/Section2Component.scss';
import axios from 'axios';


export default function Section2Component(props) {
    const slideWrap = React.useRef(); // 슬라이드 선택자    

    const [state, setState] = React.useState({
        타이틀1: '',
        타이틀2: '',
        상품:[],
        cnt:0
        
    });

    React.useEffect(()=>{
        axios({
            url:'./data/section2.json',
            method:'GET'
        })
        .then((res)=>{
            if(res.state===200){
                console.log(res)
                console.log(res.data)
                setState({
                    ...state,
                    타이틀1:res.data.타이틀1,
                    타이틀2:res.data.타이틀2,
                    상품:res.data.상품
                })
            }
        })
        .catch(err =>{
            console.log(err);
        });
    },[]);

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

        // 애니메이션 구현 다음 슬라이드 구현
    // 언제? cnt 가 증가로 변경되면 애니메이션 구현
    // 리액트에서 제공하는 함수를 훅이라한다.
    React.useEffect(()=>{
            slideWrap.current.style.transition = 'all 0.3s ease-in-out';
            slideWrap.current.style.left = `${-100 * state.cnt}%`;
        }
        // 선택자 slideWrap -100% 씩

    }, [state.cnt]) //[]의존성배열, 상태변수 값 cnt가 변경되면 => 유즈 이펙트를 실행

    return (
        <section id='section2' className='section'>
            <div className="container">
                <div className="title">
                    <h2>{state.타이틀1}</h2>
                    <h4>{(item.정가.toLocalString('ko-KR'))}원</h4>
                </div>
                <div className="content">
                    <div className="slide-container">
                        <div className="slide-view">
                            <ul className="slide-wrap">
                                {
                                    state.상품.map(()=>{
                                        return (
                                            <li className="slide slide1">
                                            <a href="">
                                                <div className="img-box">
                                                    <img src={`./images/main/sec02/${item.이미지}`} alt="" />
                                                </div>
                                                <div className="cart-box">
                                                    <span></span>
                                                </div>
                                                <div className="contents-box">
                                                    <ul>
                                                        <li><h3>{item.상품명}</h3></li>
                                                        <li><h4>9,900 원</h4></li>
                                                            <li>
                                                                <h5>
                                                                    <em>{Math.round (item.할인률)}%</em>
                                                                    <strong>{itme.정가}*{1-itme.할인율}원</strong>
                                                                </h5>
                                                            </li>
                                                        <li>
                                                            <h6>
        
                                                                <span></span>
                                                            </h6>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </a>
                                        </li>
                                        )
                                    })
                                }

                            </ul>
                        </div>
                        <button onClick={onClickNext}  className={`next-slide-btn ${state.isOn?'on':''}`}><img src="./images/main/sec01/icon_gray_circle.svg" alt="" />
                            <img class="arrow-right-btn" src="./images/main/sec02/" alt="" />
                        </button>
                        <button onClick={onClickPrev}  className={`prev-slide-btn ${state.isOn?'on':''}`}><img src="./images/main/sec01/icon_gray_circle.svg" alt="" />

                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}