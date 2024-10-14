import Image from "next/image";
import Link from "next/link";
import heroImg from "../../public/static/images/hero-bg.jpg";

export default function Hero() {
  return (
    <section className="relative h-[70vh] md:h-[60vh]">
      <Image
        src={heroImg}
        alt="Architecture firm background hero page img"
        height={755}
        width={1440}
        className="w-full h-full object-cover mt-20"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-start">
        <div className=" text-white   max-w-6xl mx-3 sm:mx-10 xl:mx-auto xl:px-5 overflow-hidden">
          <p className="uppercase text-sm sm:text-base">
            Berry Studio - Biuro Projektowe Instalacji Budynkowych
          </p>
          <h1 className={" text-[2rem]/9 sm:text-5xl font-[500] mb-4 mt-2 "}>
            Zindywidualizowane Rozwiązania Branży Budowlanej{" "}
          </h1>
          <p className={" text-lg sm:text-2xl"}>
            Zespół specjalistów z pasją do projektowania{" "}
          </p>
          <Link href="#contact">
            <button
              type="button"
              className="rounded-md uppercase  px-8 md:px-12 lg:px-16 mt-4 duration-300  bg-mainPurp py-2.5  text-background shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Współpraca
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
