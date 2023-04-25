import React, { useEffect,useState } from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import axios from '../../api/axios';
import { useDebounce } from '../../hooks/useDebounce';
import "./SearchPage.css";

export default function SearchPage() {

  //usenavigate를 정의한다.
const navigate = useNavigate();

  const [searchResults,setSearchResults] = useState([]);


  let query = useQuery();
  //왜 q를 get하는지에 대해서는
  /*
  useLocation을 이용한 검색 페이지 구현하기 
  강의를 잘 보자.
  */ 

  //searchTerm 변수에 검색 결과가....
  const searchTerm = query.get("q")
const debounceSearchTerm = useDebounce(searchTerm,500);

  useEffect(()=>{
    //serachTerm 이 있으면 결과를 반환한다.
if(debounceSearchTerm){
  fetchSearchMoive(debounceSearchTerm);
}
  },[debounceSearchTerm]);



  //가져올 때 비동기로 가져온다.
  const fetchSearchMoive=async (searchTerm)=>{

    try{
      const request = await axios.get(
        //성인 영화는 제외를 하고 searchTerm을 이용해서 정보를 요청한다.
        `/search/multi?include_adult=false&query=${searchTerm}`
      )
    }
    catch{

      console.log("error",Error);
    }
  }

  const useQuery = () =>{

    //search 부분만 가져와서 기존 db랑 연관지어서 검색 결과를 가져와야 한다.
    return new URLSearchParams(useLocation().search);

  } 



  const renderSearchResults =() =>{

    //만약 검색 결과가 있다면
    return searchResults.length > 0 ?(
      <section className="search-container">
        {searchResults.map((movie)=>{
          if(movie.backdrop_path !== null && movie.media_type !== "person"){
            const movieImageUrl = 
            "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;


            //return 값으로 ui를 작성한다. 이미지를 본격적으로 보여줘야지?
            return(
              <div className='movie' key={movie.id}>
                <div 
                //클릭 시 이동하는 부분을 코딩.
                onClick={()=>navigate(`/${movie.id}`)}
                className="movie__column-poster">
                  <img
                  src={movieImageUrl} alt="moive image"
                  className='movie__poster'
                  />
                </div>
              </div>
            )

          }
        })}

      </section>
    ) :(

      //결과가 없을 경우
      <section className='no-results'>
        <div className='n0-results__text'>
          <p>
            찾고자 하는 검색어"{debounceSearchTerm}"에 맞는 영화가 없습니다.
          </p>
        </div>
      </section>
    )
  }

  

  return renderSearchResults();
}

