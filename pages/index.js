"use client";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Geist, Geist_Mono } from "next/font/google";
import { useEffect, useRef } from "react";
import {
  CheckCircle,
  Undo2,
  Layers,
  Shuffle,
  Gift,
  ShieldCheck,
  Fuel,
  ListChecks,
  Wrench,
  ArrowLeftRight,
} from "lucide-react";
import About from "@/components/About";
import Form from "@/components/Form";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const stars = [];
    const numStars = 600; // 🔥 Increased stars so screen is fully filled

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * w - w / 2,
        y: Math.random() * h - h / 2,
        z: Math.random() * w,
      });
    }

    function animate() {
      ctx.fillStyle = "#0a0914";
      ctx.fillRect(0, 0, w, h);

      for (let i = 0; i < numStars; i++) {
        let star = stars[i];
        star.z -= 2;
        if (star.z <= 0) {
          star.x = Math.random() * w - w / 2;
          star.y = Math.random() * h - h / 2;
          star.z = w;
        }

        const k = 128.0 / star.z;
        const px = star.x * k + w / 2;
        const py = star.y * k + h / 2;

        if (px >= 0 && px <= w && py >= 0 && py <= h) {
          const size = (1 - star.z / w) * 2.5;

          ctx.beginPath();
          ctx.arc(px, py, size, 0, 2 * Math.PI);

          // ✨ Twinkling effect (brightness changes)
          const brightness = Math.random() * 255;
          ctx.fillStyle = `rgb(${brightness}, ${brightness}, ${brightness})`;
          ctx.fill();
        }
      }

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`relative min-h-screen w-full ${geistSans.className} ${geistMono.className} font-[family-name:var(--font-geist-sans)]`}
    >
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full -z-10"
      />
      <Navbar />
      <Hero />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 sm:px-28 px-5">
        <Features
          icon={<CheckCircle size={50} />}
          headline="VALIDATIONS & APPROVALS"
          description="Access portfolio and transactions across multiple hardware wallets, portfolio changes and all connected dapps."
        />
        <Features
          icon={<Undo2 size={50} />}
          headline="RECOVERY"
          description="See where your assets move to and revoke access to malicious contracts and interactions."
        />
        <Features
          icon={<Layers size={50} />}
          headline="STAKING AND NFT REVIEW"
          description="Having complete control of your staking portfolio, staking rewards and NFT portfolio across all chains."
        />
        <Features
          icon={<Shuffle size={50} />}
          headline="CROSS BRIDGE"
          description="Utilizing Cosmos SDK for secure cross-chain asset bridging between Layer 1s and Layer 2s. Bridge assets multichain and check status of all bridge assets."
        />
        <Features
          icon={<Gift size={50} />}
          headline="CLAIM AIRDROP"
          description="Claim various distributed tokens across various protocols and blockchains with a single click."
        />
        <Features
          icon={<ShieldCheck size={50} />}
          headline="AUTHENTICATION"
          description="Authenticate your wallets with blockchains servers to avoid failed transactions and loss of funds."
        />
        <Features
          icon={<Fuel size={50} />}
          headline="GAS RETRIEVAL"
          description="Retrieve all unused gas fees on different chains and claim them back to your wallet, allows you view all unused gas fees across different protocols."
        />
        <Features
          icon={<ListChecks size={50} />}
          headline="WHITELISTS"
          description="View projects that you can get whitelisted on and their criteria to be an early adopter."
        />
        <Features
          icon={<Wrench size={50} />}
          headline="RECTIFICATION"
          description="Recovery wallet Dapps with Blockchain and DeFi."
        />
        <Features
          icon={<ArrowLeftRight size={50} />}
          headline="MIGRATION"
          description="Migrate tokens in and out of a contract and migrate across different chains."
        />
      </div>
      <About />
      <Form />
    </div>
  );
}
