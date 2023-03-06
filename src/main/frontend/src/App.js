// /* eslint-disable */ // >> waring 제거해줌

import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {LeftSideBar} from './Components/menuTemplate'

const Test = ()=>{
    axios.get('/api/title.do')
    .then((result)=>{ console.log(result) }) // 요청 성공시 실행코드
    .catch(()=>{  })
}

function App() {
    useEffect(()=>{
        axios.get('/api/title.do')
        .then((result)=>{console.log(result)})
        .catch(() => {}); // get은 생략 가능하다. 디폴트다.
    }, []);

    let post = '강남 우동 맛집';
    let [Title, setTitle] = useState([
	    {
	    seq_no : 1,
	    title : "강남 맛집 추천",
	    date : "7월 16일 발행",
        ddabong : 0
	    },
	    {
	    seq_no : 2,    
	    title : "남자 신발 추천",
	    date : "7월 26일 발행",
        ddabong : 0
	    },
	    {
	    seq_no : 3,    
	    title : "재밌는 드라마 추천",
	    date : "8월 1일 발행",
        ddabong : 0
	    },
	    ]);

    let [따봉, 따봉변경] = useState([0,0,0]);    

    const TitleName = (Attr)=>{                    
      return (
          <div className="list">
            <h4><span className="listTitle">{ Attr.title }</span>
            <span class="ddabong" onClick={ () => {  
                   Title[Attr.num].ddabong = Attr.ddabong+1;
                   let copyTitle = [...Title];                           
                   setTitle(copyTitle);
              }}>👍</span> { Attr.ddabong }</h4>
            <p class="upDate">{ Attr.date }</p>
          </div> 
      );
    }

    return (
        <div className="App">
            <div className="black-nav">
                <h4>ReactBlog</h4>    
            </div>   
            {
                Title.map((a, index) =>{
                       return <TitleName title ={ a.title } date = { a.date } seqNo = { a.seq_no } num = { index } ddabong = { a.ddabong }></TitleName>;
                })
            }     
           <Modal id="Modal">할로?</Modal>
        </div>   
    );
}



function Modal(data) {
    return (
        <div className="modal">
            <h4>제목</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    )    
}


export default App;