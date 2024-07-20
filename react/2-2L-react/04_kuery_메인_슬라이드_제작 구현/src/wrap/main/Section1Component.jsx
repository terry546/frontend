import React from 'react';
import './scss/SectionPublicComponent.scss';
import './scss/Section1Component.scss';



export default function Section1Component(props) {
  const slideWrap = React.useRef(()=>{
    //선택자 slideWrap - 100%씩
    slideWrap.current.style.transition= `all 0.3s ease-in-out`
    slideWrap.current.style.left= `${-100 * state.cnt}%`
  });
  console.log(slideWrap);
  const[state, setState] = React.useState({
    cnt: 0;
  })
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
        cnt: state.cnt +1
    })
  }

React.useEffect(()=> {
    // 선택자 slideWrap -100% 씩
},[state.cnt])


    return (
        <section id='section1' className='section'>
            <div className="slide-container">
                <div className="slide-view">
                    <ul className="slide-wrap"></ul>
                    <li className="slide slides24"><a href="!#"><img src="./images/main/sec01/sec01_slide_24.jpg" alt="" /></a></li>
                    <li className="slide slides01"><a href="!#"><img src="./images/main/sec01/sec01_slide_01.jpg" alt="" /></a></li>
                    <li className="slide slides02"><a href="!#"><img src="./images/main/sec01/sec01_slide_02.jpg" alt="" /></a></li>
                    <li className="slide slides03"><a href="!#"><img src="./images/main/sec01/sec01_slide_03.jpg" alt="" /></a></li>
                    <li className="slide slides04"><a href="!#"><img src="./images/main/sec01/sec01_slide_04.jpg" alt="" /></a></li>
                    <li className="slide slides05"><a href="!#"><img src="./images/main/sec01/sec01_slide_05.jpg" alt="" /></a></li>
                    <li className="slide slides06"><a href="!#"><img src="./images/main/sec01/sec01_slide_06.jpg" alt="" /></a></li>
                    <li className="slide slides07"><a href="!#"><img src="./images/main/sec01/sec01_slide_07.jpg" alt="" /></a></li>
                    <li className="slide slides08"><a href="!#"><img src="./images/main/sec01/sec01_slide_08.jpg" alt="" /></a></li>
                    <li className="slide slides09"><a href="!#"><img src="./images/main/sec01/sec01_slide_09.jpg" alt="" /></a></li>
                    <li className="slide slides10"><a href="!#"><img src="./images/main/sec01/sec01_slide_10.jpg" alt="" /></a></li>
                    <li className="slide slides11"><a href="!#"><img src="./images/main/sec01/sec01_slide_11.jpg" alt="" /></a></li>
                    <li className="slide slides12"><a href="!#"><img src="./images/main/sec01/sec01_slide_12.jpg" alt="" /></a></li>
                    <li className="slide slides13"><a href="!#"><img src="./images/main/sec01/sec01_slide_13.jpg" alt="" /></a></li>
                    <li className="slide slides14"><a href="!#"><img src="./images/main/sec01/sec01_slide_14.jpg" alt="" /></a></li>
                    <li className="slide slides15"><a href="!#"><img src="./images/main/sec01/sec01_slide_15.jpg" alt="" /></a></li>
                    <li className="slide slides16"><a href="!#"><img src="./images/main/sec01/sec01_slide_16.jpg" alt="" /></a></li>
                    <li className="slide slides17"><a href="!#"><img src="./images/main/sec01/sec01_slide_17.jpg" alt="" /></a></li>
                    <li className="slide slides18"><a href="!#"><img src="./images/main/sec01/sec01_slide_18.jpg" alt="" /></a></li>
                    <li className="slide slides19"><a href="!#"><img src="./images/main/sec01/sec01_slide_19.jpg" alt="" /></a></li>
                    <li className="slide slides20"><a href="!#"><img src="./images/main/sec01/sec01_slide_20.jpg" alt="" /></a></li>
                    <li className="slide slides21"><a href="!#"><img src="./images/main/sec01/sec01_slide_21.jpg" alt="" /></a></li>
                    <li className="slide slides22"><a href="!#"><img src="./images/main/sec01/sec01_slide_22.jpg" alt="" /></a></li>
                    <li className="slide slides23"><a href="!#"><img src="./images/main/sec01/sec01_slide_23.jpg" alt="" /></a></li>
                    <li className="slide slides01"><a href="!#"><img src="./images/main/sec01/sec01_slide_01.jpg" alt="" /></a></li>
                    
                </div>

                <button onClick={onClickNext}><img className='next-slide' img src="./images/main/sec01/icon_gray_cricle.svg"></button>
                <button onClick={onClickPrev}><img className='prev-slide' img src="./images/main/sec01/icon_gray_cricle.svg"> </button>
            </div>
        </section>
    );
}