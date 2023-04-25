import React, {useEffect} from 'react';



const useOnClickOutside = (ref, handler)=> {
    
    useEffect(
        () => {
            const listener = (event) => {

                //모달 안을 누르면 별다른 일이 일어나지 않는다.
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }
                handler(event);
            };
            //마우스질이 일어날 때의 동작을 정해준다.
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
            return () => {
                document.removeEventListener("mousedown", listener);
                document.removeEventListener("touchstart", listener);
            };
        },
        [ref, handler]
    );
}

export default useOnClickOutside;
