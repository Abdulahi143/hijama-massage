import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const services = [
  {
    title: "Helkropps massage och hijama",
    description:
      "Bristande flexibilitet är en utav de vanligaste orsakerna till skador. Med hjälp av helkrops massage kan du öka din rörlighet och därmed förebygga skador!",
    image: "/massage-by-man-to-man.jpg",
    url: "https://www.google.com",
  },
  {
    title: "Rygg och fot massage",
    description:
      "Massage gör nämligen att mer blod skickas till dina muskler och hjälper dem dessutom att slappna av. Motverkar inflammation. Boka din rygg och fot massage för att återhämta dig snabbare.",
    image: "/relaxedmassage.jpg",
    url: "https://www.google.com",
  },
  {
    title: "Hijama/koppning helkropp",
    description:
      "Fördelar med koppning är att det ökar cirkulationen i muskler och underhud. Med hjälp av de upphettade sugkopparna skapas ett undertryck i din hud.",
    image: "/cupping1.jpg",
    url: "https://www.google.com",
  },
  {
    title: "Hijama/kopping rygg",
    description:
      "Hijama (Våtkoppning) är en naturlig medicinsk metod man använder för att förbättrar blodcirkulationen som därefter gör att flera saker faller på plats dels att den förstärker immunförsvaret och minskar risk för sjukdomar mm.",
    image: "/cupping2.jpg",
    url: "https://www.google.com",
  },
];

const Services = () => {
  return (
    <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="grid md:grid-cols-6 text-center md:py-16">
          <div className="md:col-start-2 col-span-4">
            <h1 className="text-3xl md:text-5xl font-bold">Behandlingar</h1>
            <p className="py-4 md:w-2/4 mx-auto text-gray-500 text-lg">
              Frigör kroppens potential. Med våra koppningsterapier och
              massagebehandlingar får du en djupare återhämtning och bättre
              välmående.
            </p>
          </div>
        </div>
        <div className="mb-4 grid gap-4 sm:grid-cols-2 m<d:mb-8 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => {
            return (
              <div
                className="shadow-lg hover:shadow-xl cursor-pointer px-8 py-10  hover:scale-105 transition-all max-w-fit rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800"
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out-back"
                key={service.title}
              >
                <div className="h-56 w-full">
                  <Image
                    className="mx-auto h-full rounded-xl w-auto"
                    src={service.image}
                    width={500}
                    height={500}
                    alt=""
                    priority
                  />
                </div>
                <div className="pt-6">
                  <a
                    href="#"
                    className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
                  >
                    {service.title}
                  </a>
                  <p className="tex-gray-500 mt-2 line-clamp-2">
                    {service.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between gap-4 cursor-pointer">
                    <Button onClick={() => '/www.google.com'}>Boka Nu</Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
