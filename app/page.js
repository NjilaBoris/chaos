"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Copy from "@/components/Copy";
import Preloader, { isInitialLoad } from "@/components/Preloader";
const Home = () => {
  useEffect(() => {
    const rafId = requestAnimationFrame(() => {
      ScrollTrigger.refresh(true);
    });

    const onLoad = () => ScrollTrigger.refresh(true);
    window.addEventListener("load", onLoad, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("load", onLoad);
    };
  }, []);
  return (
    <>
      <Preloader />
      <section className="hero relative w-full h-dvh bg-base-100 overflow-hidden">
        <div className="container flex justify-center items-end">
          <div className="hero-content-main w-[65%] h-full flex flex-col justify-between items-center text-center">
            <div className="hero-header">
              <Copy animateOnScroll={false} delay={isInitialLoad ? 5.75 : 0.75}>
                <h1>Crafting Digital Worlds with a Bit of Mischief</h1>
              </Copy>
            </div>

            <div className="hero-footer-outer flex items-end justify-between absolute bottom-0 p-8 w-full left-0">
              <Copy animateOnScroll={false} delay={isInitialLoad ? 6.35 : 1.65}>
                <p className="sm">&copy; Nbdev Dept.</p>
                <p className="sm">( Workroom 101 )</p>
              </Copy>
            </div>

            <div className="hero-footer w-1/2 flex flex-col items-center gap-8">
              <Copy animateOnScroll={false} delay={isInitialLoad ? 6.05 : 1.15}>
                <p className="lg">
                  We build visuals, stories, and systems for people who like
                  their creativity a little unpredictable.
                </p>
              </Copy>

              {/*<Button delay={isInitialLoad ? 6.35 : 1.55} href="/studio">*/}
              {/*  Visit the Studio*/}
              {/*</Button>*/}
            </div>
          </div>
        </div>
      </section>

      <section className="featured-work relative w-full h-full pt-32 px-0 bg-base-100 overflow-hidden pb-24">
        <div className="container">
          <div className="featured-work-header-content mx-auto w-[65%] h-full flex flex-col justify-between items-center gap-20 text-center">
            <div className="featured-work-header w-1/2">
              <Copy animateOnScroll={true} delay={0.25}>
                <h1>Featured Work</h1>
              </Copy>
            </div>

            <div className="arrow w-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                viewBox="0 0 32 32"
                fill="none"
                className="icon"
              >
                <path
                  d="M16 26.6665L16 5.33317"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M22.6667 19.9999L16 26.6665L9.33337 19.9998"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>

            <div className="featured-work-header-copy w-1/2">
              <Copy animateOnScroll={true} delay={0.25}>
                <p className="lg">
                  From motion to concept, pieces born from quiet sketches, late
                  nights, and just the right amount of chaos.
                </p>
              </Copy>
            </div>
          </div>
        </div>
      </section>

      <section className="client-reviews-header-container relative w-full h-full bg-base-100 overflow-hidden">
        <div className="container">
          <div className="client-reviews-header-content  mx-auto w-[65%] h-full flex flex-col justify-between items-center gap-20 text-center">
            <div className="client-reviews-header w-1/2">
              <Copy animateOnScroll={true} delay={0.25}>
                <h1>People Approved</h1>
              </Copy>
            </div>

            <div className="arrow w-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                viewBox="0 0 32 32"
                fill="none"
                className="icon"
              >
                <path
                  d="M16 26.6665L16 5.33317"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M22.6667 19.9999L16 26.6665L9.33337 19.9998"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>

            <div className="client-reviews-header-copy w-1/2">
              <Copy animateOnScroll={true} delay={0.25}>
                <p className="lg text-wrap">
                  Unfiltered thoughts from the people who survived our creative
                  process. Or at least that’s what they told us.
                </p>
              </Copy>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
