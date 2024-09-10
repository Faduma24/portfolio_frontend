import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-6">
      <h1 className="text-3xl font-bold">My Portfolio</h1>
      <nav>
        <ul className="flex space-x-6 text-lg">
          <li>
            <Link to="/" className="hover:text-yellow-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/skills" className="hover:text-yellow-300">
              Skills
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-yellow-300">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-300">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
