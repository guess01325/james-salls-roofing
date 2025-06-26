import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icon set (can use Heroicons too)

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-800">
          James Salls Roofing
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
          <Link to="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
          <Link to="/gallery" className="text-gray-700 hover:text-blue-600">Gallery</Link>
          <Link to="/testimonials" className="text-gray-700 hover:text-blue-600">Testimonials</Link>
          <Link to="/contact" className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
            Contact
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 bg-white shadow">
          <Link to="/" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/services" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/gallery" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Gallery</Link>
          <Link to="/testimonials" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Testimonials</Link>
          <Link to="/contact" className="block text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;