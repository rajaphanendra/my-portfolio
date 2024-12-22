"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const params = new URLSearchParams();
    params.append('entry.1429227990', formData.name); // Name field ID
    params.append('entry.1908529146', formData.email); // Email field ID
    params.append('entry.2036183091', formData.message); // Message field ID

    // Send the form data to Google Forms
    const response = await fetch('https://docs.google.com/forms/d/e/1FAIpQLSeiNLHHe-25fCCuq6OGwBifFEpyWyuI44XbYAk2cvHApw1rfw/formResponse', {
      method: 'POST',
      mode: 'no-cors', // Important to avoid CORS issues
      body: params,
    });
  
    // Since we cannot check response due to no-cors, we assume success here
    alert('Form submitted successfully!');
    setFormData({ name: '', email: '', message: '' }); // Reset the form
  };

  return (
    <section id="contact" className="p-8">
      <motion.h2 
        className="text-3xl font-bold"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        Contact
      </motion.h2>
      <motion.form 
        className="mt-4"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            className="border rounded p-2 w-full text-gray-900 bg-white"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            className="border rounded p-2 w-full text-gray-900 bg-white"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-semibold">Message</label>
          <textarea 
            id="message" 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            className="border rounded p-2 w-full text-gray-900 bg-white" 
            rows="4" 
            required
          ></textarea>
        </div>
        <motion.button 
          type="submit" 
          className="bg-blue-600 text-white font-bold py-2 px-4 rounded"
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
        >
          Send
        </motion.button>
      </motion.form>
    </section>
  );
}
