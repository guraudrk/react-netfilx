import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../../api/axios'


export default function DetailPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`/movie/${movieId}`);
      
      //request의 data들을 setMovie를 통해 movie에 넣어준다.
      setMovie(request.data);
    }
    fetchData();
  }, [movieId]);


  //영화가 없을 때의 화면을 출력.
  if (!movie) return <div>...loading</div>;


  //클릭 시 나오는 이미지.
  return (
    <section>
      <img
        className="modal__poster-img"
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="poster"
      />
    </section>
  );
}


