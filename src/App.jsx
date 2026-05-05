import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#050816] text-slate-100">
      <div className="fixed inset-0 pointer-events-none bg-cosmic opacity-90" />
      <div className="relative z-10">
        <Navbar />
        <main className="mx-auto max-w-7xl px-5 pb-20 pt-24 md:px-8">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
