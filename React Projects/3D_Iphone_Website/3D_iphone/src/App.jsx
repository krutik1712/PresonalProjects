import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import IphoneChip from "./components/IphoneChip";
import Model from "./components/Model";
import Navbar from "./components/Navbar";

export default function App() {

  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <IphoneChip />
      <Footer />
    </main>
  )
}