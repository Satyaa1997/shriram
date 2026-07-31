import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Scrool = () => {
 const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // या "smooth"
    });
  }, [pathname]);

  return null;
};

export default Scrool
