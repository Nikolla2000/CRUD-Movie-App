import { useEffect, useState } from 'react';

const useCount = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevState) => prevState + 1)
            console.log('fetch some data!')
        }, 1_000);

        return () => {
            clearInterval(interval);
        }
    }, [])

    return counter;
}

export default useCount;