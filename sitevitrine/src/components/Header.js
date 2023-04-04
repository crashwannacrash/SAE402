const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">SAE402</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#play" className="hover:text-gray-300">Jouer</a></li>
            <li><a href="#gallery" className="hover:text-gray-300">Gallerie</a></li>
            <li><a href="#infos" className="hover:text-gray-300">Informations</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
