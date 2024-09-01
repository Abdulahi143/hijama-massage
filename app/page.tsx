"use client"

import "aos/dist/aos.css";

import AOS from "aos";
import Hero from "./_components/Hero";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
      mirror: false
    });
  }, []);
  return (
    <>
    <Hero />
    </>
  );
}
