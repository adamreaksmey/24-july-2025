import React from "react";

export const Footer = () => {
  return (
    <section className="py-14 px-6 bg-black text-white text-center">
      <h3 className="text-2xl font-semibold mb-2">
        Dive Deeper into the Story
      </h3>
      <p className="text-sm text-gray-300 mb-6">
        The war was short, but its scars remain. Learn what really happened —
        and why it matters today.
      </p>
      <a
        href="/timeline"
        className="bg-white text-black font-bold px-5 py-2 rounded-full hover:bg-gray-200 transition"
      >
        Start Exploring
      </a>
    </section>
  );
};
