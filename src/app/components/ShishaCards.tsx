"use client";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const shishas = [
  { name: "Supernova", image: "/images/h1.jpg" },
  { name: "Cyber kiwi", image: "/images/h2.jpg" },
  { name: "Needles", image: "/images/h5.jpg" },
  { name: "Cherry rock", image: "/images/h6.jpg" },
  { name: "Mango lassi", image: "/images/h7.jpg" },
  { name: "Lemonblast", image: "/images/h8.jpg" },
  { name: "Cola", image: "/images/h1.jpg" },
  { name: "Chabacco Raspberry", image: "/images/h2.jpg" },
];

export default function ShishaCards() {
  return (
    <section className="relative my-12 flex flex-col items-center gap-20 overflow-x-auto bg-white text-black">
      <div className="flex overflow-x-auto space-x-4 w-screen px-4">
        {shishas.map((item, idx) => (
          <div
            key={idx}
            className={`relative flex min-h-[200px] min-w-[400px] flex-col items-start justify-center overflow-hidden border border-black bg-white text-black lg:min-h-[455px] lg:min-w-[455px]`}
            style={{
              transform: `scale(0.8) rotate(${idx % 2 === 0 ? "-1deg" : "1deg"})`,
            }}
          >
            {/* Faded marquee background text */}
            <div className="absolute -top-20 left-0 right-0 w-full overflow-hidden">
              <Marquee speed={40} gradient={false} direction="right" className="opacity-20">
                <span className="font-josefins-regular w-full text-[200px] uppercase tracking-tight text-black/25">
                  {item.name}
                </span>
              </Marquee>
            </div>

            {/* Card Content */}
            <div className="relative z-[999] mt-12 flex w-full flex-col justify-around md:flex-row">
              {/* Left side: title + button */}
              <div className="flex flex-1 flex-col pl-10">
                <h1 className="font-josefins-regular w-full text-[55px] uppercase leading-tight tracking-tight">
                  {item.name}
                </h1>
                <Link href="tel:+84387400376">
                  <button className="mt-5 group flex items-center gap-1 rounded-full border border-black px-3.5 py-2.5 text-[13px] uppercase leading-4 md:px-6 md:py-3 md:text-base hover:bg-black hover:text-white transition">
                    Book Now
                  </button>
                </Link>
              </div>

              {/* Right side: shisha image */}
              <div className="flex flex-1 justify-center">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={400}
                  height={400}
                  className="w-[50%] object-contain md:w-[70%]"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
