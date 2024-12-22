// src/components/Experience.js
"use client";

import { motion } from 'framer-motion';

const experienceData = [
  // { title: "Software Developer Intern", company: "Swecha AP", duration: "May 2021 - June 2022" },
  { title: "Web Application Pentester Intern", company: "Indian Servers", duration: "March 2020 - May 2020" },
];

export default function Experience() {
  return (
    <section id="experience" className="p-8">
      <motion.h2 
        className="text-3xl font-bold"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>
      <ul className="mt-4">
        {experienceData.map((job, index) => (
          <motion.li 
            key={job.title} 
            className="border-b py-2"
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <h3 className="font-semibold">{job.title} - <span className="text-gray-600">{job.company}</span></h3>
            <p className="text-sm text-gray-500">{job.duration}</p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
