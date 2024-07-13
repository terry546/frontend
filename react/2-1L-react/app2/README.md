반갑습니다.
훈련교사 문선종 입니다.

# 네이버 마이박스 공유 => 공유수락
교사 문선종
010-7942-5305

카톡이나 문자로 보내주세요^^
이름, 
휴대폰번호 
교사에게 하고싶은말....
부탁하고 싶은말...

학습자료
강의산출물
강의 줌녹화영상.mp4


1. 닷홈 회원가입 웹호스팅 신청
    1-1 닷홈 로그인 마이닷홈
    1-2 닷홈 로그인 마이닷홈  관리자 페이지 로그인
    => MySQL 관리(UTF-8)	moonjong.dothome.co.kr/myadmin
        - 데이터베이스 서버
        - 웹 서버

2. FTP 설치
    2-1 사이트맵 설정 => 새그룹 => 추가 => 도메인, 아이디, 비번 
    2-2 접속하기

3. 노드제이에스 설치, node.js

4. 비주얼스튜디오코드(VB CODE) 설치 환경설정
   4-1. CTRL + , => zoom => 줌인, 줌아웃 CTRL

5. git 설치  gitscm 리눅스 터미널 우분투
   5-1. 터미널 사용 CTRL + `(빽틱)
   5-2. 목록 보기  
```JS   
          ls    
          ls -la 
```
    5-3. 화면청소

```JS    
          clear
```

6. 리액트 설치 => Create React App => create-react-app
   6-1. 설치   

```JS   
    npm install create-react-app
    npm install -g create-react-app
    npm i create-react-app
    npm i -g create-react-app
```
   6-2. 버전확인
```JS
   create-react-app --version
   node --version
```
7. 리액트 프로젝트(포트폴리오)
   7-1. 프로젝트 폴더 생성
   7-2. 프로젝트 폴더를 작업폴더로 설정하기
   7-3. 프로젝트 생성 
```JS
          npx  create-react-app  프로젝트이름
          npx  create-react-app  app
```
   7-4. app 
   7-5. cd app    
   7-6. npm start


8. 리액트 프로젝트 구조

```JS
APP
    [node_modues]
    [public]
    [src]
    .gitignore
    package-lock.json
    package.json
    README.md
```    
1. node_modules  노드 모듈 : 리액트 실행에 도움이 되는 파일들
        - 익스포트 export : 모듈(module) 내보내기
        - 임포트 import : 모듈(module) 가져오기  

    2. public 퍼블릭 : 정적 파일 요소들
       - [css] : reset.css, fonts.css, style.css
       - [img] : images
       - index.html  => SPA(한페이지로 구성)

    3. src 소스 : 동적 파일 요소들
       - index.js
       3-1 컴포넌트설계
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

9. 리액트 컴포넌트 생성
    - 네이밍 규칙 : 파스칼 케이스 기법
      예]  SubImages
      첫글자대문자 중간단어첫글자 대문자
    - 확장프로그램 추가   
    React Extension Pack :  컴포넌트제작 자동완성 기능

    - rsf : 함수형 컴포넌트 자동완성  

    - 파일명, 폴더명 : 팟홀케이스 기법
      중간첫글자앞에 언더바 사용
      예]  [section1_images]
      예]  [image_sub]

   - 자바스크립트 변수명, 아이디 네이밍 규칙 : 카멜케이스 기법   
     중간첫글자 대문자
      예]  const section1Images = 'abcd.jpg';
      예]  const imageSub = 'xyz.jpg';

   - 클래스명  : 스네이크 케이스 기법
      예]  section1-images
      예]  image-sub


10. 리액트 JSX 
<br />
<img ... />
<svg  stroke-width =>  strokeWidth></svg>
<p style={{width:'100px', height:'100px'}}>

11. SASS 패키지 설치 사용법
```JS
npm i sass   
npm i sass-loader   
```

```JS
npm i sass  sass-loader   
```

12. 헤더 스타일 sass로 생성하여 지정하기
   [scss]
   HeaderComponent.scss
   MainComponent.scss
      Section1Component.scss
      Section2Component.scss
      Section3Component.scss
   FooterComponent.scss


7. 리액트 상태관리


8. 리액트 버튼클릭 


9. 객체와 배열 다루기


10. 객체, 배열 응용하기






# node module 생성

```JS
    npm install

```

```JS

    npm i

```

# 리액트 프로젝트 실행하기 => 프로젝트로 이동 
   

```JS
cd app
npm start

```
# 주소창 
    - 도메인: 로컬호스트:포트번호
       http://localhost:3000

    - 아이피 어드레스:포트번호   
    - IP Address:포트번호   
      http://127.0.0.1:3000

    - 아이피 어드레스:포트번호   
    - IP Address:포트번호   
      http://192.168.136.90:3000

# 윈도우 + R
   - 실행창 => cmd
   - 터미널 => ipconfig
   
   이더넷 어댑터 이더넷:

   연결별 DNS 접미사. . . . :
   링크-로컬 IPv6 주소 . . . . : fe80::311d:480d:b95b:28bf%10
   IPv4 주소 . . . . . . . . . : 192.168.136.90
   서브넷 마스크 . . . . . . . : 255.255.255.0
   기본 게이트웨이 . . . . . . : 192.168.136.1

    http://192.168.136.90:3000


# 네트워크공유
   - 교사용 공용
   파일탐색창
   주소 => \\192.168.136.90
   
   - 파일탐색창
   즐겨찾기 주소항에 => \\192.168.136.90





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
