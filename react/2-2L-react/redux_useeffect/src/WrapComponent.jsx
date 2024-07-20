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

    // 리액트에서 모든 변수는 상태관리 규칙에 따른다.
    // const [게터함수(getter), 세터함수(setter 게터변수를 변경하는 함수)] = React.useState(초기값);
    const [main, setMain] = React.useState(true);
    const [sub1, setSub1] = React.useState(false);
    const [sub2, setSub2] = React.useState(false);
    const [sub3, setSub3] = React.useState(false);
    const [sub4, setSub4] = React.useState(false);
    const [sub5, setSub5] = React.useState(false);
    const [sub6, setSub6] = React.useState(false);
    const [sub7, setSub7] = React.useState(false);
    
    const [sub, setSub] = React.useState([false,false,false,false,false,false,false]);

    const [state, setState] = React.useState({
        // 메인 + 서브7=총8개 메뉴
        menu:[true, false,false,false,false,false,false,false],
        // menu:Array(8).fill(false)
    });

    // 메인 인트로 페이지 컴포넌트를 보이게 함
    // 첫화면 나오면서 실행하는 useEffect();
    // menu 첫번째를 true로 설정
    React.useEffect(()=>{
        let menu= state.menu;
        menu[0]=true;
        setState({
            ...state,
            menu: menu
        })

    },[]);

    

    // 0-1. 서브1 신상품 페이지가 보이도록 하는 세터 함수
    // 0-2. sub1Setter() 함수를 헤더컴포넌트에게 프롭스로 내려준다.
    const mainSetter=()=>{
        let menu = Array().fill(false); //배열채우기
        menu[0] = true; // 메인메뉴 배열 첫번째 값을 true로 변경
        setState({
            ...state,
            menu: menu
        })
    }

    // 7-1. 서브1 신상품 페이지가 보이도록 하는 세터 함수
    // 7-2. sub1Setter() 함수를 헤더컴포넌트에게 프롭스로 내려준다.

    //메뉴1개(매개변수 인덱스번호)
    const menuSetter=(idx)=>{
        let menu = Array(8).fill(false); // 임시변수로 마음대로 변경하고 처리하고 그리고 마지막에 세터함수에 넣어준다.
        menu[idx] = true; // 메인메뉴 배열 첫번째 값을 true로 변경
        setState({
            ...state,
            menu: menu
        })
    }
    

    return(
            <div id='wrap'>
                <HeaderComponent 
                menuSetter={menuSetter}
                />
                    {state.menu[0] &&<MainComponent />}
                    {state.menu[1] &&<Sub1Component />}
                    {state.menu[2] &&<Sub2Component />}
                    {state.menu[3] &&<Sub3Component />}
                    {state.menu[4] &&<Sub4Component />}
                    {state.menu[5] &&<Sub5Component />}
                    {state.menu[6] &&<Sub6Component />}
                    {state.menu[7] &&<Sub7Component />}
                {<FooterComponent />}
            </div>
    )
}

