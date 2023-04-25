import React,{useRef} from 'react'
import "./MoiveModal.css"
import UseOnclickOutside from '../../hooks/useOnClickOutside'

//Row에서 moviemodal에 관한 내용에 관한 부분이다.


function MoiveModal( {



    //모달에 띄울 자세한 정보들을 가져온다.
    backdrop_path,
    title,
    overview,
    name,
    release_date,
    first_air_date,
    vote_average,
    setModalOpen
})
{
const ref = useRef();

//setModalOpen 을 false로 함으로서 모달을 닫는다.
UseOnclickOutside(ref,()=>{setModalOpen(false)});


    return (<div className='presentation'>

<div className='wrapper-modal'>
    <div className='modal' ref={ref.current}>
        <span onClick={()=>setModalOpen(false)} className='modal-close'>

        </span>

        <img
        className='modal__poster-img'
        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
        alt='modal__poster-img'>
        </img>
        <div className='modal__content'>
            <p className='modal__details'>
                <span className='modal__user_perc'>
                    100% for you
                </span>
                {release_date ? release_date : first_air_date}
            </p>

            <h2 className='modal__title'></h2>
            <p className="modal_overview">평점: {vote_average}</p>
            <p className="modal_overview">설명: {overview}</p>

        </div>
    </div>

</div>

    </div>
    );
}


 

export default MoiveModal;
