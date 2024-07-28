import React from 'react';
import HeaderComponent from './wrap/HeaderComponent.jsx';
import MainComponent from './wrap/MainComponent.jsx';
import FooterComponent from './wrap/FooterComponent.jsx';
import Sub1Component from './wrap/sub/Sub1Component.jsx';
import Sub2Component from './wrap/sub/Sub2Component.jsx';
import Sub3Component from './wrap/sub/Sub3Component.jsx';
import Sub4Component from './wrap/sub/Sub4Component.jsx';
import Sub5Component from './wrap/sub/Sub5Component.jsx';
import Sub6Component from './wrap/sub/Sub6Component.jsx';
import Sub7Component from './wrap/sub/Sub7Component.jsx';

export  default function  WrapComponent () {

    const [state, setState] = React.useState({        
        menu:  Array(8).fill(false)
    });

    // 메인 인트로 페이지 컴포넌트를 보이게 함.
    // 첫화면 나오면서 실행하는 useEffect();
    // menu 첫번째를 true로 설정
    React.useEffect(()=>{
        let menu = state.menu;
        menu[0] =true;
        setState({
            ...state,
            menu: menu
        })
    },[]);



    // 메뉴1개(매개변수인덱스번호 index => idx => id => i) 
    // idx 8 개 (0 ~ 7)
    const menuSetter=(idx)=>{       
        let menu = Array(8).fill(false);   // 임시변수로 마음대로 변경하고 처리하고 그리고 마지막에 세터함수에 넣어준다.
        menu[idx] = true;
        setState({
                ...state, 
                menu: menu
        })   
    }

    return(
            <div id='wrap'>
                <HeaderComponent menuSetter = {menuSetter} />
                        {state.menu[0]  && <MainComponent />}
                        {state.menu[1]  && <Sub1Component />}
                        {state.menu[2]  && <Sub2Component />}
                        {state.menu[3]  && <Sub3Component />}
                        {state.menu[4]  && <Sub4Component />}
                        {state.menu[5]  && <Sub5Component />}
                        {state.menu[6]  && <Sub6Component />}
                        {state.menu[7]  && <Sub7Component />}
                <FooterComponent />     
            </div>
    )
}

