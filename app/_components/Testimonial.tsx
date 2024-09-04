"use client";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { FreeMode } from "swiper/modules";
import Image from "next/image";
import React from "react";
import { Star } from "lucide-react";

const Reviews = [
  {
    id: 1,
    name: "Shukri Ali",
    message: "Super trevlig och väldigt duktig, rekommenderar starkt.",
    stars: 5,
  },
  {
    id: 2,
    name: "Abdirahman M.",
    message:
      "Jag tyckte att det var fantastisk upplevelse och jag fick mer än vad jag förväntade mig och det här är nånting jag skulle rekommendera till alla.",
    stars: 5,
  },
  {
    id: 3,
    name: "Mawlid A.",
    message: " Fantastiskt upplevelse! 10/10",
    stars: 5,
  },
];

const Testimonial = () => {
  return (
    <>
      <div className="container py-20 px-4">
        <div className="grid md:grid-cols-6 text-center md:py-10">
          <div className="col-start-2 col-span-4">
            <h1 className="text-3xl md:text-5xl font-bold">
              Alltid nöjda kunder
            </h1>
            <p className="py-4 md:w-2/4 mx-auto text-gray-500 text-lg">
              Vi strävar alltid efter att överträffa våra kunders förväntningar,
              och det märks i våra kundomdömen. Här är några röster från de som
              valt oss och fått en fantastisk upplevelse.
            </p>
          </div>
        </div>

        <div className="md:flex hidden">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            modules={[FreeMode]}
            className="mySwiper"
          >
            {Reviews.map((review) => (
              <SwiperSlide key={review.id} id={`slide-${review.id}`}>
                <div className="rounded-md bg-white dark:bg-gray-800 shadow-md duration-500 md:m-7 hover:scale-105 transition-all cursor-pointer">
                  <div className="p-7">
                    <div className="grid grid-cols-2 items-center gap-3">
                      <h1 className="inline-flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
                        {review.name}
                      </h1>
                      <div className="flex gap-1">
                        {[...Array(review.stars)].map((_, index) => (
                          <Star
                            key={index}
                            width={20}
                            className="text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-500 text-lg pt-6">
                      {review.message}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex flex-col gap-4 pt-10">

            {Reviews.map((review) => {
              return (
                <SwiperSlide key={review.id} id={`slide-${review.id}`}>
                  <div className="rounded-md bg-white dark:bg-gray-800 shadow-md duration-500 md:m-7 hover:scale-105 transition-all cursor-pointer">
                    <div className="p-7">
                      <div className="grid grid-cols-2 items-center gap-3">
                        <h1 className="inline-flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
                          {review.name}
                        </h1>
                        <div className="flex gap-1">
                          {[...Array(review.stars)].map((_, index) => (
                            <Star
                              key={index}
                              width={20}
                              className="text-yellow-400"
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-500 text-lg pt-6">
                        {review.message}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Testimonial;
