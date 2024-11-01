import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav>
        <ul className="flex space-x-4">
          <li><Link target='_blank' href="/">Home</Link></li>
          <li><Link target='_blank' href="/About">About Us</Link></li>
          <li><Link target='_blank' href="/Portfolio">Portfolio</Link></li>
          <li><Link target='_blank' href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;