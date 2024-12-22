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
    <section id="about" className="p-8">
      <motion.h2 
        className="text-3xl font-bold"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      <Image 
        src="/images/profile.jpg" // Ensure the image is located in the public directory
        alt="Raja Phanendra Kumar Palacherla"
        className="mt-4 rounded-full w-32 h-32 object-cover filter grayscale hover:filter-none transition-all duration-300"
        width={128} 
        height={128} 
        priority
      />
      <motion.pre 
        className="mt-4 text-green-500 font-mono whitespace-pre-wrap"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {displayText}
      </motion.pre>
    </section>
  );
}
