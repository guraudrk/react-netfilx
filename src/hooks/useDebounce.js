import { useState,useEffect } from "react";
//hooks를 만든다.

export const useDebounce = (value, delay) => {
    const [debounceValue, setDebounceValue] = useState(value);
  
    useEffect(() => {
  
        //정해진 딜레이 시간 이후에 반영이 되도록 하는 것이다.
  
        const handler = setTimeout(() => {
        setDebounceValue(value);
      }, delay);
  
      return () => {
        clearTimeout(handler);
      };

      //value 시간이나 delay 시간이 바뀌면 다시 호출한다.
    }, [value, delay]);
  
    return debounceValue;
  };