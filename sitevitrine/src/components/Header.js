const Header = () => {
  return (
    <header className="bg-green-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">SAE402</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="https://mmi.unilim.fr/~lefetz1/SAE402/RenduFinal/index.html" className="hover:text-gray-300">Jouer</a></li>
            <li><a href="https://mmi.unilim.fr/~lefetz1/SAE402/assets/" className="hover:text-gray-300">Assets</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
