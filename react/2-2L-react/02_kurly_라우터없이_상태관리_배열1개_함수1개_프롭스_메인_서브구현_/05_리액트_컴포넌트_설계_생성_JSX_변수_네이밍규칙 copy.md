#  리액트 컴포넌트설계

1. 컴포넌트설계

   [src]       
   WrapComponent.jsx
   [wrap]
               HeaderComponent.jsx
               MainComponent.jsx
               [main]
                     Section1Component.jsx
                     Section2Component.jsx
                     Section3Component.jsx
                     :
               FooterComponent.jsx

                
2. 리액트 컴포넌트 생성 규칙 & VS Code 확장프로그램 추가하기
   2-1. 네이밍 규칙 : 파스칼 케이스 기법  
      예]  SubImages      
      - 첫글자대문자 중간단어첫글자 대문자

   2-2. VS Code 확장프로그램 추가하기
      - React Extension Pack :  컴포넌트제작 자동완성 기능

   2-3. 함수형 컴포넌트 자동완성 
      - HeaderComponent.jsx
        컴포넌트 파일 생성하고
        컴포넌트 안에서 rsf 입력 엔터 => 컴포넌트 코딩 자동 완성
      
   2-4. 파일명, 폴더명 : 네이밍 규칙 => 팟홀케이스 기법
      중간첫글자앞에 언더바 사용
      예]  [section1_images]
      예]  [image_sub]

   2-5. 자바스크립트 변수명, 아이디 네이밍 규칙 => 카멜케이스 기법   
      중간첫글자 대문자
      예]  const section1Images = 'abcd.jpg';
      예]  const imageSub = 'xyz.jpg';

   2-6. 클래스명 : 네이밍 규칙 => 스네이크 케이스 기법
      예]  section1-images
      예]  image-sub



3. 리액트 JSX 

   ```JSX

      <br />
      <img ... />
      <svg  stroke-width =>  strokeWidth></svg>
      <p style={{width:'100px', height:'100px'}}>

   ```