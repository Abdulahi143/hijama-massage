"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';
import { Autoplay, Pagination } from "swiper/modules";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="bg-gray-100">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000000,
            disableOnInteraction: false,
          }}
          //   navigation={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="container md:pt-20 md:pb-16">
              {/* *************** */}
              <div className="grid md:grid-cols-2 gap-2">
                {/* *************** */}
                <div className="relative">
                  {/* *************** */}
                  <h1
                    className="md:text-8xl text-5xl font-bold py-4"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                  >
                    Din kropp, din hälsa – vår omsorg <br />
                  </h1>
                  <div
                    className="absolute top-56 mt-1 left-96 md:flex hidden"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                  >
                    <Image
                      src="/rate.png"
                      width={200}
                      height={200}
                      alt="hero-img"
                    />
                  </div>
                  <p
                    className="py-4"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                  >
                    Ge din kropp den kärlek den behöver. Vår koppning och
                    massage hjälper dig att slappna av, återhämta dig och må
                    bättre.
                  </p>
                  {/* *************** */}
                  <div className="md:flex gap-4 py-6 grid">
                    <Button
                      className="p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide"
                      data-aos="fade-right"
                      data-aos-delay="50"
                      data-aos-duration="1200"
                      data-aos-easing="ease-in-out"
                    >
                      Boka Behandling
                    </Button>
                    <Button
                      className="p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide"
                      variant="outline"
                      data-aos="fade-right"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                    >
                      Produkter
                    </Button>
                  </div>
                  {/* *************** */}
                </div>
                {/* *************** */}
                <div
                  className="relative md:py-0 py-1 mt-0 md:mt-[-100px]"
                  data-aos="fade-left"
                  data-aos-duration="900"
                  data-aos-easing="ease-in-out-back"
                >
                  <Image
                    src="/mohamed.png"
                    width={500}
                    height={200}
                    alt="hero1"
                  />
                </div>
                {/* *************** */}
              </div>
              <div className="w-full h-2 border-solid border-2  bg-black"></div>
              {/* *************** */}
            </div>
          </SwiperSlide>
          {/* ************************************** */}
          <SwiperSlide className="cursor-pointer">
            <div className="container md:pt-20 md:pb-10">
              {/* *************** */}
              <div className="grid md:grid-cols-2">
                {/* *************** */}
                <div className="relative">
                  {/* *************** */}
                  <h1 className="md:text-8xl text-5xl font-bold py-4">
                    Alowishus Deliciious Coffee{" "}
                  </h1>
                  <div className="absolute top-56 mt-1 right-56 md:flex hidden">
                    <Image
                      src="/coffee/cafe.png"
                      width={80}
                      height={80}
                      alt="cafe"
                    />
                  </div>
                  <p className="py-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Commodi, quae placeat. Corrupti, omnis id a consequatur eius
                    saepe quia dignissimos.
                  </p>
                  {/* *************** */}
                  <div className="md:flex gap-4 py-6 grid">
                    <Button className="p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide">
                      Boka Behandling
                    </Button>
                    <Button
                      className="p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide"
                      variant="outline"
                    >
                      Produkter
                    </Button>
                  </div>
                  {/* *************** */}
                </div>
                {/* *************** */}
                <div className="relative " data-aos="fade-left">
                  <Image
                    src="/coffee/alowishus-coffee.png"
                    width={600}
                    height={600}
                    alt="coffee"
                  />
                  <div className="absolute top-10 md:top-4 right-0 md:right-24 ">
                    <Image
                      src="/coffee/cafe.png"
                      width={120}
                      height={120}
                      className="md:w-28 w-16"
                      alt="image"
                    />
                  </div>
                </div>
                {/* *************** */}
              </div>
              {/* *************** */}
            </div>
          </SwiperSlide>
          {/* ************************************** */}
        </Swiper>
      </div>
    </>
  );
};

export default Hero;
