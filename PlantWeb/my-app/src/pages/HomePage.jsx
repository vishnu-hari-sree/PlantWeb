import { plants } from '../assets/plants';
import PlantCard from '../components/PlantCard';
export default function HomePage({ addToCart }) {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Air Purifying Plants</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {plants.map(plant => (
          <PlantCard key={plant.id} plant={plant} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}