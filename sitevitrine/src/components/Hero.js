const HeroBanner = () => {
  return (
    <div className="bg-gray-900">
      <div className="container mx-auto flex flex-col md:flex-row py-16 md:py-32">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">Welcome to My Website</h1>
          <p className="text-xl md:text-2xl text-gray-400 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded mt-8">Learn More</button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img src="/hero-image.jpg" alt="Hero" className="rounded-md shadow-xl" />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;