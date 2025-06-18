import { Link } from 'react-router-dom';
export default function LandingPage() {
  return (
    <div className="bg-[url('/bg.jpg')] h-screen bg-cover flex items-center justify-center p-20">
      <div style={{ backgroundColor: '#333333' }}className="bg-opacity-50 text-white p-10 rounded shadow-lg">
        <h1 className="text-4xl font-bold mb-2">Welcome To Paradise Nursery</h1>
        <p className="mb-4">Welcome to Paradise Nursery, your one-stop destination for beautiful, air-purifying indoor plants that bring life, peace, and freshness into your home. From low-maintenance succulents to oxygen-boosting foliage, we offer a curated collection of plants perfect for homes, offices, and every space in between.
        <br />
        <br />
        Whether you're a seasoned plant parent or just getting started, Paradise Nursery provides healthy, handpicked plants with detailed care instructions to help them thrive. With a seamless shopping experience, secure checkout, and doorstep delivery, greening your life has never been easier.
        <br />
        <br />
        Let nature in — shop now and discover the serenity that only greenery can bring.
        <br />
        <br />
</p>
        <Link to="/home" className="bg-green-600 text-white px-6 py-2 rounded">Get Started</Link>
      </div>
    </div>
  );
}