import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex h-screen w-full items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        {/* Mobile Background */}
        <div className="block md:hidden relative h-full w-full">
  <Image
    src="/images/bgmobile.png"
    alt="Hero mobile"
    fill
    priority
    className="object-cover object-center transition-transform duration-500"
  />
</div>

        {/* Desktop Background */}
        <div className="hidden md:block relative h-full w-full">
          <Image
            src="/images/websiteBg.png"
            alt="Hero desktop"
            fill
            priority
            className="object-cover object-center transition-transform duration-500"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 z-10 h-full w-full bg-black/60"></div>
      </div>

      {/* Centered Content */}
      <div className="absolute left-1/2 top-1/2 z-[99] flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-8 text-primary">
      <h1 className="relative text-center text-[25px] uppercase leading-[1.1em] md:text-[100px] text-red-500">
  <span className="relative z-10">Elevate your senses</span>
  {/* Red strike-through line */}
  <span className="absolute left-1/2 top-1/2 h-[3px] md:h-[8px] w-[115%] -translate-x-1/2 -translate-y-[87%] bg-red-500"></span>
</h1>




      </div>
    </section>
  );
}
