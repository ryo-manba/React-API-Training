import Link from "next/link";
import { FaGithub, FaTwitter } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="flex justify-between items-center p-5 bg-gray-950 text-white">
      <div className="flex items-center">
        <Link href="/" className="bg-gray-700 rounded-full p-2" aria-label="Go to Home Page">
          🐧🐤🐦
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <a
          href="https://twitter.com/ryo_manba"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://github.com/ryo-manba/react-api-training"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          <FaGithub size={24} />
        </a>
      </div>
    </header>
  );
};
