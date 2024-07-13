# 카운트 감소 0 보다 작으며 0으로 세팅(초기화)
상태변수 변경값을 감지하는 이벤트 훅(Hook)유즈이펙트(useEffect())
```JS
React.useEffect(()=>{
    if(count<0){
        setCount(0);
    }
},[count]);
```

# 카운트 증가 버튼 클릭 이벤트
```JS
const onClickincrement=()=>{
    e.preventDefault();
    setCount(count + 1);
}
```

# 카운트 감소 버튼 클릭 이벤트
```JS
const onClickDecrement=(event)=>{
    e.preventDefault();
    setCount(count - 1);
}
```

#리액트 상태 부울 변수 조건부 연산자  &&
``` JSX

# 리액트 스타일 SASS 적용하기
Section3Component.scss

- 탬플릿 리터럴 표기법
<h2 className={`red${isOn===true?' on':"}`}>
<h2 className={`red${isOn?`on':"}`}>

# 리액트 JSX(HTML) Array 상태 변수 값 바인딩하기
- 반복문 : map() 함수 권장
- 반복문 필터링 : filter() 함수 권장
- for()문 forEach()문 while()문 => JSX 사용시는 즉시표현함수식 사용하면 가능

1. 맵 함수 기본 문법

항목 아이템 item 또는 필드 field
인덱스 색인번호 index 약어 idx
배열 어레이 Array 약어 arr

map((객체, 인덱스, 배열)=> {
    return(
        <div key={"유일성의 키값을 사용"}>
            // 한개의 묶으로 내용을 출력
        </div>
    )
})

map((item, 인덱스, 배열)=> {
    return(
        <> 빈태그 => <플래그먼트>
            <li key={중복}>
                //한개의 묶으로 내용을 출력
            </li>
            <li>

            </li>
        </>
    )
    출력    
})

2. 맵 함수
map(()=>{
    return() 문 필요 //중괄호 안에는 반드시 리턴문 필요
})
3. 맵 함수
map(()=>) => 중괄호 없으면 즉시 리턴 발생




# 리액트 JSX(HTML) Object 상태 변수 값 바인딩하기
```JSX
    
    <div className="content">
        <h2>주소록 바인딩하기</h2>
        <p>번호 : {state.주소록.번호}</p>
        <p>이름 : {state.주소록.이름}</p>
        <p>휴대폰 : {state.주소록.휴대폰}</p>
        <p>번호주소 {state.주소록.주소}</p>
    </div>
```

# 리액트 Object(객체) & Array(배열)
1. 리액트 상태변수 => React.useState()

# 버튼클릭 이벤트

# Object(객체) & Array(배열)
MVC 패턴
모델 Model => 외부자료 데이터베이스, JSON, XML, TXT
뷰 View => JSX 
컨트롤러 Controller => 알고리즘, MAP, FOR,......, 함수

1. Object 오브젝트 객체{}
    주소록 : 현실세계의 객체를 생성
    주소록 => 오브젝트 이름
    번호 => 속성 키(key)
    이름 => 속성 키(key)
    전화번호 => 속성 키(key)
    주소 => 속성 키(key)

    키(key): 값(value)
let => 가변변수 변경가능한변수 선언 할 때 사용
const => 불변변수 변경불가능한변수 선언 할떄 사용
```JS
'1명' 데이터
let 주소록 = {
    번호 : 1,
    이름 : "가나다 String",
    전화번호 : "010-0000-0000",
    주소 : "서울시 서초구 서초2로 서초동 서초빌딩 1303호"
}

"여러명 데이터" => 배열 []
베열 [
    {},
    {},
    {}
    ]
let 주소록 = [
    {번호 : 1, 이름 : "가나다 String", 전화번호 : "010-0000-0000", 주소 : "서울시 서초구 서초2로 서초동 서초빌딩 1303호"}
    {번호 : 2, 이름 : "가나다 String", 전화번호 : "010-0000-0000", 주소 : "서울시 서초구 서초2로 서초동 서초빌딩 1303호"}
    {번호 : 3, 이름 : "가나다 String", 전화번호 : "010-0000-0000", 주소 : "서울시 서초구 서초2로 서초동 서초빌딩 1303호"}
    {번호 : 4, 이름 : "가나다 String", 전화번호 : "010-0000-0000", 주소 : "서울시 서초구 서초2로 서초동 서초빌딩 1303호"}
    {번호 : 5, 이름 : "가나다 String", 전화번호 : "010-0000-0000", 주소 : "서울시 서초구 서초2로 서초동 서초빌딩 1303호"}
]
```

```JSON
    "주소록" : {
    "번호" : 1,
    "이름" : "가나다 String",
    "전화번호" : "010-0000-0000",
    "주소" : "서울시 서초구 서초2로 서초동 서초빌딩 1303호"
}
```

2. Array 어레이 배열[]



#프로젝트 배포하기(빌드하기)
1. 빌드하기
1-1 package.json
``` JSON
:
 },
 "homepage" : "https://twoeyes.dothome.co.kr/week3_kurly"
}
```

1-2 터미널 gitBash
```JS
npm run build
```


배포할 홈페이지 주소
"homepage" : ""
https://twoeyes.dothome.co.kr/week3_kurly

2. 닷홈 가입 => FTP => 폴더이름(kurly) => 파일전송
배포 도메인 주소
twoeyes.dothome.co.kr
배포 폴더이름
week3_kurly



```JS
npm build

```

# 프로젝트 실행하기
```JS
    npm start
```

# node_modules 생성하기
```JS
npm i

```