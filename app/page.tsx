"use client"

import "aos/dist/aos.css";

import AOS from "aos";
import About from "./_components/About";
import ContactForm from "./_components/ContactForm";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import Image from "next/image";
import Products from "./_components/Products";
import Services from "./_components/Services";
import Testimonial from "./_components/Testimonial";
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
    <div id="/">
    <Hero />
    </div>
    <div id="#behandlingar">
    <Services />
    </div>
    <div id="#om">
    <About />
    </div>
    {/* <Products /> */}
    <div id="#nojdakunder">
    <Testimonial />
    </div>
    <div id="#kontakt">
    <ContactForm />
    </div>
    <Footer />
    </>
  );
}
