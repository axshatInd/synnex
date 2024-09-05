"use client"; // This marks the file as a Client Component

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { gsap } from "gsap";

export default function Home() {
  useEffect(() => {
    // GSAP animation for intro and button
    gsap.fromTo(
      ".intro-text",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 2, ease: "power3.out", delay: 1 }
    );
    gsap.fromTo(
      ".get-started-btn",
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 1, ease: "bounce.out", delay: 2 }
    );
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/Herovid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full text-center px-4">
        {/* Intro text with light white gradient and outline */}
        <h1
          className="intro-text text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-100 text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
          style={{
            textShadow:
              "0 1px 2px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.4), 0 4px 8px rgba(0, 0, 0, 0.3)",
          }}
        >
          Welcome to SynnexTial
        </h1>

        {/* Get Started Button */}
        <Link href="/dashboard" passHref>
          <Button className="get-started-btn mt-6 sm:mt-8 bg-gray-800 text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-full hover:bg-black">
            Get Started
          </Button>
        </Link>
      </div>

      {/* Black overlay to darken the video */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
    </div>
  );
}
