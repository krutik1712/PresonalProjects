import React from 'react'
import Navbar from './components/Navbar'
import ItemsList from './components/ItemsList'
import Footer from './components/Footer'
function App() {
  return (
    <div className="w-full min-h-screen bg-zinc text-zinc-950">
      <Navbar />
      <ItemsList />
      <Footer />
    </div>
  )
}

export default App