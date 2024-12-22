// src/pages/api/contact.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { name, email, message } = req.body;
  
      // Basic validation
      if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
      }
  
      // Here you can implement logic to handle the form submission.
      // For example, send an email or store data in a database.
  
      // For demonstration purposes, we'll just log the data and send a success response.
      console.log('Form submission received:', { name, email, message });
  
      // Send a success response
      return res.status(200).json({ message: 'Form submitted successfully!' });
    } else {
      // Handle any other HTTP method
      res.setHeader('Allow', ['POST']);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }  