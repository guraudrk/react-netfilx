import React, { useEffect, useState } from 'react'
import requests from '../api/requests';
import axios from '../api/axios';
import "./Banner.css"
import styled from 'styled-components';
export default function Banner() {

    const [movie,setMoive] = useState([]);
  
    //클릭 부분에 관한 state를 우선적으로 만든다.
    const[isClicked,setIsClicked] = useState(false);
  useEffect(()=>{
    fetchData();
  },[]);


//데이터에 관한 함수를 정의한다.
  const fetchData = async()=>{

    //현재 상영중인 영화 정보를 가져온다.
    //async는 비동기 함수와 관련된 용어이다.
    //await는 서버에서 정보를 다 처리할 때 까지 기다리게 하는 용어이다.

    const request = await axios.get(requests.fetchNowPlaying);
    

    //여러 영화 중 영화 하나의 id를 가져오기.
    //이 때, math의 floor 함수나 random 함수를 쓴다.
    const movieId = request.data.results[
        Math.floor(Math.random()*request.data.results.length)
    ].id;

    //특정 영화의 더 상세한 정보를 가져오기(비디오 정보도 포함)

    const { data: movieDetail }  = await axios.get(`movie/${movieId}`,{
      params:{append_to_response:"videos"},

    });

    //setMoive를 통해 movie안에 정보들이 들어가게 된다.
    setMoive(movieDetail);


  };

  //100글자를 넘어가면 그 뒤는 ...을 해주는 함수를 생성한다.
  const truncate = (str,n)=>{
    return str?.length  > n ? str.substr(0,n-1)+"..." : str; 
  }

  //isClicked가 false 일 때를 가정하는 구문이다.
  //클릭하지 않았으니, 우리가 의도한 평상시 화면을 보여준다.
  if(!isClicked){
    return (
      <header
      className='banner'
      style={{backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
      backgroundPosition:"top center",
      backgroundSize:"cover"
      }}>
  
        <div className='banner__contents'
        >
          <h1>
            {movie.title || movie.name || movie.original_name}</h1>
  
            <div className='banner__buttons'>
              <button className='banner_button play' onClick={()=>setIsClicked(true)}>play</button>
              <button className='banner_button info'>More information</button>
            </div>
          
  
          <h1 clasName="banner__description">{truncate(movie.overview,100)}</h1>
  
  
  
        </div>
        <div className='banner--fadeBottom'/>
      </header>
    )
  }

  //하지만 클릭이 된다면 다른 놈을 리턴해 줘야 한다.
  else{
    return(
      <Container>
        <HomeContainer>
        <Iframe
            width="640"
            height="360"
            src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
            title="YouTube video player"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></Iframe>
        </HomeContainer>
        
      </Container>
    )
  }
    
}

//유튜브 영상을 만들기 위한 iframe을 짠다.

const Iframe = styled.iframe`
width:100%;
height: 100%;
z-index: -1;
opacity: 0.65;
border:none;

&::after{
  content:"";
  position: absolute;
  top: 0;
  left:0;
  width:100%;
  height:100%;

}
`


//Styled Component를 이용해서 css 부분을 코딩한다.

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: cloumn;
width:100%;
height:100vh
`

const HomeContainer = styled.div`
width:100%;
height:100%;
`