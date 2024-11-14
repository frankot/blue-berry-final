import Link from "next/link";
import Image from "next/image";
import shortImg from "../../public/static/images/shortAb.webp";

export default function ShortAb() {
  return (
    <div
      id="shortAb"
      className="overflow-hidden pt-12 sm:pt-32 sm:pb-10 relative"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-mainPurp">
                Berry Studio
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                O Naszej Firmie
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Berry Studio to zespół doświadczonych projektantów i inżynierów,
                który z powodzeniem stawia czoła nawet najbardziej
                skomplikowanym wyzwaniom, realizując projekty z pełnym
                zaangażowaniem i troską o każdy detal, świadcząc usługi w
                zakresie doradztwa inżynieryjnego i energetycznego na najwyższym
                poziomie oraz wnikliwie prowadząc nadzór nad realizacją. <br />
                Nasze zaangażowanie od lat napędza dynamiczny rozwój firmy,
                umożliwiając nam skuteczne radzenie sobie z coraz bardziej
                wymagającymi projektami.
              </p>
              <div>
                <Link href="/about">
                  <button
                    type="button"
                    className="rounded-md bg-mainPurp px-12 uppercase mt-6 py-2.5 text-sm  text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Więcej{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <Image
            alt="Product screenshot"
            src={shortImg}
            width={1032}
            height={542}
            className="w-[48rem] max-w-none shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
}
