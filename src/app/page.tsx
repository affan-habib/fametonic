
export default function Page() {
  // Feature list data for mapping
  const features = [
    "Start growing your influence right away—no waiting required!",
    "Create viral TikToks and Reels step by step with easy-to-follow lessons",
    "Use a Personal AI Worker to boost your content",
    "Learn from expert-led courses designed for aspiring influencers",
  ];

  return (
    <div className="relative w-full min-h-screen bg-[#010101]">
      {/* Top promotional banner */}
      <header className="flex w-full items-center justify-center gap-2.5 px-4 md:px-[200px] py-2.5 absolute top-0 left-0 bg-[linear-gradient(90deg,rgba(252,0,78,1)_0%,rgba(16,203,224,1)_100%)]">
        <p className="relative w-fit mt-[-1.00px] font-figtree font-normal text-[22px] tracking-[0] leading-[normal] whitespace-nowrap">
          <span className="font-extrabold text-[#00e7f9]">
            🚀 FRESH BEGINNINGS SALE
          </span>
          <span className="font-semibold text-white">:</span>
          <span className="font-bold text-white">
            {" "}
            Extra 25% OFF, Limited Spots - start your journey today
          </span>
          <span className="font-nunito font-semibold text-white">
            !
          </span>
        </p>
      </header>

      <div className="absolute w-full min-h-[724px] top-[81px] left-0">
        {/* Navigation bar */}
        <nav className="flex w-full items-start justify-between px-4 md:px-[211px] py-0 absolute top-0 left-0">
          <img
            className="relative w-[173.12px] h-[74px]"
            alt="Fametonic Logo"
            src="/Group.png"
          />

          <div className="inline-flex items-end justify-center gap-10 relative flex-[0_0_auto]">
            <a className="relative w-[76px] mt-[-1.00px] font-figtree font-semibold text-[#a9a9a9] text-lg text-center tracking-[0] leading-[normal] cursor-pointer hover:text-white transition-colors">
              About us
            </a>
            <a className="relative w-[76px] mt-[-1.00px] font-figtree font-semibold text-[#a9a9a9] text-lg text-center tracking-[0] leading-[normal] cursor-pointer hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </nav>

        {/* Main content area */}
        <div className="flex flex-col w-full max-w-[516px]  items-start gap-20 absolute top-[131px] left-4 md:left-[215px] pr-4">
          <div className="bg-transparent border-0 shadow-none">
            <div className="p-0">
              <div className="flex flex-col items-start gap-[30px] relative self-stretch w-full">
                {/* Headline section */}
                <div className="flex flex-col items-start gap-4 relative self-stretch w-full">
                  <div className="flex flex-col items-start relative self-stretch w-full">
                    <h1 className="relative self-stretch mt-[-1.00px] font-urbanist font-bold text-white text-[35px] tracking-[0] leading-[normal]">
                      Want to Turn Social Media Into a Profitable Career?
                    </h1>
                    <h2 className="relative self-stretch [text-shadow:0px_4px_4px_#fc004e] font-urbanist font-bold text-[#00e7f9] text-[35px] tracking-[0] leading-[normal]">
                      Discover your way to success with Fametonic:
                    </h2>
                  </div>

                  {/* Feature list */}
                  <div className="flex flex-col items-start gap-[13px] relative self-stretch w-full">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2.5 relative self-stretch w-full"
                      >
                        <span className="mt-[-1.00px] relative w-fit font-nunito font-medium text-white text-[22px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                          ✨
                        </span>
                        <p className="relative flex-1 mt-[-1.00px] font-figtree font-semibold text-white text-base tracking-[0] leading-[22px]">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA section */}
                <div className="flex flex-col w-[313px] items-start gap-2.5 relative">
                  <button className="flex items-center justify-center gap-2.5 px-10 py-2 relative self-stretch w-full bg-[#fc004e] rounded-[10px] shadow-[2px_2px_10px_#00e7f9] hover:bg-[#d1003f] transition-colors cursor-pointer">
                    <span className="relative w-fit font-urbanist font-bold text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                      GET STARTED
                    </span>
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.19238 6.26465C7.60266 6.67918 7.60225 7.33287 7.19141 7.74707L2.29102 12.6875C1.87768 13.1039 1.22189 13.104 0.808594 12.6875C0.607462 12.4847 0.50002 12.2157 0.5 11.9512L0.5 11.7451L0.538086 11.707C0.551454 11.6485 0.568204 11.5907 0.591797 11.5352C0.644656 11.4108 0.722378 11.2983 0.819336 11.2041L4.97949 7L0.818359 2.7959L0.819336 2.79492C0.408805 2.3804 0.4084 1.72679 0.819336 1.3125C1.23271 0.895833 1.88939 0.895784 2.30273 1.3125L2.30273 1.31348L7.19238 6.26465Z" fill="white" stroke="white"/>
                    </svg>
                  </button>

                  <p className="relative self-stretch font-figtree font-normal text-white text-xs text-center tracking-[0] leading-4">
                    1-minute quiz for personalized Insights
                  </p>
                </div>

                {/* Terms and footer */}
                <div className="flex flex-col items-center justify-center gap-3 relative self-stretch w-full">
                  <p className="relative self-stretch mt-[-1.00px] font-figtree font-medium text-[#aaaaaa] text-xs tracking-[0] leading-[normal]">
                    By clicking &quot;Get Started&quot;, you agree with Terms and
                    Conditions, Privacy Policy, Subscription Terms
                  </p>
                  <p className="relative self-stretch font-figtree font-medium text-[#aaaaaa] text-[10px] tracking-[0] leading-[normal]">
                    Fametonic 2025 � All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* App mockup image */}
        <img
          className="absolute w-[666px] h-[679px] top-[45px] right-4 md:left-[673px] object-cover hidden md:block"
          alt="Influe mobile mockup"
          src="/Influe_mobile_mockup_3 1.png"
        />
      </div>
    </div>
  );
}