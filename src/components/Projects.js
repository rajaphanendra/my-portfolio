// src/components/Projects.js
"use client"; 
import { motion } from 'framer-motion';

const projectsData = [
  { 
    title: "Digital Logbook", 
    description: `Developed a scalable, Django-based Digital Logbook System that tracks user attendance through three authentication methods: Web Login, RFID, and Face Recognition. The system stores data in a MySQL database and serves over 3000 members.

Web-based Authentication: Users log in through a web interface built with Django, HTML, CSS, and Bootstrap, with attendance recorded in real-time.

RFID-based Attendance: Arduino IDE and ESP8266 are used to read RFID tags, sending data via HTTP to the Django backend for processing and storage in the MySQL database.

Face Recognition: Utilizes OpenCV and Face_Recognition libraries to capture and match user faces, recording attendance automatically without physical contact.

This multi-method approach provides flexibility, ensuring accurate attendance tracking with minimal manual effort.`
 },
  { title: "Mirchi Mitra", description: "Description of Project Two." },
  { title: "Donation Mangement System", description: "Description of Project Three." },
  { title: "SvasthayaBot", description: "Description of Project Four." },
  { title: "Automated OCR system", description: "Description of Project Four." },
];

export default function Projects() {
  return (
    <section id="projects" className="p-8">
      <motion.h2 
        className="text-3xl font-bold"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {projectsData.map((project, index) => (
          <motion.div 
            key={project.title} 
            className="border rounded-lg p-6 bg-gray-800 text-white shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <h3 className="font-semibold text-lg mb-4 hover:underline">{project.title}</h3>
            <p className="text-sm text-gray-300">{project.description}</p>
            <div className="flex space-x-4">
              <a 
                href="https://code.swecha.org/apcc/swecha-ap-logbook"
                target="_blank"
                className="px-4 py-2 bg-blue-600 rounded text-sm font-medium hover:bg-blue-500"
              >
                Git Repo
              </a>
          </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
