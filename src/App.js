import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // let post = '부산대 고양이카페'; // 서버에서 가져온 정보라고 가정
  let [title, refresh] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  // let [logo, setLogo] = useState('ReactBlog'); // state는 글자가 변경됐을 때 그 상태를 자동으로 반영해주는 역할, 사이트 로고는 자주 바뀌는 것이 아님 -> 굳이 state 써줄 필요 X
  let [like, likeManage] = useState(0);

  return (
    <div className="App">
      <header className="black-nav">
        <h1>ReactBlog</h1>
      </header>
      <button type="button" onClick={() => {
        let copy = [...title];
        copy[0] = '여자 코트 추천';
        refresh(copy);
      }}>
        refresh
      </button>
      <button type="button" onClick={() => {
        let copy = [...title];
        copy.sort();
        refresh(copy);
      }}>
        게시글 정렬
      </button>
      <ul>
        <li className="list">
          <h2>
            {title[0]}
            <button type="button" aria-label="Like" class="like" onClick={() => {likeManage(like + 1)}}></button>
            {like}
          </h2>
          <p>6월 20일 발행</p>
        </li>
        <li className="list">
          <h2>
            {title[1]}
            <button type="button" aria-label="Like" class="like" onClick={() => {likeManage(like + 1)}}></button>
            {like}
          </h2>
          <p>6월 20일 발행</p>
        </li>
        <li className="list">
          <h2>
            {title[2]}
            <button type="button" aria-label="Like" class="like" onClick={() => {likeManage(like + 1)}}></button>
            {like}
          </h2>
          <p>6월 20일 발행</p>
        </li>
      </ul>
      <Modal />
    </div>
  );
}

function Modal() {
  return (
    <div class="modal">
      <h2>state 못써서 제목 싱크 안 맞음</h2>
      <p>6월 20일 발행</p>
      <p>안녕하세요, 글 내용입니다.</p>
    </div>
  )
}

export default App;
