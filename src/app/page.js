"use client";

import { useEffect, createContext, useState, useContext } from "react";
import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { SText } from "@/components/spText";
import Header from "./header";

gsap.registerPlugin(ScrollTrigger);
export const HomeContext = createContext();

// main function start
function Home() {
  const [content, setContent] = useState("container");
  useEffect(() => {
    if (content == "container") {
      gsap.to(".container", {
        y: 100,
        stagger: 0.05,
        opacity: 1,
        ease: "power4.out",
      });
    }
  }, [content]);
  return (
    <HomeContext.Provider value={{ content, setContent }}>
      {content == "loading" && <Loading />}
      {content == "container" && (
        <div className="home">
          <Header />
          <SText value="welcome to home" className="container" />
        </div>
      )}
    </HomeContext.Provider>
  );
}

export default Home;
// main function end

const Loading = () => {
  const loadingContest = useContext(HomeContext);
  useEffect(() => {
    gsap.to([".line-left", ".line-right"], {
      width: "45%",
      ease: "elastic.out(1, 0.75)",
      stagger: 0.001,
      duration: 1,
      delay: 0.5,
      onComplete: () => {
        gsap.to([".line-left", ".line-right"], {
          width: "0",
          ease: "power4.out",
          duration: 1,
        });
      },
    });
    gsap.to(".home-inner-boom", {
      width: 80,
      height: 80,
      ease: "elastic.out(1, 0.75)",
      stagger: 0.001,
      duration: 1,
      delay: 1.5,
      opacity: 1,
      ease: "elastic.out(1, 0.75)",
      onComplete: () => {
        gsap.to(".home-inner-boom", {
          width: 0,
          height: 0,
          ease: "elastic.out(1, 0.75)",
          stagger: 0.001,
          duration: 1,
          opacity: 0,
          onComplete: () => {
            loadingContest.setContent("container");
          },
        });
      },
    });
  }, []);
  return (
    <div className="home-loading">
      <span className="line-left"></span>
      <span className="line-right"></span>
      <div className="home-inner-boom">
        <span className="loading-dots"></span>
      </div>
    </div>
  );
};
