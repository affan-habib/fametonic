
"use client";

import { pageData } from '@/data/pageData';
import { useState } from 'react';
import Image from 'next/image';
import type { MenuItem } from '@/types';

export default function Page() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full min-h-screen bg-[#010101] overflow-x-hidden">
      {/* Top promotional banner */}
      <header className="flex w-full items-center justify-center gap-2.5 px-4 lg:px-8 xl:px-[200px] py-2.5 absolute top-0 left-0 bg-[linear-gradient(90deg,rgba(252,0,78,1)_0%,rgba(16,203,224,1)_100%)]">
        <p className="relative w-fit max-w-[350px] md:max-w-none mt-[-1.00px] font-figtree font-bold text-base lg:text-xl xl:text-[22px] tracking-[0] leading-[normal] text-center">
          <span className="font-extrabold text-[#00e7f9]">
            {pageData.topBanner.title}
          </span>
          <span className="font-semibold text-white">:</span>
          <span className="font-bold text-white">
            {pageData.topBanner.subtitle}
          </span>
          <span className=" font-semibold text-white">
            !
          </span>
        </p>
      </header>

      {/* Main container with max-width */}
      <div className="relative w-full max-w-7xl mx-auto min-h-[724px] top-[81px]">
        {/* Navigation bar */}
        <nav className="flex w-full items-center justify-center md:justify-between px-4 md:px-0 py-0 absolute top-0 left-0 right-0 z-10">
          <Image
            className="relative w-[105px] md:w-[173.12px] h-auto md:h-[74px] md:ml-8"
            alt={pageData.navigation.logo.alt}
            src={pageData.navigation.logo.src}
            width={173}
            height={74}
            priority
          />

          {/* Desktop menu */}
          <div className="hidden md:inline-flex items-end justify-center gap-10 relative flex-[0_0_auto] md:mr-8">
            {pageData.navigation.menuItems.map((item: MenuItem, index: number) => (
              <a key={index} href={item.href} className="relative w-[76px] mt-[-1.00px] font-figtree font-semibold text-[#a9a9a9] text-lg text-center tracking-[0] leading-[normal] cursor-pointer hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger menu */}
          <div className="md:hidden absolute right-6 top-1/2 transform -translate-y-1/2">
            <button 
              className="p-3 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Image src={pageData.hamburgerIcon} alt="Menu" width={20} height={15} />
            </button>
          </div>

          {/* Mobile menu dropdown */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full right-6 mt-2 bg-black/90 backdrop-blur-sm rounded-lg border border-gray-700 shadow-lg z-50">
              <div className="flex flex-col py-2">
                {pageData.navigation.menuItems.map((item: MenuItem, index: number) => (
                  <a 
                    key={index} 
                    href={item.href}
                    className="flex items-center justify-end gap-3 px-4 py-3 text-[#a9a9a9] hover:text-white hover:bg-white/10 transition-colors font-figtree font-semibold text-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>{item.label}</span>
                    <Image src="/chevron-right.svg" alt="Chevron" width={16} height={16} />
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Main content area */}
        <div className="flex flex-col w-full max-w-[516px] items-center md:items-start gap-20 absolute top-[320px] md:top-[131px] left-0 right-0 md:left-8 md:right-auto mx-auto md:mx-0 px-4 md:px-0">
          <div className="bg-transparent border-0 shadow-none">
            <div className="p-0">
              <div className="flex flex-col items-center md:items-start gap-[30px] relative self-stretch w-full z-10">
                {/* Headline section */}
                <div className="flex flex-col items-center md:items-start gap-4 relative self-stretch w-full">
                  <div className="flex flex-col items-center md:items-start relative self-stretch w-full">
                    <h1 className="relative self-stretch mt-[-1.00px] font-urbanist font-bold text-white text-[25px] md:text-[35px] tracking-[0] leading-[normal] text-center md:text-left">
                      <span className="block md:inline">Want to Turn Social Media Into</span>
                      <span className="block md:inline"> a Profitable Career?</span>
                    </h1>
                    <h2 className="relative self-stretch [text-shadow:0px_4px_4px_#fc004e] font-urbanist font-bold text-[#00e7f9] text-[25px] md:text-[35px] tracking-[0] leading-[normal] text-center md:text-left">
                      <span className="block md:inline">Discover your way to success</span>
                      <span className="block md:inline"> with Fametonic:</span>
                    </h2>
                  </div>

                  {/* Feature list */}
                  <div className="flex flex-col items-start gap-[13px] relative self-stretch w-full">
                    {pageData.mainContent.features.map((feature: string, index: number) => (
                      <div
                        key={index}
                        className="flex items-center gap-2.5 relative self-stretch w-full"
                      >
                        <span className="mt-[-1.00px] relative w-fit  font-medium text-white text-[22px] text-center tracking-[0] leading-[normal]">
                          ✨
                        </span>
                        <p className="relative flex-1 mt-[-1.00px] font-figtree font-semibold text-white text-base tracking-[0] leading-[22px]">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Terms and footer - Mobile: above button */}
                <div className="flex md:hidden flex-col items-center justify-center gap-3 relative self-stretch w-full">
                  <p className="relative self-stretch mt-[-1.00px] font-figtree font-medium text-[#aaaaaa] text-[12px] tracking-[0] leading-[normal] text-center">
                    {pageData.mainContent.footer.terms}
                  </p>
                  <p className="relative self-stretch font-figtree font-medium text-[#aaaaaa] text-[12px] tracking-[0] leading-[normal] text-center">
                    {pageData.mainContent.footer.copyright}
                  </p>
                </div>

                {/* CTA section */}
                <div className="flex flex-col w-full max-w-[313px] items-center md:items-start gap-2.5 relative">
                  <button className="flex items-center justify-center gap-2.5 px-10 py-2 relative w-full bg-[#fc004e] rounded-[10px] shadow-[2px_2px_10px_#00e7f9] hover:bg-[#d1003f] transition-colors cursor-pointer">
                    <span className="relative w-fit font-urbanist font-bold text-white text-xl tracking-[0] leading-[normal]">
                      {pageData.mainContent.cta.buttonText}
                    </span>
                    <Image src={pageData.mainContent.cta.arrowIcon} alt="Arrow" width={8} height={14} />
                  </button>

                  <p className="relative w-full font-figtree font-normal text-white text-xs text-center md:text-left tracking-[0] leading-4">
                    {pageData.mainContent.cta.description}
                  </p>
                </div>

                {/* Terms and footer - Desktop: below button */}
                <div className="hidden md:flex flex-col items-center justify-center gap-3 relative self-stretch w-full">
                  <p className="relative self-stretch mt-[-1.00px] font-figtree font-medium text-[#aaaaaa] text-[12px] tracking-[0] leading-[normal] text-center md:text-left">
                    {pageData.mainContent.footer.terms}
                  </p>
                  <p className="relative self-stretch font-figtree font-medium text-[#aaaaaa] text-[12px] tracking-[0] leading-[normal] text-center md:text-left">
                    {pageData.mainContent.footer.copyright}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile app mockup image */}
        <Image
          className="absolute w-[280px] max-w-[calc(100vw-2rem)] h-auto top-[50px] left-1/2 transform -translate-x-1/2 object-cover block md:hidden z-0"
          alt={pageData.images.mockup.alt}
          src={pageData.images.mockup.src}
          width={280}
          height={400}
          priority
        />

        {/* Background blurred image - only when overlapping (md to lg breakpoint) */}
        <div className="absolute inset-0 hidden md:block lg:hidden z-0">
          <Image
            className="absolute w-full h-full object-cover opacity-20 blur-sm"
            alt={pageData.images.mockup.alt}
            src={pageData.images.mockup.src}
            width={666}
            height={679}
            priority
          />
        </div>
        
        {/* Desktop app mockup image - clear image when no overlap */}
        <Image
          className="absolute w-[666px] h-[679px] top-[45px] right-0 object-cover hidden lg:block z-1"
          alt={pageData.images.mockup.alt}
          src={pageData.images.mockup.src}
          width={666}
          height={679}
          priority
        />
      </div>
    </div>
  );
}