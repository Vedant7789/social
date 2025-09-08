"use client";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee"; // install: npm install react-fast-marquee

export default function MarqueeGallery() {
  const images = ["/images/ima1.png", "/images/ima2.png", "/images/ima3.png", "/images/ima4.png", "/images/ima5.png"];

  return (
    <section id="da-nang-section" className="relative flex min-h-fit w-full flex-col items-center justify-center md:min-h-screen bg-white text-black">
      {/* Title */}
      <span
        className="my-12 w-full text-center text-[34px] uppercase leading-tight tracking-tight md:text-[100px] text-black"
        style={{ opacity: 1, transform: "translateY(120px) scale(0.8)" }}
      >
        Da Nang&apos;s Ultimate shisha Experience
      </span>

      {/* Marquee */}
      <div className="my-12 w-full overflow-hidden">
        <Marquee speed={50} gradient={false} pauseOnHover={true}>
          {images.concat(images).map((src, idx) => (
            <div key={idx} className="mx-3" style={{ width: 280, height: 380 }}>
              <Image
                src={src}
                alt={`img${idx}`}
                width={280}
                height={380}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </Marquee>
      </div>

      {/* Description */}
      <div className="px-4 md:px-0">
        <p className="my-6 max-w-[400px] text-center text-lg lg:text-2xl lg:max-w-[700px]">
          Indulge in Indian &amp; continental flavors, signature drinks, premium
          hookah (Indian &amp; Russian hookah), and a vibrant bar scene in the
          heart of Da Nang
        </p>
      </div>

      {/* Contact Button */}
      <div className="mb-12">
        <Link href="tel:+84387400376">
          <button className="group flex items-center gap-1 rounded-full border border-black px-3.5 py-2.5 text-[13px] uppercase leading-4 md:px-6 md:py-3 md:text-base hover:bg-black hover:text-white transition">
            Contact us
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="max-w-0 text-black transition-all duration-500 group-hover:max-w-fit"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Delivery_Truck">
                <g>
                  <path d="M21.47,11.185l-1.03-1.43a2.5,2.5,0,0,0-2.03-1.05H14.03V6.565a2.5,2.5,0,0,0-2.5-2.5H4.56a2.507,2.507,0,0,0-2.5,2.5v9.94a1.5,1.5,0,0,0,1.5,1.5H4.78a2.242,2.242,0,0,0,4.44,0h5.56a2.242,2.242,0,0,0,4.44,0h1.22a1.5,1.5,0,0,0,1.5-1.5v-3.87A2.508,2.508,0,0,0,21.47,11.185ZM7,18.935a1.25,1.25,0,1,1,1.25-1.25A1.25,1.25,0,0,1,7,18.935Zm6.03-1.93H9.15a2.257,2.257,0,0,0-4.3,0H3.56a.5.5,0,0,1-.5-.5V6.565a1.5,1.5,0,0,1,1.5-1.5h6.97a1.5,1.5,0,0,1,1.5,1.5ZM17,18.935a1.25,1.25,0,1,1,1.25-1.25A1.25,1.25,0,0,1,17,18.935Zm3.94-2.43a.5.5,0,0,1-.5.5H19.15a2.257,2.257,0,0,0-4.3,0h-.82v-7.3h4.38a1.516,1.516,0,0,1,1.22.63l1.03,1.43a1.527,1.527,0,0,1,.28.87Z"></path>
                  <path d="M18.029,12.205h-2a.5.5,0,0,1,0-1h2a.5.5,0,0,1,0,1Z"></path>
                </g>
              </g>
            </svg>
          </button>
        </Link>
      </div>
    </section>
  );
}
