"use client";
import { useState, useEffect } from "react";
import Image from "next/image"; // Import Image from next/image

export default function ProjectMediaCarousel({ media }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!media || media.length === 0) {
    return (
      <div className="flex items-center justify-center bg-gray-700 h-64 rounded-md">
        <p className="text-gray-400">No image available</p>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % media.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? media.length - 1 : prev - 1
    );
  };

  // Auto-scroll functionality
  useEffect(() => {
    if (media.length > 1) {
      const autoScroll = setInterval(() => {
        nextImage();
      }, 3000); // Change image every 3 seconds

      // Cleanup interval on unmount
      return () => clearInterval(autoScroll);
    }
  }, [media.length]); // Re-run if media changes

  return (
    <div className="relative">
      <Image
        src={media[currentImageIndex]}
        alt={`Project Media ${currentImageIndex + 1}`}
        className="rounded-md w-full max-w-full mb-6" 
        layout="intrinsic"   // This makes the image responsive
        width={1200}           // Aspect ratio width
        height={800}           // Aspect ratio height
      />
      {media.length > 1 && (
        <>
          {/* Manual Previous Button */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-gray-600 transition"
            onClick={prevImage}
          >
            &#8249;
          </button>

          {/* Manual Next Button */}
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-gray-600 transition"
            onClick={nextImage}
          >
            &#8250;
          </button>
        </>
      )}
    </div>
  );
}