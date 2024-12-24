// src/components/Projects.js
"use client"; 
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from "react";

import ProjectMediaCarousel from "./ProjectMediaCarousel";



export default function Projects() {
  const projectsData = [
    { 
      title: "Digital Logbook", 
      description: `Developed a scalable, Django-based Digital Logbook System that tracks user attendance through three authentication methods: Web Login, RFID, 
        and Face Recognition. The system stores data in a MySQL database and serves over 3000 members.Web-based Authentication: Users log in through a web 
        interface built with Django, HTML, CSS, and Bootstrap, with attendance recorded in real-time. RFID-based Attendance: Arduino IDE and ESP8266 are used to 
        read RFID tags, sending data via HTTP to the Django backend for processing and storage in the MySQL database.Face Recognition: Utilizes OpenCV and 
        Face_Recognition libraries to capture and match user faces, recording attendance automatically without physical contact.This multi-method approach 
        provides flexibility, ensuring accurate attendance tracking with minimal manual effort.`,
      techStack: ["Django", "Python", "MySQL", "Arduino IDE", "OpenCV"],
      features: [
        "Web-based Authentication",
        "RFID-based Attendance Tracking",
        "Face Recognition for Automated Attendance",
      ],
      githubLink: "https://code.swecha.org/apcc/swecha-ap-logbook",
      media: [
        "/images/digital-logbook.png",
        "/images/digital-logbook-2.png",
        "/images/digital-logbook-3.png",
        "/images/digital-logbook-4.png"
      ],
    },
    { 
      title: "Precision Agriculture: Mirchi Mitra", 
      description: `Precision Agriculture: Mirchi Mitra Collaborated on a DST-funded research project to develop Mirchi Mitra, a Flutter-based mobile application 
        tailored for red chili farmers in Piduguralla Mandal, Andhra Pradesh. Designed with accessibility in mind, the app supports the farmer's native language 
        and leverages voice and image inputs to simplify precision farming practices. The project contributed to over 60% improvement in red chili yields in Asia’s 
        largest dried red chili market. This project exemplifies how technology can bridge the gap between traditional farming methods and modern precision 
        agriculture, enabling better crop management, improved yield quality, and sustainable financial growth for farmers.`,
      techStack: ["Flutter", "Dart", "Firebase",],
      features: [
        "Disease Identification: Enables farmers to upload crop images and voice messages for analysis by agricultural experts, providing actionable feedback on crop health", 
        "Localized Crop Information: Offers curated details about chili crop varieties and potential diseases, covering all growth stages from seeding to harvest.", 
        "Pesticide Calculator: Helps farmers calculate the exact pesticide quantities required based on acreage inputs.",
        "Market Integration: Provides real-time access to National Agriculture Market prices, empowering farmers to make informed decisions on selling crops.",
        "User-Friendly Access: Secures authentication via mobile OTP for seamless user onboarding.",
      ],
      githubLink:
      "https://www.indiascienceandtechnology.gov.in/research/precision-farming-and-value-addition-scheduled-caste-population-piduguralla-mandal-guntur-district",
      // media: [
      //   "/images/mm_1.jpg",
      // ],
    },
    { 
      title: "Donation Mangement System", 
      description: `Developed a web-based application to address hunger by streamlining food donations and meal distribution. 
        The system connects donors, administrators, and recipients to ensure the effective utilization of food resources while adhering to safety standards.
        This project aims to alleviate hunger by leveraging technology to coordinate food donations, maintain inventory, and distribute meals effectively to those in need.`,
      techStack: ["Django", "Python", "MongoDB"],
      features: [
        "Donor Management: Enables donors to register, log in, and contribute packaged food. Tracks donated items and notifies donors upon request acceptance.",
        "Food Bank Administration: Allows administrators to manage food inventory, categorize items based on expiration, and oversee donation operations to minimize waste.",
        `Meal Preparation & Distribution: Utilizes donated items to prepare meals, following FIFO (First In, First Out) principles.
         Ensures meals are distributed efficiently based on recipient requests.`,
        "Recipient Module: Allows recipients to register, log in, and request food. Maintains contact details for seamless delivery and future assistance.",
        "Request Tracking: Tracks the preparation, expiration, and delivery status of meals, updating inventory in real-time.",
      ],
      githubLink: "https://github.com/rajaphanendra/food_bank",
      // media: ["/images/donation-management.jpg"],
    },
    { 
      title: "Healthcare Chat Bot: SvasthayaBot", 
      description: `SvasthayaBot bridges the gap between healthcare services and underserved communities, providing accessible, accurate, and timely medical guidance.
        It highlights the potential of AI in democratizing healthcare and empowering users with critical information. Secured Second Prize in the internal 
        Smart India Hackathon (SIH) competition for developing SvasthayaBot, an AI-driven healthcare chatbot designed to provide real-time health advice, precautions,
        and reliable information to a diverse user base.`,
      techStack: ["BotPress", "Node.js"],
      features: [
        "AI-Driven Insights: Delivers accurate health advice and guidance based on user input.",
        "Wide Accessibility: Engages over 1,000+ daily active users, offering round-the-clock assistance.",
        "Critical Support During COVID-19: Played a significant role in disseminating healthcare information during the pandemic.",
      ],
    },
    { 
      title: "Automated OCR system", 
      description: `Developed an Automated OCR System leveraging Tesseract OCR, pdf2image, and Python to streamline the extraction of text from business receipts 
        for enhanced data processing and analysis. This project significantly reduces manual effort, minimizes errors in data entry, and accelerates workflows for 
        businesses that handle large volumes of receipts, enhancing operational efficiency and accuracy.`,
      techStack: ["Tesseract OCR", "pdf2image", "Python"],
      features: [
        "Receipt Processing: Specially designed for business receipts from vendors such as US Foods and Sysco, accurately extracting critical details like product information and pricing",
        "Text Extraction Pipeline: Converts receipt images or PDFs into structured text data using a combination of pdf2image for PDF rendering and Tesseract OCR for text recognition.",
        "High Accuracy in Extraction: Configured OCR settings for improved accuracy, even in receipts with complex layouts, varying fonts, or noisy backgrounds.", 
        "Data Structuring and Analysis: Parses extracted text into structured formats (e.g., CSV, JSON) for easy integration with downstream systems or business applications.",
        "Error Handling: Implemented fallback mechanisms for edge cases such as incomplete data or low-quality images.",
        "Scalability: Capable of processing bulk receipts efficiently, making it suitable for business operations requiring high-volume data extraction.",
      ],
      githubLink: "https://github.com/rajaphanendra/Invoice_OCR",
    },
  ];

  const [activeProject, setActiveProject] = useState(null);

  const handleProjectClick = (index) => {
    setActiveProject(index);
  };

  const handleClose = () => {
    setActiveProject(null);
  };

  const nextProject = () => {
    setActiveProject((prev) =>
      prev === projectsData.length - 1 ? 0 : prev + 1
    );
  };

  const previousProject = () => {
    setActiveProject((prev) =>
      prev === 0 ? projectsData.length - 1 : prev - 1
    );
  };


  return (
    <section id="projects" className="p-8">
      <motion.h2
        className="text-3xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>

      {/* Project Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="p-4 bg-gray-800 text-white rounded-md shadow-md hover:shadow-lg dark:bg-gray-800 dark:text-white"
            onClick={() => handleProjectClick(index)}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-2 text-gray-300">{project.description.slice(0, 60)}...</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Full-Screen Slider */}
      <AnimatePresence>
        {activeProject !== null && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose} // Close when clicking outside
          >
            <div
              className="relative w-11/12 md:w-3/4 bg-gray-800 rounded-md p-6 text-white shadow-lg overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Correctly Positioned Sticky Close Button */}
              <button
                className="absolute top-4 right-4 bg-blue-500 text-white rounded-full w-10 h-10 flex 
                  items-center justify-center shadow-md hover:bg-blue-600 transition z-50"
                style={{ position: "sticky", marginLeft: "auto", top: 0, right: 0 }}
                onClick={handleClose}
              >
                &times;
              </button>

              {/* Render ProjectMediaCarousel only if media exists */}
              {projectsData[activeProject].media && (
                <ProjectMediaCarousel
                  media={projectsData[activeProject].media}
                />
              )}

              {/* Project Title */}
              <h3 className="text-2xl font-bold">{projectsData[activeProject].title}</h3>
              <p className="mt-4">{projectsData[activeProject].description}</p>

              {/* Tech Stack */}
              <h4 className="text-lg font-semibold mt-6">Tech Stack:</h4>
              <ul className="flex flex-wrap gap-2 mt-2">
                {projectsData[activeProject].techStack.map((tech, idx) => (
                  <li
                    key={idx}
                    className="bg-gray-700 px-2 py-1 rounded text-sm"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              {/* Features */}
              <h4 className="text-lg font-semibold mt-6">Features:</h4>
              <ul className="list-disc list-inside mt-2">
                {projectsData[activeProject].features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>

              {/* Render GitHub Link only if it exists */}
              {projectsData[activeProject].githubLink && (
                <a
                  href={projectsData[activeProject].githubLink}
                  target="_blank"
                  className="text-blue-400 mt-6 block hover:underline"
                >
                  Project Link
                </a>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <button
                  className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600"
                  onClick={previousProject}
                >
                  Previous
                </button>
                <button
                  className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600"
                  onClick={nextProject}
                >
                  Next
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
