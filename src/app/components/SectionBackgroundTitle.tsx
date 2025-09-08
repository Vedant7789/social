"use client";
import Marquee from "react-fast-marquee";

export default function SectionBackgroundTitle({ text }: { text: string }) {
  return (
    <div className="relative w-full my-12 overflow-hidden">
      <Marquee
        speed={30}
        gradient={false}
        pauseOnHover={false}
        className="uppercase select-none pointer-events-none"
      >
        {Array(10) // repeat text multiple times so it fills both ends
          .fill(text)
          .map((t, i) => (
            <span
              key={i}
              className="mx-6 text-[34px] md:text-[100px] font-bold tracking-tight opacity-20"
            >
              {t}
            </span>
          ))}
      </Marquee>
    </div>
  );
}
