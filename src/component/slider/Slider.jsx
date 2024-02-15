import React, { useState } from 'react';

const Slider = () => {
  const images = [
    "https://d41chssnpqdne.cloudfront.net/user_upload_by_module/chat_bot/files/7950892/hgdnbDHzHnlhpNqD.jpg",
    // Add more image URLs here if needed
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  return (
    <div>
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
      <button onClick={nextImage}>Next Image</button>
    </div>
  );
};

export default Slider;
