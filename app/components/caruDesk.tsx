"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";

interface CaruDeskProps {
  className?: string;
  photos: string[];
}

export default function CaruDesk({ className = "", photos }: CaruDeskProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  let scrollInterval: NodeJS.Timeout; // Explicitly type scrollInterval

  useEffect(() => {
    const container = containerRef.current;

    const startScrolling = () => {
      // Check if container is defined
      if (!container) return;

      scrollInterval = setInterval(() => {
        // Type assertion to treat container as HTMLDivElement
        const scrollAmount = (container as HTMLDivElement).clientWidth / 5;
        const nextScrollLeft = (container.scrollLeft + scrollAmount) * 1.5;
        if (nextScrollLeft >= container.scrollWidth) {
          container.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        } else {
          container.scrollTo({
            left: nextScrollLeft,
            behavior: "smooth",
          });
        }
      }, 2000);
    };

    // Start scrolling when the component mounts
    if (container) {
      container.addEventListener("mouseleave", startScrolling);
      startScrolling();
    }

    return () => {
      clearInterval(scrollInterval);
      if (container) {
        container.removeEventListener("mouseleave", startScrolling);
      }
    };
  }, []);

  return (
    <div className={"hidden  lg:flex relative mx-auto justify-center pb-20 " + className}>
      <div
        ref={containerRef}
        className="flex snap-x snap-mandatory gap-x-2 lg:gap-x-4 overflow-x-scroll"
      >
        {photos.map((photo, idx) => (
          <div key={idx} className="flex-shrink-0 snap-center">
            <Image
              src={photo}
              width={900}
              height={1200}
              alt={`Carousel photo ${idx}`}
              className="rounded h-[30rem] w-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
