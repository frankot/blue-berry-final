import Hero from "./components/hero";
import Serivces from "./components/services";
import ShortAb from "./components/shortAb";
import Pattern from "./components/UI/pattern";
import Contact from "./components/contact";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <Pattern>
        <ShortAb />
        <Serivces />
      </Pattern>
      <Contact/>
    </div>
  );
}
