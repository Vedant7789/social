import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex h-screen w-full items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 h-full w-full">
        <Image
          src="/images/hero.webp"
          alt="hero"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "51.7% 72.2%" }} // matches original HTML positioning
        />
        <div className="absolute inset-0 z-10 h-full w-full bg-black/60"></div>
      </div>

      {/* Centered Content */}
      <div className="absolute left-1/2 top-1/2 z-[99] flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-8 text-primary">
        <h1 className="text-center text-[40px] uppercase leading-[1.1em] md:text-[100px] text-red-500">
          Elevate your senses
        </h1>
      </div>
    </section>
  );
}
