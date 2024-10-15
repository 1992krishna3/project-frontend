import React from 'react'


const FoodItem = () => {
  return (
    <div className="border p-4 rounded-lg">
      <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-lg" />
      <h2 className="text-xl font-semibold mt-2">{item.name}</h2>
      <p className="text-gray-700">${item.price}</p>
      <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
        Add to Cart
      </button>
    </div>
  );
};
   
    
export default FoodItem;
