import { useState, useEffect } from 'react';

// when making a custom Hook we need to name it starting with "use". THIS IS A MUST!!
// custom hooks can take in params like useState below
const useCounter = (forwards = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [forwards]);

  // you can return w/e you want in custom hooks: array, objects, num
  return counter;
};

export default useCounter;
