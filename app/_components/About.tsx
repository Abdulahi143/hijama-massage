import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50 md:pt-16 md:mt-10 h-fit">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 md:gap-20 items-center">
          <div
            className=""
            data-aos="fade-up"
            data-aos-duration="1600"
            data-aos-easing="ease-in-out-back"
          >
            <Image
              src="/mohamed-rotated.png"
              width={600}
              height={600}
              className="object-cover md:w-full mt-12"
              alt=""
            />
          </div>
          <div
            className="py-10 md:py-0"
            data-aos="fade-down"
            data-aos-duration="1600"
            data-aos-easing="ease-in-out-back"
          >
            <h1 className="text-3xl md:text-5xl font-bold">
              Lite om oss
            </h1>
            <p className="text-gray-500 text-lg py-4 md:py-8 leading-relaxed flex flex-col items-start">
              <span className="font-semibold text-gray-900">
                Välkommen till Svenska Klassiska Massage & Hijama Center i Borlänge 
               </span> 
               – din destination för professionell hälsa och välmående. Vi erbjuder en rad avancerade behandlingar för att lindra smärta, stelhet, och främja allmän detox genom både massage och hijama (våtkoppning). Våra behandlingar är särskilt utformade för att motverka kontinuerliga ryggskott, nackspärr och mycket mer.
              <br />
              <br />
              <span className="font-semibold text-gray-900"> Hos oss möter du certifierade massörer och hijama-terapeuter </span> 
               med omfattande erfarenhet och kunskap. Vid ditt första besök genomför vi en grundlig konsultation för att kartlägga din hälsa och dina specifika behov. Därefter skräddarsyr vi en behandling som är perfekt anpassad för dig.
              <br /><br />
              <span className="font-semibold text-gray-900">
                Boka nu och upplev skillnaden med våra unika behandlingar!
              </span>
            </p>
            <Button className="p-6 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide">
              Boka Nu
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
