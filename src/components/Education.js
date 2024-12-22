// src/components/Education.js
"use client"; 

import { motion } from 'framer-motion';

const educationData = [
  { degree: "Master of Science in Computer Science", institution: "University of Central Missouri", duration: "2022 - 2024" },
  { degree: "Bachelor of Technology in Computer Science and Engineering", institution: "K L University", duration: "2018 - 2022" },
];

export default function Education() {
  return (
    <section id="education" className="p-8">
      <motion.h2 
        className="text-3xl font-bold"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        Education
      </motion.h2>
      <ul className="mt-4">
        {educationData.map((edu, index) => (
          <motion.li 
            key={edu.degree} 
            className="border-b py-2"
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <h3 className="font-semibold">{edu.degree} - <span className="text-gray-600">{edu.institution}</span></h3>
            <p className="text-sm text-gray-500">{edu.duration}</p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
