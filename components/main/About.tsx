"use client";
import React from "react";
import Link from "next/link";
import Journey from "./Journey";

const About = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Developer. Designer. Dreamer. I love crafting intuitive web
            experiences.
          </p>
        </div>

        {/* Bio and Toolbox */}
        <div className="max-w-1/2 mx-auto">
          {/* Bio */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Hey! I&apos;m{" "}
              <strong className="text-purple-300">Sandeep Singh</strong>, a
              passionate frontend developer based in India 🇮🇳. I thrive at the
              intersection of design and code, crafting seamless digital
              experiences using tools like React, Next.js, and Tailwind CSS.
            </p>
            <p className="text-sm text-gray-400">
              When I&apos;m not coding, I&apos;m probably designing interfaces,
              reading about emerging tech, or playing indie games that challenge
              my logic and creativity.
            </p>
          </div>
        </div>

        {/* Workflow */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-8">
            ⚙️ My Workflow
          </h3>
          <div className="grid md:grid-cols-4 gap-6 text-sm text-gray-300">
            {[
              [
                "Research",
                "Understand the user, the problem, and the platform.",
              ],
              ["Design", "Wireframe and prototype using Figma or Pen & Paper."],
              ["Build", "Turn designs into clean code using React & Tailwind."],
              ["Iterate", "Test, deploy, collect feedback, and improve."],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-6 space-y-4 shadow-lg hover:shadow-purple-500/20 hover:border-purple-400 transition duration-300 transform hover:scale-[1.03] cursor-pointer"
              >
                <h4 className="font-semibold text-white mb-2">{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-8">
            💡 Core Values
          </h3>
          <ul className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 text-gray-300 text-center text-sm">
            {[
              ["User-First", "Build with empathy for a great user experience."],
              [
                "Pixel Perfect",
                "Every detail matters — from spacing to accessibility.",
              ],
              ["Always Learning", "Growth mindset in tech and life."],
            ].map(([title, desc]) => (
              <li
                key={title}
                className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-6 space-y-4 shadow-lg hover:shadow-purple-500/20 hover:border-purple-400 transition duration-300 transform hover:scale-[1.03] cursor-pointer"
              >
                <span className="block text-lg font-bold text-white mb-1">
                  {title}
                </span>
                {desc}
              </li>
            ))}
          </ul>
        </div>

        {/* Testimonials Placeholder */}
        <div className="text-center mt-20">
          <h3 className="text-2xl font-semibold mb-4">🗣️ What People Say</h3>
          <p className="text-gray-400 text-sm">
            <em>
              “This section will hold feedback from teammates, mentors, or
              clients.”
            </em>
          </p>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <Link
            href="/projects"
            className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition duration-300"
          >
            See My Projects 🚀
          </Link>
        </div>
      </div>
      <Journey />

    </>
  );
};

export default About;
