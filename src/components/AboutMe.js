"use client"; // Ensure this is the first line

import { useEffect, useState } from 'react';
import Image from 'next/image'; // Import Image component from Next.js
import { motion } from 'framer-motion'; // Import motion from framer-motion

const aboutPoints = [
  "Skills:\nJavaScript, React, Node.js, Django, Python.",
  "Experience:\nAs a Software Developer, Web Application Pentester Intern.",
  "Certifications:\nAzure Developer Associate, Aviatrix Certified Engineer.",
  // "Career Goals:\nTo become an ",
  "Personal Interests:\nOpen-source contributions, AI/ML projects, Django Projects"
];

export default function AboutMe() {
  const [displayText, setDisplayText] = useState(''); // For storing the typed-out text
  const [pointIndex, setPointIndex] = useState(0); // Index for the current point
  const [charIndex, setCharIndex] = useState(0); // Index for the current character
  const typingSpeed = 100; // Typing speed in milliseconds
  const pauseBetweenPoints = 1000; // Pause before typing the next point

  useEffect(() => {
    const currentPoint = aboutPoints[pointIndex]; // Get the current point from the array

    // If there are still characters left to type for the current point
    if (charIndex < currentPoint.length) {
      const typingTimeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentPoint[charIndex]); // Append the next character
        setCharIndex((prev) => prev + 1); // Move to the next character
      }, typingSpeed);

      // Clear timeout if the component unmounts
      return () => clearTimeout(typingTimeout);
    } else {
      // If the current point has been fully typed, wait and move to the next point
      const nextPointTimeout = setTimeout(() => {
        setDisplayText(''); // Clear the display text before the next point
        setCharIndex(0); // Reset character index
        setPointIndex((prev) => (prev + 1) % aboutPoints.length); // Cycle to the next point
      }, pauseBetweenPoints);

      return () => clearTimeout(nextPointTimeout);
    }
  }, [charIndex, pointIndex]);

  return (
    <section id="about" className="p-8 text-center bg-black text-white">
      <motion.h2 
        className="text-3xl font-bold"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

      {/* Name Section */}
      <motion.h3
        className="text-xl font-semibold mt-4 text-gray-300"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Raja Phanendra Kumar Palacherla
      </motion.h3>

      <div className="flex justify-center mt-6">
        <Image 
          src="/images/profile.jpg" // Ensure the image is located in the public directory
          alt="Raja Phanendra Kumar Palacherla"
          className="rounded-full w-40 h-40 md:w-48 md:h-48 border-4 border-gray-600 shadow-lg object-cover object-top hover:scale-105 transition-transform duration-300"
          width={192} 
          height={192} 
          priority
        />
      </div>
      
      <motion.pre 
        className="mt-6 text-green-500 font-mono whitespace-pre-wrap text-lg max-w-3xl mx-auto"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {displayText}
      </motion.pre>
    </section>
  );
}
