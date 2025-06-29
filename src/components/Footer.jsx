function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-20">
      <div className="max-w-6xl mx-auto px-4 text-center space-y-2">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} James Salls Roofing & Remodeling. All rights reserved.
        </p>

        {/* Phone Number */}
        <p className="text-sm">
          Call us:{" "}
          <a href="tel:8602350361" className="text-blue-400 hover:underline">
            (860) 235-0361
          </a>
        </p>

        {/* Facebook Link */}
        <p className="text-sm">
          <a
            href="https://www.facebook.com/sallsroofing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Visit us on Facebook
          </a>
        </p>

        <p className="text-sm">Built by Otis Guess</p>
      </div>
    </footer>
  );
}

export default Footer;