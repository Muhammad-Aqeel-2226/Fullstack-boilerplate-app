const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold">PenPal</h3>
            <p className="text-gray-400 mt-2">Connect with friends across borders</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="hover:text-blue-400 transition-colors">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} PenPal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
