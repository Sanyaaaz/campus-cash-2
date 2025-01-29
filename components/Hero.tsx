import Image from "next/image";
import AnimatedLoginModal from "./ui/Login";

export default function Hero() {
  return (
    <div className="bg-[#0A0A0A] max-h-screen w-full overflow-hidden">
      <header className="top-0 left-0 w-full bg-[#0D0B14] shadow-md z-50 container mx-auto flex items-center justify-between px-14 pt-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full" />
          <span className="text-xl font-bold text-white">Connect Cash</span>
        </div>
        {/* Login Button */}
        <AnimatedLoginModal />
      </header>

      <div className="container mx-auto py-9 relative px-10">
        {/* Grid Layout for Hero Section */}
        <div className="grid md:grid-cols-2 items-center gap-8">
          {/* Left Content */}
          <div className="max-w-4xl ml-auto">
            {/* Safe Money Badge */}
            <div className="inline-flex items-center rounded-full px-4 py-2 text-sm pb-8">
              <span className="text-white">KEEP YOUR MONEY SAFE</span>
              <span className="ml-2">⚡</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-8 text-left">
              Best <span className="text-[#C1FF00]">crypto</span> <br />
              investing <span className="text-[#C1FF00]">platform</span> <br />
              <span className="text-gray-400">for your future.</span>
            </h1>

            {/* Description */}
            <div className="flex items-start space-x-4 text-gray-400 max-w-lg mb-20">
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-[#C1FF00]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
              </div>
              <p className="text-sm">
                Polkadot unites and secures a growing ecosystem of specialized
                blockchains called parachains. Apps and services on Polkadot can
                ecosystem of specialized called.
              </p>
            </div>

            {/* Bottom Section */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-white">
                  Your <span className="text-[#C1FF00]">trusted</span> partner of <br />
                  <span className="text-gray-300">cryptocurrency.</span>
                </h2>
              </div>
              <div className="text-gray-400">
                <p>
                  Polkadot unites and secures a growing ecosystem of specialized
                  blockchains called parachains. Apps and services on Polkadot
                  can ecosystem of specialized called.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content (Image) */}
          <div className="flex justify-end mt-8 md:mt-0">
            <div className="relative w-full max-w-none md:max-w-xs lg:max-w-sm">
              <Image
                src="/mobile.png" // Path to your image in the public folder
                alt="Hero Section Image"
                layout="responsive" // Ensures the image scales with container width
                width={300} // Adjust the width to fit the layout
                height={450} // Adjust the height to fit within the hero section
                className="object-cover w-full h-full" // Ensure image covers the container space
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
