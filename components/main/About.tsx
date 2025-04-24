"use client";

import React from "react";

const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-6 py-16">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Let me take you on a quick tour through my world as a developer, dreamer, and learner.
          </p>
        </div>

        {/* Intro + Skills */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-gray-300 leading-relaxed">
              I'm Sandeep Singh, a frontend developer based in India 🇮🇳. I discovered my passion for web development while building my first portfolio project — and haven’t stopped coding since.
              I love turning designs into functional, smooth, and scalable web apps. My main stack includes <strong className="text-purple-300">React</strong>, <strong className="text-blue-400">TypeScript</strong>, and <strong className="text-cyan-400">Tailwind CSS</strong>.
            </p>
            <p className="text-gray-400 mt-4">
              I believe in continuous learning and sharing knowledge. Whether it's contributing to open-source, collaborating with peers, or exploring the next cool UI trend — I’m all in.
            </p>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Tech Stack</h3>
            <ul className="grid grid-cols-2 gap-3 text-sm text-gray-300">
              <li className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg">React</li>
              <li className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg">Next.js</li>
              <li className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg">TypeScript</li>
              <li className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg">Tailwind CSS</li>
              <li className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg">Framer Motion</li>
              <li className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg">Firebase</li>
              <li className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg">Git & GitHub</li>
              <li className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg">AWS Basics</li>
            </ul>
          </div>
        </div>

        {/* Experience / Journey */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">My Journey So Far</h3>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I started as a curious student diving into HTML and CSS, and slowly discovered the power of JavaScript frameworks. Through personal projects, online courses, and real-world practice, I’ve grown into a confident frontend developer. I've built everything from portfolios to mini web apps, focusing on clean design and accessibility.
          </p>
        </div>

        {/* Career Vision */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">What I Aim For</h3>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My goal is to become a full-stack developer and eventually lead product UI/UX strategies. I want to work with teams that value creativity, innovation, and user-first thinking.
            I’m especially interested in building tools and platforms that make people’s lives easier.
          </p>
        </div>

        {/* Fun facts */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">Just for Fun 🎮</h3>
          <ul className="text-gray-300 space-y-2">
            <li>🎧 I code best with lofi beats or synthwave in the background.</li>
            <li>📚 I enjoy reading tech blogs and self-help books.</li>
            <li>🕹️ I’m into strategy games and indie game design.</li>
            <li>☕ I’m a firm believer that good code starts with good coffee.</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-6 py-3 rounded-full font-semibold transition duration-300 shadow-lg"
          >
            Let’s Work Together
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
