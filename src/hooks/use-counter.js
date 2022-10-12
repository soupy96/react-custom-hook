import React, { useState, useEffect } from 'react';

// when making a custom Hook we need to name it starting with "use". THIS IS A MUST!!
const useCounter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // you can return w/e you want in custom hooks: array, objects, num
  return counter;
};

export default useCounter;
