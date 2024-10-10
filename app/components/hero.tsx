import Image from "next/image";
import Link from "next/link";
import heroImg from "../../public/static/images/hero-bg.jpg";

export default function Hero() {
  return (
    <section className="relative h-[75vh] md:h-[60vh]">
      <Image
        src={heroImg}
        alt="Architecture firm background hero page img"
        className="w-full h-full object-cover mt-20"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-start">
        <div className=" text-white   max-w-7xl mx-10 xl:mx-auto">
          <p className="uppercase">
            BerryStudio Biuro Projektowe Instalacji Sanitarnych
          </p>
          <h1 className={" text-4xl md:text-5xl font-[500] mb-4 mt-2 font"}>
            Innowacyjne Rozwiązania Branży Budowlanej
          </h1>
          <p className={" text-xl sm:text-2xl"}>
            Zespół z Warszawy z pasją do projektowania{" "}
          </p>
          <Link href="#contact">
            <button
              type="button"
              className="rounded-md uppercase px-10 md:px-12 lg:px-16 mt-4 duration-300  bg-mainPurp py-2.5  text-background shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Współpraca
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
