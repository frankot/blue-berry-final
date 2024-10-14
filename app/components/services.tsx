import Image from "next/image";
import Link from "next/link";

import uslugowe from "../../public/static/images/uslugowe.jpg";
import sportowe from "../../public/static/images/sportowe1.jpg";
import tech from "../../public/static/images/techo.jpg";

const services = [
  {
    name: "Budownictwo mieszkalne",
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
  },
  {
    name: "Budownictwo biurowe",
    url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
  },
  {
    name: "Budownictwo usługowe",
    url: uslugowe,
  },
  {
    name: "Służba zdrowia",
    url: "https://plus.unsplash.com/premium_photo-1681995326134-cdc947934015?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Budownictwo sportowe",
    url: sportowe,
  },
  {
    name: "Przemysł i technologia",
    url: tech,
  },
];

export default function Serivces() {
  return (
    <section className="py-20">
      <div id="services" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="my-6 mb-24 md:mb-32   h-1 mx-16 sm:mx-28 md:mx-44 lg:mx-72 rounded  border-none bg-mainPurp relative" />
        <Link href="/about#serv">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="  hover:scale-105 duration-500 relative"
              >
                <Image
                  src={service.url}
                  alt={service.name}
                  width="1000"
                  height="1000"
                  className="w-full h-72 object-cover rounded"
                />
                <div className="absolute inset-0 bg-black opacity-30 "></div>

                <div className="absolute bottom-0 flex justify-center w-full ">
                  <h3 className="text-xl  font-[500]  mb-6  text-white z-20">
                    {service.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </Link>
      </div>
    </section>
  );
}
