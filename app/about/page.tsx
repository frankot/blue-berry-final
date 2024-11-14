import { CheckCircleIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Image from "next/image";

import CaruDesk from "../components/caruDesk";
import Pattern from "../components/UI/pattern";
import abImg from "../../public/static/images/aboutPholder1.jpg";
import CarouselMobile from "../components/caruMobile";

const photos = [
  "/static/images/carousel/caru1.webp",
  "/static/images/carousel/caru2.webp",
  "/static/images/carousel/caru3.webp",
  "/static/images/carousel/caru4.webp",
  "/static/images/carousel/caru5.webp",
];

export default function About() {
  return (
    <Pattern>
      {" "}
      <div className=" px-6 pb-32 pt-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <Link href="/#shortAb">
            <button
              type="button"
              className="rounded-md bg-mainPurp px-12 uppercase mt-6 py-2.5 mb-10 text-sm  text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Wróć{" "}
            </button>
          </Link>
          <div>
            <p className="text-base font-semibold leading-7 text-indigo-900">
              Berry Studio{" "}
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              O Nas{" "}
            </h1>
            <hr className="mt-3  h-1 mr-44 rounded  border-none bg-mainPurp relative" />
          </div>
          <p className="mt-6 text-xl leading-8">
            Berry Studio to zespół doświadczonych projektantów i inżynierów,
            który z powodzeniem stawia czoła nawet najbardziej skomplikowanym
            wyzwaniom, realizując projekty z pełnym zaangażowaniem i troską o
            każdy detal, świadcząc usługi w zakresie doradztwa inżynieryjnego i
            energetycznego na najwyższym poziomie oraz wnikliwie prowadząc
            nadzór nad realizacją.
          </p>
          <div className="mt-10 max-w-2xl">
            <p>
              Nasze zaangażowanie od lat napędza dynamiczny rozwój firmy,
              umożliwiając nam skuteczne radzenie sobie z coraz bardziej
              wymagającymi projektami. Zespół doświadczonych inżynierów zapewnia
              kompleksowe opracowanie dokumentacji projektowej branży Instalacji
              Sanitarnych we współpracy z naszym zespołem Instalacji
              Elektrycznych, co pozwala na lepszą wewnętrzną koordynację,
              zapewnia oszczędność czasu i kolizji międzybranżowych. Wnikliwa
              analiza na etapie projektowania pomaga uniknąć wielu problemów i
              błędów podczas budowy.
            </p>
            <figure className="mt-16">
              <Image
                alt=""
                src={abImg}
                className="rounded bg-gray-50 "
              />
            </figure>
            <div id="serv" className="mb-20"></div>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
              Obszary Działania
            </h2>
            <ul role="list" className="mt-5 max-w-xl space-y-8 text-gray-600">
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-900"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Budownictwo Biurowe
                  </strong>{" "}
                  Realizujemy nowoczesne projekty przestrzeni biurowych, które
                  łączą funkcjonalność z estetyką, dostosowując się do potrzeb
                  klientów.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-900"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Budownictwo Mieszkalne
                  </strong>{" "}
                  Tworzymy przyjazne i komfortowe przestrzenie mieszkalne, które
                  spełniają najwyższe standardy jakości i bezpieczeństwa.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-900"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Budownictwo usługowe
                  </strong>{" "}
                  Kreujemy przestrzenie handlowe, które łączą innowacyjne
                  rozwiązania z atrakcyjnym designem, tworząc miejsca
                  sprzyjające usługom.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-900"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Służba zdrowia
                  </strong>{" "}
                  Specjalizujemy się w projektowaniu obiektów medycznych,
                  zapewniając najwyższe standardy bezpieczeństwa i
                  funkcjonalności.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-900"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Budownictwo sportowe
                  </strong>{" "}
                  Projektujemy obiekty sportowe, które sprzyjają aktywności
                  fizycznej i integracji społecznej, tworząc przestrzenie dla
                  pasjonatów sportu.
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 flex-none text-indigo-900"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Przemysł i technologia
                  </strong>{" "}
                  Nasze realizacje w sektorze przemysłowym łączą nowoczesne
                  technologie z efektywnością, wspierając rozwój innowacyjnych
                  rozwiązań.
                </span>
              </li>
            </ul>
            <p className="mt-8">
              Świadomość aspektów ekonomicznych i ekologicznych zapewnia sukces
              w rozwiązywaniu najbardziej złożonych wyzwań stawianych inżynierom
              w branży budowlanej. Wykorzystanie najnowszych technologii
              projektowania w firmie znacząco wspiera proces tworzenia i
              realizacji projektów na budowie.
            </p>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
              Wybierz Pewność{" "}
            </h2>
            <p className="mt-6">
              Dzięki wieloletniej współpracy z czołowymi biurami
              architektonicznymi, wykonawcami i inwestorami, firma może
              opracowywać rozwiązania techniczne, których głównym celem jest
              zwiększenie efektywności realizacji inwestycji na różnych etapach.
            </p>
            <p className="mt-10">
              Nasza oferta dedykowana jest inwestorom, architektom i wykonawcom,
              którzy oczekują profesjonalnego podejścia do realizacji projektów
              budowlanych, z gwarancją najwyższych standardów usług.
            </p>
            <Link href="/#shortAb">
              <button
                type="button"
                className="rounded-md bg-mainPurp px-12 uppercase mt-6 py-2.5 text-sm  text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Wróć{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
      <CaruDesk photos={photos} />
      <CarouselMobile photos={photos} />
    </Pattern>
  );
}
