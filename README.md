# React Blog
멋쟁이사자처럼 프론트엔드 스쿨 과제물입니다. HTML, CSS로 짜여진 블로그 페이지를 리액트로 컴포넌트화 하였습니다.  

## 기능 구현
1. axios를 사용하여 로컬 json파일에서 데이터 fetch 구현
2. isLoggedIn 상태에 따른 로그인/로그아웃 토글버튼 구현
3. react-router-dom을 사용하여 라우터 구현
4. useParams 훅을 사용하여 각 포스트 id와 일치하는 뷰페이지 구현

### 이슈 해결
- 'PostView' 컴포넌트에서 하드코딩된 created 데이터를 toLocaleDateString() 메소드를 사용하여 데이터 객체 형식으로 변환. 포스트 날짜 포맷에 맞추어 변경하였습니다.
