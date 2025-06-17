export default function CartPage({ cartItems, setCartItems }) {
  const updateQty = (id, delta) => {
    setCartItems(prev => prev.map(item =>
      item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
    ));
  };

  const deleteItem = id => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + item.qty * item.price, 0);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Total Cart Amount: ${total}</h2>
      <div className="space-y-4">
        {cartItems.map(item => (
          <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded shadow">
            <img src={item.img} alt={item.name} className="h-16 w-16 object-cover" />
            <div className="flex-1 ml-4">
              <h3 className="font-bold">{item.name}</h3>
              <p>Total: ${item.qty * item.price}</p>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => updateQty(item.id, -1)}>-</button>
              <span>{item.qty}</span>
              <button onClick={() => updateQty(item.id, 1)}>+</button>
              <button onClick={() => deleteItem(item.id)} className="text-red-600">Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex gap-4">
        <button className="bg-gray-500 text-white px-4 py-2 rounded">Continue Shopping</button>
        <button className="bg-green-600 text-white px-4 py-2 rounded">Checkout</button>
      </div>
    </div>
  );
}