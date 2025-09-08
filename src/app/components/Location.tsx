"use client";
import Image from "next/image";

const locations = [
  {
    city: "Da Nang",
    img: "/images/view.png", // Updated to use view.png from public/images folder
    address: "29 An Thượng 29, Bắc Mỹ Phú, Ngũ Hành Sơn, Đà Nẵng",
    phone: "+84 387 400 376",
    map: "https://goo.gl/maps/fYcc3e4V2Hn1YDPbA",
    scrollTarget: "#da-nang-section", // Scroll to Da Nang section
  },
  {
    city: "Ho Chi Minh",
    img: "/images/IMG-20250907-WA0019.jpg", // Updated to use view2.png from public/images folder
    address: "123 District 1, Ho Chi Minh City",
    phone: "+84 123 456 789",
    map: "https://goo.gl/maps/123456789", // replace with real link if you have it
    scrollTarget: "#ho-chi-minh-section", // Scroll to Ho Chi Minh section
  },
];

export default function Location() {
  return (
    <section className="relative w-full py-20 bg-white text-black">
      <h2 className="text-center uppercase text-[34px] md:text-[80px] font-bold opacity-20 mb-16">
        Our Locations
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-16">
        {locations.map((loc, idx) => (
          <div
            key={idx}
            onClick={() => {
              const element = document.querySelector(loc.scrollTarget);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer block"
          >
            {/* Background Image */}
            <Image
              src={loc.img}
              alt={loc.city}
              width={600}
              height={400}
              className="w-full h-[300px] md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500"></div>

            {/* Content */}
            <div className="absolute bottom-6 left-6 z-10">
              <h3 className="text-3xl md:text-4xl font-bold uppercase text-white drop-shadow-lg">{loc.city}</h3>
              <p className="text-sm md:text-base mt-2 max-w-xs text-white drop-shadow-md">{loc.address}</p>
              <div className="flex gap-4 mt-3">
                <a
                  href={`tel:${loc.phone}`}
                  onClick={(e) => e.stopPropagation()}
                  className="px-4 py-2 rounded-full border border-white text-white text-sm uppercase hover:bg-white hover:text-black transition"
                >
                  Call
                </a>
                <a
                  href={loc.map}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                  className="px-4 py-2 rounded-full border border-white text-white text-sm uppercase hover:bg-white hover:text-black transition"
                >
                  Map
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
