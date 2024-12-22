// src/components/Honors.js
"use client";

import { motion } from 'framer-motion';

const honorsData = [
  "Azure Developer Associate",
  "Aviatrix Certified Engineer",
];

export default function Honors() {
  return (
    <section id="honors" className="p-8">
      <motion.h2 
        className="text-3xl font-bold"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        Honors / Extra-Curricular Activities
      </motion.h2>
      <ul className="mt-4">
        {honorsData.map((honor, index) => (
          <motion.li 
            key={honor} 
            className="border-b py-2"
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {honor}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}