import React from 'react';

const RecyclingVideo = () => {
  return (
    <div className="bg-gray-900 py-12">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-white mb-4">Trier ses déchets : c'est simple et utile !</h2>
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        <iframe 
            width="560" 
            height="315" 
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/MIbHGAFEWts" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen
        ></iframe>
      </div>
        <div className="mt-8 text-white">
          <p className="text-lg">
            Trier ses déchets est essentiel pour préserver notre environnement. En recyclant les matériaux comme le papier, le carton, le verre ou le plastique, nous réduisons la quantité de déchets envoyés en décharge, ce qui permet d'économiser des ressources naturelles et de réduire les émissions de gaz à effet de serre.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecyclingVideo;
