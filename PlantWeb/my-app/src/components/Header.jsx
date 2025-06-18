import { Link } from 'react-router-dom';
export default function Header({ cartCount }) {
  return (
    <header className="bg-green-600 text-white p-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="logo" className="h-8" />
        <h1 className="text-xl font-bold">Paradise Nursery</h1>
        <p className="text-sm">Where Green Meets Serenity</p>
      </div>
      <nav className="flex gap-4">
        <Link to="/home" className="hover:underline">Home</Link>
        <Link to="/cart" className="relative ">
          🛒<span className="absolute -top-3 -right-3 bg-white text-green-600 px-2 rounded-full">{cartCount}</span>
        </Link>
      </nav>
    </header>
  );
}