import React from 'react'


const Home = () => {
    
  return (
    <div className="container mx-auto p-6">
    <h1 className="text-3xl font-semibold mb-4">Welcome to the Food Delivery App</h1>
    <p>Browse our menu and enjoy fast delivery at your doorstep!</p>
    <link to="/menu">
    <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
          View Menu
        </button>
    </link>
  </div>
  )
}

export default Home;
