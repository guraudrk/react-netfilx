import axios from "axios";


//api를 따 오는데 반복되는 부분이 많다.
//그래서 서버와 백엔드,프론트엔드 간의 소통을 원활하게 해 주는 axois를 통해서 
//api를 간결화한다.

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    params:{
        api_key:process.env.REACT_APP_MOVIE_DB_API_KEY,
        language:"ko-KR",
    },
});


//instance를 다른 부분에도 사용할 수 있게끔 export를 한다.

export default instance;
