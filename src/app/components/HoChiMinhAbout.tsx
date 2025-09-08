"use client";
import Marquee from "react-fast-marquee";
import SectionTitle from "./SectionTitle";

export default function HoChiMinhAbout() {
  const phrase = "The ultimate lounge / bar vibes / hookah haven / ";

  return (
    <section className="relative flex min-h-fit w-full flex-col items-center justify-center md:min-h-screen bg-white text-black">
      {/* Scrolling text banner */}
      <div className="w-full bg-black py-3 font-semibold text-white uppercase">
        <Marquee speed={50} gradient={false} pauseOnHover={false} direction="right" >
          {Array(20).fill(phrase).join(" ")}
        </Marquee>
      </div>

      {/* Title */}
      <SectionTitle text="Why Sova Ho Chi Minh?" />

      {/* Feature list */}
      <div className="px-4 md:px-0 space-y-4 flex flex-col gap-4">
        <p className="max-w-[400px] lg:max-w-[900px] text-left text-lg lg:text-2xl font-medium text-black">
          <span className="font-bold">Iconic Owl Theme:</span> Immerse yourself in an enchanting and stylish atmosphere.
        </p>
        <p className="max-w-[400px] lg:max-w-[900px] text-left text-lg lg:text-2xl font-medium text-black">
          <span className="font-bold">Exclusive VIP Spaces:</span> Perfect for private parties and celebrations.
        </p>
        <p className="max-w-[400px] lg:max-w-[900px] text-left text-lg lg:text-2xl font-medium text-black">
          <span className="font-bold">Open Hour:</span> Open till late, offering unforgettable moments every night.
        </p>
      </div>
    </section>
  );
}
