import React, { useState } from 'react';

const ImageGrid = () => {
  const images = [
    {
      id: 1,
      src: 'https://mmi.unilim.fr/~lefetz1/SAE402/assets/1.jpg',
      alt: 'Image 1',
      description: 'Description de l\'image 1'
    },
    {
      id: 2,
      src: 'https://mmi.unilim.fr/~lefetz1/SAE402/assets/4.jpg',
      alt: 'Image 2',
      description: 'Description de l\'image 2'
    },
    {
      id: 3,
      src: 'https://mmi.unilim.fr/~lefetz1/SAE402/assets/3.jpg',
      alt: 'Image 3',
      description: 'Description de l\'image 3'
    },
    {
      id: 4,
      src: 'https://mmi.unilim.fr/~lefetz1/SAE402/assets/6.jpg',
      alt: 'Image 4',
      description: 'Description de l\'image 4'
    },
    {
      id: 5,
      src: 'https://mmi.unilim.fr/~lefetz1/SAE402/assets/2.jpg',
      alt: 'Image 5',
      description: 'Description de l\'image 5'
    },
    {
      id: 6,
      src: 'https://mmi.unilim.fr/~lefetz1/SAE402/assets/5.jpg',
      alt: 'Image 6',
      description: 'Description de l\'image 6'
    }
  ];

  const [activeImageId, setActiveImageId] = useState(null);
  return (
    <div className="container mx-auto py-12 ">
        <div className="grid grid-cols-3 gap-8">
            {images.map((image) => (
            <div
                key={image.id}
                className="relative"
                onMouseEnter={() => setActiveImageId(image.id)}
                onMouseLeave={() => setActiveImageId(null)}
            >
                <img src={image.src} alt={image.alt} className="w-full h-auto" />
                {activeImageId === image.id && (
                <div className="absolute bottom-0 left-0 w-full p-4 bg-white bg-opacity-75">
                    <p>{image.description}</p>
                </div>
                )}
            </div>
            ))}
        </div>
    </div>
    );
};

export default ImageGrid;