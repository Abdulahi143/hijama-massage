"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="bg-gray-100">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000, // Adjusted for reasonable duration
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="container mx-auto px-4 md:px-8 pt-12 md:pt-16">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <h1
                    className="md:text-8xl text-5xl font-bold py-4"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                  >
                    Din kropp, din hälsa – vår omsorg
                  </h1>
                  <div
                    className="absolute top-0 right-0 md:top-1/3 md:right-0 transform -translate-y-1/2 md:translate-x-0 hidden md:flex"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                  >
                    <Image
                      src="/rate.png"
                      width={200}
                      height={170}
                      alt="rate"
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
                </div>
                <div
                  className="relative"
                  data-aos="fade-left"
                  data-aos-duration="900"
                  data-aos-easing="ease-in-out-back"
                >
                  <Image
                    src="/mohamed.png"
                    width={500}
                    height={300}
                    alt="hero"
                  />
                </div>
              </div>
              <div className="w-full h-2 border-solid border-2 bg-black mt-0"></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Hero;
