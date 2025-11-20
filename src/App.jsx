import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PainPoints from "./components/PainPoints";
import Solutions from "./components/Solutions";
import Benefits from "./components/Benefits";
import Process from "./components/Process";
import SocialProof from "./components/SocialProof";
import Features from "./components/Features";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-blue-100">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <Solutions />
        <Benefits />
        <Process />
        <SocialProof />
        <Features />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
