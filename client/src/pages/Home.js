import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Banner from "../components/Banner";
import RecipeFinder from "../components/RecipeFinder";
import FAQComponent from "../components/FAQComponent";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const scrollParam = urlParams.get("scroll");
    if (scrollParam === "true") {
      const navbarHeight = 95;
      const mainContainerTop = document.querySelector(".main-container")
        .offsetTop;
      const scrollPosition = mainContainerTop - navbarHeight;

      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [location.search]);

  return (
    <div className="home">
      <Banner />
      <FAQComponent />
      <RecipeFinder />
    </div>
  );
};

export default Home;
