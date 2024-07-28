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
    // const [게터변수(getter), 세터함수(setter게터변수를 변경하는 함수)] = React.useState(초기값);
    const [main, setMatin] = React.useState(true);
    const [sub1, setSub1] = React.useState(false);
    const [sub2, setSub2] = React.useState(false);
    const [sub3, setSub3] = React.useState(false);
    const [sub4, setSub4] = React.useState(false);
    const [sub5, setSub5] = React.useState(false);
    const [sub6, setSub6] = React.useState(false);
    const [sub7, setSub7] = React.useState(false);    
    const [sub, setSub] = React.useState([false,false,false,false,false,false,false]);

    const [state, setState] = React.useState({
        main: true,
        sub1: false,
        sub2: false,
        sub3: false,
        sub4: false,
        sub5: false,
        sub6: false,
        sub7: false,
        sub: [false,false,false,false,false,false,false],

        // 8개 메뉴 8개 함수 => 1개의 메뉴 배열, 1개의 함수
        // 메인 + 서브 7 = 총 8개 메뉴
        menu: [true, false,false,false,false,false,false,false]
    });


  
    // 0-1. 메인 인트로 페이지가 보이도록 하는 함수
    // 0-2. mainSetter() 함수를 헤더컴포넌트에게 프롭스로 내려준다.
    const mainSetter=()=>{
        setMatin(true);        
        setSub1(false);
        setSub2(false);
        setSub3(false);
        setSub4(false);
        setSub5(false);
        setSub6(false);
        setSub7(false);   
        
        // menu[8] => 메뉴별 변경하는 코딩
        // 초기화 => 단 1개의 메뉴만 true 나머지 모두 false
        // menu = [false,false,false,false,false,false,false,false];
        let menu = Array(8).fill(false);  // 배열 채우기(false)
        menu[0] = true;  // 메인메뉴 배열 첫번째 값을 true로 변경
        setState({
                ...state, 
                menu: menu
        })
    }
    // 1-1. 서브1 신상품 페이지가 보이도록 하는 함수
    // 1-2. sub1Setter() 함수를 헤더컴포넌트에게 프롭스로 내려준다.
    const sub1Setter=()=>{
        setSub1(true);        
        setMatin(false);
        setSub2(false);
        setSub3(false);
        setSub4(false);
        setSub5(false);
        setSub6(false);
        setSub7(false);   
        
        let menu = Array(8).fill(false); // 배열 채우기(false)
        menu[1] = true;  // 메인메뉴 배열 첫번째 값을 true로 변경
        setState({
                ...state, 
                menu: menu
        })

    }

    // 2-1. 서브1 신상품 페이지가 보이도록 하는 함수
    // 2-2. sub1Setter() 함수를 헤더컴포넌트에게 프롭스로 내려준다.
    const sub2Setter=()=>{
        setSub2(true);        
        setMatin(false);
        setSub1(false);
        setSub3(false);
        setSub4(false);
        setSub5(false);
        setSub6(false);
        setSub7(false);       
        
        let menu = Array(8).fill(false);
        menu[2] = true;
        setState({
                ...state, 
                menu: menu
        })
    }

    // 3-1. 서브3 신상품 페이지가 보이도록 하는 함수
    // 3-2. sub1Setter() 함수를 헤더컴포넌트에게 프롭스로 내려준다.
    const sub3Setter=()=>{
        setSub3(true);        
        setMatin(false);
        setSub1(false);
        setSub2(false);
        setSub4(false);
        setSub5(false);
        setSub6(false);
        setSub7(false);     

        let menu = Array(8).fill(false);
        menu[3] = true;
        setState({
                ...state, 
                menu: menu
        })   
    }

    // 4-1. 서브4 신상품 페이지가 보이도록 하는 함수
    // 4-2. sub1Setter() 함수를 헤더컴포넌트에게 프롭스로 내려준다.
    const sub4Setter=()=>{
        setSub4(true);        
        setMatin(false);
        setSub1(false);
        setSub2(false);
        setSub3(false);
        setSub5(false);
        setSub6(false);
        setSub7(false);      
        
        let menu = Array(8).fill(false);
        menu[4] = true;
        setState({
                ...state, 
                menu: menu
        })   
    }

    // 5-1. 서브5 신상품 페이지가 보이도록 하는 함수
    // 5-2. sub5Setter() 함수를 헤더컴포넌트에게 프롭스로 내려준다.
    const sub5Setter=()=>{
        setSub5(true);        
        setMatin(false);
        setSub1(false);
        setSub2(false);
        setSub3(false);
        setSub4(false);
        setSub6(false);
        setSub7(false);    

        let menu = Array(8).fill(false);
        menu[5] = true;
        setState({
                ...state, 
                menu: menu
        })      
    }

    // 6-1. 서브6 신상품 페이지가 보이도록 하는 함수
    // 6-2. sub6Setter() 함수를 헤더컴포넌트에게 프롭스로 내려준다.
    const sub6Setter=()=>{
        setSub6(true);        
        setMatin(false);
        setSub1(false);
        setSub2(false);
        setSub3(false);
        setSub4(false);
        setSub5(false);
        setSub7(false);       
        
        let menu = Array(8).fill(false);
        menu[6] = true;
        setState({
                ...state, 
                menu: menu
        })   
    }
    // 7-1. 서브7 신상품 페이지가 보이도록 하는 함수
    // 7-2. sub6Setter() 함수를 헤더컴포넌트에게 프롭스로 내려준다.
    const sub7Setter=()=>{
        setSub7(true);        
        setMatin(false);
        setSub1(false);
        setSub2(false);
        setSub3(false);
        setSub4(false);
        setSub5(false);
        setSub6(false);       
        
        let menu = Array(8).fill(false);
        menu[7] = true;
        setState({
                ...state, 
                menu: menu
        })   
    }

    return(
            <div id='wrap'>
                <HeaderComponent 
                        mainSetter={mainSetter}  
                        sub1Setter={sub1Setter}
                        sub2Setter={sub2Setter}
                        sub3Setter={sub3Setter}
                        sub4Setter={sub4Setter}
                        sub5Setter={sub5Setter}
                        sub6Setter={sub6Setter}
                        sub7Setter={sub7Setter}
                />
                        {main && <MainComponent />}
                        {sub1 && <Sub1Component />}
                        {sub2 && <Sub2Component />}
                        {sub3 && <Sub3Component />}
                        {sub4 && <Sub4Component />}
                        {sub5 && <Sub5Component />}
                        {sub6 && <Sub6Component />}
                        {sub7 && <Sub7Component />}
                <FooterComponent />     
            </div>
    )
}

