
import FeatureSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Workflow from "./components/Workflow";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
      </div>
      <FeatureSection />
      <Workflow />

      <main className="mt-16 p-6 text-white">
        <h1 className="text-3xl font-bold">Welcome to My Website 🚀</h1>
        <p className="mt-4 text-lg">
          Ye main content hai, ab Navbar screen ke upar hi stick hoga.
        </p>
      </main>
    </>
  );
}

export default App;
