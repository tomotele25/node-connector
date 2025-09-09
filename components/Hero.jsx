"use client";
import Image from "next/image";
import React from "react";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="w-full min-h-screen mt-20 sm:mt-20 flex flex-col-reverse sm:flex sm:flex-row items-center text-white px-8 md:px-28">
      {/* Left Content */}
      <div className="flex-1 flex flex-col justify-center gap-6">
        <h1 className="text-2xl md:text-4xl font-bold">
          Decentralized{" "}
          <span className="bg-gradient-to-r from-[#20A4F3] to-[#59F8E8] bg-clip-text text-transparent">
            wallet connection
          </span>{" "}
          nodes
        </h1>

        <p className="text-gray-300 md:w-3/4">
          A tool that enables wallets and apps to securely connect and interact,
          essential for ensuring the security and integrity of digital assets.
          Performs a comprehensive analysis of the wallet's structure and
          contents.
        </p>

        <div className="flex gap-4 mt-4">
          <button className="bg-gradient-to-r from-[#20A4F3] to-[#59F8E8] text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
            Connect
          </button>
          <button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition">
            White Paper
          </button>
        </div>

        {/* ✅ Animated Stats */}
        <div className="flex  sm:grid-cols-3 gap-6 mt-10 text-center">
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#20A4F3] to-[#59F8E8] bg-clip-text text-transparent">
              <CountUp end={250} duration={2} />+
            </h2>
            <p className="text-gray-400">Wallets Revoked</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#20A4F3] to-[#59F8E8] bg-clip-text text-transparent">
              $<CountUp end={10} duration={2} />
              M+
            </h2>
            <p className="text-gray-400">Recovered</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#20A4F3] to-[#59F8E8] bg-clip-text text-transparent">
              <CountUp end={2800} duration={2} separator="," />+
            </h2>
            <p className="text-gray-400">Users</p>
          </div>
        </div>
      </div>

      {/* Right Image with floating animation */}
      <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
        <Image
          src="/cube_img.webp"
          width={400}
          height={400}
          alt="Cube Illustration"
          className="w-96 h-96 md:w-[400px] md:h-[400px] object-contain"
          style={{
            animation: "float 2s ease-in-out infinite",
          }}
        />

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
        `}</style>
      </div>
    </section>
  );
};

export default Hero;
