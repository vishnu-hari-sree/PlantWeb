import { Link } from 'react-router-dom';
export default function LandingPage() {
  return (
    <div className="bg-[url('/bg.jpg')] h-screen bg-cover flex items-center justify-center">
      <div className="bg-black bg-opacity-50 text-white p-10 rounded shadow-lg">
        <h1 className="text-4xl font-bold mb-2">Welcome To Paradise Nursery</h1>
        <p className="mb-4">Where Green Meets Serenity</p>
        <Link to="/home" className="bg-green-600 text-white px-6 py-2 rounded">Get Started</Link>
      </div>
    </div>
  );
}