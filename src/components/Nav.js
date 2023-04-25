import React, { useEffect, useState } from 'react'
import "./Nav.css"
import { useNavigate } from 'react-router-dom';

//Onclick을 할 때 새로운 페이지가 로드 되도록 한다.
export default function Nav() {
  
  const [show,setShow]=useState(false);
  const [searchValue,setsearchValue] = useState("");

  //navigate 기능을 이용하기 위한 변수 정의

  const navigate = useNavigate();

  //스크롤 함에 따라 상단 화면(Nav)의 상태가 어떻게 바뀌는지에 관한 코드
  useEffect(()=>{
    window.addEventListener("scroll",()=>{

        if(window.scrollY>50){

            //setShow 가 true일 때는 그에 맞는 css를 사용한다.
            setShow(true);
            //setShow가 true로 바뀜으로 인해 show도 그에 맞게 값이 바뀐다.
        }
        else{
            setShow(false);
            //setShow가 false로 바뀜으로 인해 show도 그에 맞게 값이 바뀐다.

        }
    })

    return () =>{
        window.removeEventListener("scroll",()=>{});
    }
  })


  //검색창에 무엇인가를 검색 시 바뀌는 부분이다.
  const handleChange = (e) => {

    setsearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`)

  }
  
    return (
    <nav className={`nav ${show && "nav_black"}`}>
      <img
      alt='Netfilx logo'
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
      className="nav__logo"
      onClick={()=>window.location.reload()}
      />


<input value={searchValue} 
onChange={handleChange} 
className="nav__input" 
type="text"
placeholder='이장한은 부자입니다. 영화를 입력해주세요.'/>

      <img
      alt="User logged"
      src="https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
      className='nav__avatar'
      />
    </nav>
  );
}


