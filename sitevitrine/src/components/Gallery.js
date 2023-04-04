import React, { useState } from 'react';

const ImageGrid = () => {
  const images = [
    {
      id: 1,
      src: 'https://mmi.unilim.fr/~lefetz1/SAE402/assets/1.jpg',
      alt: 'Image 1',
      description: 'Code du projet n°1'
    },
    {
      id: 2,
      src: 'https://mmi.unilim.fr/~lefetz1/SAE402/assets/4.jpg',
      alt: 'Image 2',
      description: 'Collaborateur n°1'
    },
    {
      id: 3,
      src: 'https://mmi.unilim.fr/~lefetz1/SAE402/assets/3.jpg',
      alt: 'Image 3',
      description: 'Prototype du labyrinthe'
    },
    {
      id: 4,
      src: 'https://mmi.unilim.fr/~lefetz1/SAE402/assets/6.jpg',
      alt: 'Image 4',
      description: 'Lieu de réalisation du projet'
    },
    {
      id: 5,
      src: 'https://mmi.unilim.fr/~lefetz1/SAE402/assets/2.jpg',
      alt: 'Image 5',
      description: 'Code du projet n°2'
    },
    {
      id: 6,
      src: 'https://mmi.unilim.fr/~lefetz1/SAE402/assets/5.jpg',
      alt: 'Image 6',
      description: 'Collaborateur n°2'
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
                <img src={image.src} alt={image.alt} className="w-full h-auto transition-all" />
                {activeImageId === image.id && (
                <div className="absolute bottom-0 left-0 h-full w-full p-4 bg-gray-800 bg-opacity-75 flex items-center justify-center">
                    <p className='font-bold md:text-lg text-center text-white'>{image.description}</p>
                </div>
                )}
            </div>
            ))}
        </div>
    </div>
    );
};

export default ImageGrid;