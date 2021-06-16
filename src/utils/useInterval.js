// custom hook idea taken from Dan Abramov's ideas here: 
// https://overreacted.io/making-setinterval-declarative-with-react-hooks/

import { useEffect, useRef } from "react";

const useInterval = (callback, delay) => {
    const savedCallback = useRef();
    useEffect(()=> {
        savedCallback.current = callback;
    }, [callback])

    useEffect(()=> {
        function tick() {
            savedCallback.current()
        }
        if (delay !==null) {
            const id = setInterval(tick, delay);
            return () => {
                clearInterval(id)
            }
        }
    }, [callback, delay])
}

export default useInterval