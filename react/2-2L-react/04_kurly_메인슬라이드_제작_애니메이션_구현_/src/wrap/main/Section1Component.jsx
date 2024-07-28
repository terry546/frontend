import React from 'react';
import './scss/SectionPublicComponent.scss';
import './scss/Section1Component.scss';

export default function Section1Component(props) {

    const slideWrap = React.useRef(); // 슬라이드 선택자    
  
    const [state, setState] = React.useState({
        cnt: 0
    });

    // 다음 카운트
    const onClickNext=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            cnt: state.cnt + 1
        })
    }

    // 이전 카운트
    const onClickPrev=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            cnt: state.cnt - 1
        })
    }


    // 애니메이션 구현 다음 슬라이드 구현
    // 언제? cnt 가 증가로 변경되면 애니메이션 구현
    React.useEffect(()=>{
        // 선택자 slideWrap -100% 씩
        slideWrap.current.style.transition = 'all 0.6s ease-in-out';
        slideWrap.current.style.left = `${-100 * state.cnt}%`;
    }, [state.cnt])


    return (
        <section id='section1' className='section'>
            <div className="slide-container">
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

                <button onClick={onClickNext}  className='next-slide'><img src="./images/main/sec01/icon_gray_circle.svg" alt="" /></button>
                <button onClick={onClickPrev}  className='prev-slide'><img src="./images/main/sec01/icon_gray_circle.svg" alt="" /></button>
            </div>
        </section>
    );
}