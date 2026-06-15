import { Header, Footer } from "./components/layout";
import { Hero, About, Experience, Academic, Skills, Projects, Contact } from "./components/sections";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Academic />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
