import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '부산대 고양이카페'; // 서버에서 가져온 정보라고 가정
  let [title, b] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  // let [logo, setLogo] = useState('ReactBlog'); // state는 글자가 변경됐을 때 그 상태를 자동으로 반영해주는 역할, 사이트 로고는 자주 바뀌는 것이 아님 -> 굳이 state 써줄 필요 X

  return (
    <div className="App">
      <header className="black-nav">
        <h1>ReactBlog</h1>
      </header>
      <ul>
        <li className="list">
          <h2>{title[0]}</h2>
          <p>6월 20일 발행</p>
        </li>
        <li className="list">
          <h2>{title[1]}</h2>
          <p>6월 20일 발행</p>
        </li>
        <li className="list">
          <h2>{title[2]}</h2>
          <p>6월 20일 발행</p>
        </li>
      </ul>
      <h2>{ post }</h2>
    </div>
  );
}

export default App;
