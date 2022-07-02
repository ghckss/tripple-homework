import { useEffect, useState } from "react";

// https://easings.net/ko#easeOutQuint
function easeOutQuint(x: number): number {
  return 1 - Math.pow(1 - x, 5);
}

const REPEAT_SPEED = 10;

const useCounter = (end: number, time = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let progress = 0;

    const counter = setInterval(() => {
      const frame = time / REPEAT_SPEED;
      const currentNumber = Math.round(easeOutQuint(++progress / frame) * end);

      setCount(currentNumber);

      if (currentNumber === end) {
        clearInterval(counter);
      }
    }, REPEAT_SPEED);
  }, [end, time]);

  return count;
};

export default useCounter;
