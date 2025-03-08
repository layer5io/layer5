import { useState, useEffect } from "react";

const useWindowHasScrolled = initialState => {
  const [isMounted, setMounted] = useState(initialState);

  const handleHasScrolled = () => window.scrollY > 0 ? setMounted(true) : setMounted(false);

  useEffect(() => {
    window.addEventListener("scroll", handleHasScrolled);
    return () => window.removeEventListener("scroll", handleHasScrolled);
  }, []);

  return isMounted;
};

export default useWindowHasScrolled;