# React Blog
멋쟁이사자처럼 프론트엔드 스쿨 과제물입니다.  
HTML, CSS로 짜여진 블로그 페이지를 리액트로 컴포넌트화 하였습니다.  
</br>
## Link
https://react-blog-sia.web.app/
</br></br>
## 기능 구현
1. axios로 json파일에서 게시글 데이터를 받아와 출력
2. isLoggedIn 상태에 따른 로그인/로그아웃 토글버튼 구현</br>
![녹화_2022_09_26_15_55_35_261](https://user-images.githubusercontent.com/90305737/192212277-fa281e7c-af6c-416f-8138-6a32a546376b.gif)
3. react-router-dom을 사용하여 라우터 구현
4. useParams 훅을 사용하여 각 포스트 id와 일치하는 뷰페이지 구현</br>
<img src="https://user-images.githubusercontent.com/90305737/192212551-894f7943-fa5a-4f11-b38d-6f1305ab90ef.gif" width="400"/></br></br>

### 이슈 해결
- 'PostView' 컴포넌트에서 하드코딩된 created 데이터를 toLocaleDateString() 메소드를 사용하여 Date 객체 형식으로 변환. 포스트 날짜 포맷에 맞추어 변경하였습니다.</br>
```javascript
  useEffect(() => {
    if (data) {
      const newDate = data.created.replace(/\./g, "-");
      const options = {
        weekday: "long",
        month: "long",
        day: "numeric",
      };
      const formatDate = new Date(newDate)
        .toLocaleDateString("en-US", options)
        .split(" ");
      let newToday = [];
      newToday.push(formatDate[1].slice(0, 3));
      formatDate[2].length < 2
        ? newToday.push("0" + formatDate[2])
        : newToday.push(formatDate[2]);
      newToday.push(formatDate[0].replace(",", ""));
      setToday(newToday);
    }
  }, [data]);
  ```
<img src="https://user-images.githubusercontent.com/90305737/192212914-edadacba-0f0b-4497-9f2e-31040ded4aaf.png" width="400"/></br>
