import { useState, useEffect, useRef } from "react";

const useDelayUnmount = ({ isMounted, delayTime }) => {
  const [shouldRender, setShouldRender] = useState(false);

  const timeoutRef = useRef(null);

  useEffect(() => {

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (isMounted && !shouldRender) {
      setShouldRender(true);
    } else if (!isMounted && shouldRender) {
      timeoutRef.current = setTimeout(
        () => setShouldRender(false),
        delayTime
      );
    }
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isMounted, delayTime, shouldRender]);
  return [shouldRender, delayTime];
};

export default useDelayUnmount;