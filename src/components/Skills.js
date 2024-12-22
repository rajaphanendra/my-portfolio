"use client";

import Image from 'next/image'; // Import Next.js Image
import { motion } from 'framer-motion';

const skillsData = [
  { name: "Python", logo: "/images/python.svg" },
  { name: "Django", logo: "/images/django.svg" },
  { name: "Flask", logo: "/images/flask.png" },
  { name: "HTML", logo: "/images/html.svg" },
  { name: "CSS", logo: "/images/css.svg" },
  { name: "Bootstrap", logo: "/images/bootstrap.svg" },
  { name: "JavaScript", logo: "/images/javascript.svg" },
  { name: "React", logo: "/images/react.svg" },
  { name: "React Native", logo: "/images/react-native.svg" },
  { name: "MySQL", logo: "/images/mysql.svg" },
  { name: "MongoDB", logo: "/images/mongodb.svg" },
  { name: "Neo4j", logo: "/images/neo4j.svg" },
  { name: "Git", logo: "/images/git.svg" },
  { name: "Docker", logo: "/images/docker.svg" },
  { name: "Jenkins", logo: "/images/jenkins.svg" },
  { name: "Linux Administration", logo: "/images/linux.svg" },
  { name: "Selenium", logo: "/images/selenium.svg" },
  { name: "Pytest", logo: "/images/pytest.svg" },
  { name: "Playwright", logo: "/images/playwright.svg" },
  { name: "OpenCV", logo: "/images/opencv.svg" },
  { name: "NumPy", logo: "/images/numpy.svg" },
  { name: "Pandas", logo: "/images/pandas.svg" },
  { name: "Azure", logo: "/images/azure.svg" },
  { name: "Google Cloud", logo: "/images/google-cloud.svg" },
];

export default function Skills() {
  return (
    <section id="skills" className="p-8">
      <motion.h2 
        className="text-3xl font-bold"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {skillsData.map((skill, index) => (
          <motion.div 
            key={skill.name} 
            className="border rounded p-4 text-center hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Image 
              src={skill.logo} 
              alt={`${skill.name} logo`} 
              width={64} 
              height={64}
              className="mx-auto mb-4 transition-transform duration-300 hover:scale-110"
            />
            <h3 className="font-semibold">{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
