"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="absolute left-0 right-0 top-2 md:top-0 z-[999] w-full px-8 uppercase text-primary">
      <div className="flex w-full items-center justify-between">
        {/* Logo */}
        <div>
          <Image
            src="/images/logo.png"
            alt="logo"
            width={110}
            height={110}
            className="h-20 w-20 object-contain md:h-[110px] md:w-[110px]"
            priority
          />
        </div>

        {/* Book a Table Button */}
        <div>
          <Link href="tel:+84387400376">
            <button className="group flex items-center gap-1 rounded-full border border-primary px-3.5 py-2.5 text-[13px] uppercase leading-4 md:px-6 md:py-3 md:text-base">
              Book a table
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="max-w-0 text-[#0d0d0d] transition-all duration-500 group-hover:max-w-fit"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Fork_Knife">
                  <g>
                    <path d="M18.83,2.25a6.469,6.469,0,0,0-4.37,6.12v3.15a1.784,1.784,0,0,0,1.78,1.78h2.7v8.14a.5.5,0,0,0,.5.5.508.508,0,0,0,.5-.5V2.56a.508.508,0,0,0-.5-.5.467.467,0,0,0-.17.03ZM16.24,12.3a.781.781,0,0,1-.78-.78V8.37a5.482,5.482,0,0,1,3.48-5.1V12.3Z"></path>
                    <path d="M11.44,2.07a.5.5,0,0,0-.5.5V7.55H8.5V2.57a.5.5,0,0,0-.5-.5.5.5,0,0,0-.5.5V7.55H5.06V2.57a.5.5,0,0,0-.5-.5.5.5,0,0,0-.5.5V9.05a2.507,2.507,0,0,0,2.5,2.5H7.5v9.89a.508.508,0,0,0,.5.5.5.5,0,0,0,.5-.5V11.55h.94a2.5,2.5,0,0,0,2.5-2.5V2.57A.5.5,0,0,0,11.44,2.07Zm-.5,6.98a1.5,1.5,0,0,1-1.5,1.5H6.56a1.511,1.511,0,0,1-1.5-1.5v-.5h5.88Z"></path>
                  </g>
                </g>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
