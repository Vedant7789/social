import Link from "next/link";
import SectionTitle from "./SectionTitle";

export default function HoChiMinhContact() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center bg-secondary pb-7 text-primary">
      {/* Background Title */}
      <SectionTitle text="get in touch" />

      {/* Intro paragraph */}
      <div className="mb-4 mt-24 px-4 md:mt-12 md:px-0">
        <p className="mt-[-60px] max-w-[400px] text-center text-lg font-medium tracking-tight">
          Got questions, feedback, or just want to say hi? We&apos;d love to hear
          from you! Whether it&apos;s about our menu, location, or anything else,
          don&apos;t hesitate to reach out.
        </p>
      </div>

      {/* Contact Details */}
      <div className="mt-8 flex w-full flex-col items-center justify-around gap-12 px-3 text-center uppercase sm:my-6 sm:flex-row md:items-start">
        {/* Contacts */}
        <div className="flex flex-1 flex-col gap-4">
          <h1 className="font-josefins-regular text-5xl leading-tight">Contacts</h1>
          <Link
            href="https://www.google.com/maps/dir/sova+lounge+ho+chi+minh/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x317529292e8d3dd1:0x15f8fe4cf98739e8"
            target="_blank"
            className="text-[14px] leading-[1.6em] tracking-tight hover:underline"
          >
            123 District 1, Ho Chi Minh City,
            <br /> Vietnam
          </Link>
          <Link
            href="tel:+84123456789"
            className="text-[14px] leading-[1.6em] tracking-tight hover:underline"
          >
            +84 123 456 789
          </Link>
        </div>

        {/* Opening Hours */}
        <div className="flex flex-1 flex-col gap-4">
          <h1 className="font-josefins-regular text-5xl leading-tight">Opening Hours</h1>
          <p className="text-[14px] leading-[1.6em] tracking-tight">Open Daily: 6PM - 2AM</p>
        </div>

        {/* Social */}
        <div className="flex flex-1 flex-col gap-4">
          <h1 className="font-josefins-regular text-5xl leading-tight">Social</h1>
          <Link
            href="https://www.instagram.com/sova_social/"
            target="_blank"
            className="text-[14px] leading-[1.6em] tracking-tight hover:underline"
          >
            Instagram
          </Link>
          <Link
            href="https://x.com/sova_social"
            target="_blank"
            className="text-[14px] leading-[1.6em] tracking-tight hover:underline"
          >
            X (Twitter)
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="mb-4 mt-6 h-[1px] w-[85%] bg-primary md:mb-6 md:mt-12"></div>

      {/* Footer */}
      <div className="flex w-[85%] flex-col items-center justify-between gap-y-1 text-sm md:flex-row md:text-base">
        <span>® 2024 All Rights are reserved</span>
      </div>
    </section>
  );
}
