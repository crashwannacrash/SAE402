import React from 'react';

const Presentation = () => {
  return (
    <div className="bg-transparent py-12">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-black mb-4 text-center">Explication du concept</h2>
        <div className="mt-2 text-black">
          <p className="text-lg text-justify">
            Dans ce jeu en réalité virtuelle, vous vous retrouvez plongés dans un labyrinthe composé de conteneurs. Votre but est simple: TROUVER et JETER les déchets dans leurs poubelles respectives situées aux quatres coins du labyrinthe.
            Tout le projet à été réalisé via THREEJS. Pour une expérience optimale, nous vous recommandons d'utiliser un casque HTC VIVE.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Presentation;