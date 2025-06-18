export default function PlantCard({ plant, addToCart }) {
  return (
    <div className="border rounded p-4 shadow bg-white">
      <img src={plant.img} alt={plant.name} className="h-32 w-full object-cover" />
      <h2 className="text-lg font-bold mt-2">{plant.name}</h2>
      <p className="text-sm text-gray-600">{plant.desc}</p>
      <p className="text-green-600 font-semibold mt-1">${plant.price}</p>
      <button onClick={() => addToCart(plant)} className="bg-green-600 text-white mt-2 px-4 py-1 rounded">Add to Cart</button>
    </div>
  );
}
