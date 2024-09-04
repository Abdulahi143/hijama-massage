import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="bg-gray-50">
        <div className="max-w-screen-xl py-10 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
          <div
            className="p-5 sm:w-8/12"
            data-aos="fade-right"
            data-aos-duration="1400"
            data-aos-easing="ease-in-out-back"
          >
            <Image
              alt=""
              src="/hijama.png"
              className=""
              width={150}
              height={80}
            />

            <div className="md:flex grid gap-4 md:gap-8 pt-8">
              <a
                href="#services"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                Behandlingar
              </a>
              <a
                href="#about"
                className="text-lg font-medium leading-6 text-gray-900"
              >
              Varför oss?
              </a>
              <a
                href="#products"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                Produkter
              </a>
              <a
                href="#policy"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                Regler och policy
              </a>
            </div>
          </div>
          <div
            className="p-5 sm:w-4/12 flex flex-col"
            data-aos="fade-left"
            data-aos-duration="1400"
            data-aos-easing="ease-in-out-back"
          >
            <h3 className="font-medium text-lg  text-gray-900 mb-4">
            Prenumerera på vårt nyhetsbrev för att ta del av rabatter och erbjudanden
            </h3>
            <form className="mt-4">
              <input
                className="border rounded w-full px-4 py-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="dinmail@email.com"
              />
            </form>
          <div className="flex flex-col md:flex-row gap-4 mt-12 items-center justify-center">
            <Image src="/swish.png" alt="swish" width={100} height={100}/>
            <Image src="/epassi.png" alt="epassi" width={100} height={100}/>
            <Image src="/wellnet.jpg" alt="welnet" width={100} height={100}/>
            <Image src="/minfrisk.png" alt="minfrisk" width={100} height={100}/>
            <Image src="/actiway.png" alt="actiway" width={100} height={100}/>
  
          </div>
          </div>

        </div>
        <div className="flex py-5 md:px-0 px-3 m-auto text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
          <p>© Copyright {year} Hijama | Developed by <Link href='https://shakurjr.netlify.app'  className="text-green-400 uppercase">ShakurJr</Link>. All Rights Reserved. </p>

        </div>
      </div>
    </>
  );
};

export default Footer;
