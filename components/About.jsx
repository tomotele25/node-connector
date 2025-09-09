import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="w-full px-6 md:px-24 py-16 text-white">
      <div className="flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            We illuminate{" "}
            <span className="bg-gradient-to-r from-[#20A4F3] to-[#59F8E8] bg-clip-text text-transparent">
              blockchain transactions
            </span>
          </h1>
          <p className="text-gray-300 leading-relaxed md:w-3/4 mx-auto md:mx-0">
            This company provides advanced blockchain forensics for major
            cryptocurrencies, using on-chain and off-chain data with expert
            analysis.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/hand.webp"
            width={600}
            height={600}
            alt="Blockchain Hand Illustration"
            className="w-72 md:w-[600px] h-auto object-contain animate-float"
          />
        </div>
      </div>

      {/* Floating Animation */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default About;
