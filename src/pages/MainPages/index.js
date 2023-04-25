import React from 'react'
import Banner from "../../components/Banner";
import Row from "../../components/Row";
import requests from "../../api/requests";
function MainPage() {
  return (
    <div>
       <Banner/>

<Row
title="NETFILX ORIGINALS"
id="NO"
fetchUrl={requests.fetchNetflixOriginals}
//islargeRow는 다른 부분보다 더 길게 늘어뜰이기 위한 코드이다.
isLargeRow

/>

<Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending}/>
<Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated}/>
<Row title="Action Movies" id="AM" fetchUrl={requests.fetchActionMovies}/>
<Row title="Comedy Movies" id="Cm" fetchUrl={requests.fetchComedyMovies}/>


    </div>
  )
}

export default MainPage
