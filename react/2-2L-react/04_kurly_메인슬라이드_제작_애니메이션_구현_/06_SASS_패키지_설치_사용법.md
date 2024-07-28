# SASS 패키지 설치 사용법

1. SASS 패키지 설치
   - 사스 설치
   - 사스 로더 설치
   ```JS
      npm i sass   
      npm i sass-loader   
   ```

   - 한번에 설치하기
   ```JS
      npm i sass  sass-loader   
   ```

2. SCSS 스타일 생성하여 지정하기

  ```JSX 
      [scss]
      HeaderComponent.scss
      MainComponent.scss
         Section1Component.scss
         Section2Component.scss
         Section3Component.scss
      FooterComponent.scss
   ```

3. SCSS 스타일 컴포넌트에 가져오기(임포트)
  ```JSX 
      import 'HeaderComponent.scss';
      
   ```
