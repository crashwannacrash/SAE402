const HeroBanner = () => {
  return (
    <div className="bg-green-700">
      <div className="container mx-auto flex flex-col md:flex-row py-16 md:py-32">
        <div className="md:w-1/2 text-center items-center md:items-start md:text-left flex flex-col gap-4 mt-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">Recycling Maze</h1>
          <p className="text-xl md:text-2xl text-gray-800">Jeux intéractif en réalité virtuelle au sein d'un labyrinthe</p>
          <a href='https://mmi.unilim.fr/~lefetz1/SAE402/RenduFinal/index.html' className="bg-white hover:bg-green-900 hover:transition-all transition-all text-gray-800 hover:text-white font-semibold rounded w-max px-8 py-4 mt-8 justify-self-end">Tester le jeu</a>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 ">
          <img src="https://mmi.unilim.fr/~lefetz1/SAE402/assets/7.PNG" alt="Hero" className="rounded-md shadow-xl" />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;