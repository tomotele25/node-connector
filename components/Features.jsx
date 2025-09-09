import React from "react";

const Features = ({ icon, headline, description }) => {
  return (
    <div className="flex flex-col  items-center text-center p-6 rounded-2xl bg-[#100f12]  transition">
      <span className=" mb-4 text-[#20A4F3]">{icon}</span>
      <h1 className="text-xl font-semibold mb-2">{headline}</h1>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default Features;
