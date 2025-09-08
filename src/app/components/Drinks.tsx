import Image from "next/image";
import Link from "next/link";

export default function Drinks() {
  return (
    <section className="relative flex h-[450px] w-full items-center justify-center md:h-screen">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 h-full w-full">
        <Image
          src="/images/view.png"
          alt="drinks background"
          fill
          priority
          className="object-cover opacity-85"
        />
        <div className="absolute inset-0 z-10 h-full w-full bg-black/50"></div>
      </div>

      {/* Foreground Content */}
      <div className="absolute left-0 top-1/2 z-[99] flex w-full -translate-y-1/2 flex-col items-center justify-center gap-8 text-primary px-4">
        {/* Text content */}
        <div className="max-w-[400px] space-y-4 text-center text-lg leading-none lg:max-w-[900px] lg:text-2xl">
          <p className="font-bold">Signature Cocktails &amp; Drinks</p>
          <p>Sip on handcrafted cocktails tailored to your taste.</p>

          <p className="font-bold">International Fusion Cuisine</p>
          <p>Savor a selection of delectable dishes crafted to complement your experience.</p>

          <p className="font-bold">Vibrant Club Vibes</p>
          <p>Groove to live DJ performances and electrifying beats.</p>
        </div>

        {/* Button */}
        <div className="pb-0 md:pb-16">
          <Link href="tel:+84387400376">
            <button className="group flex items-center gap-1 rounded-full border border-primary px-3.5 py-2.5 text-[13px] uppercase leading-4 md:px-6 md:py-3 md:text-base">
              make the reservation
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
