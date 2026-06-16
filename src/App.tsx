import { Header, Footer } from "./components/layout";
import { Hero, Experience, Academic, Skills, Projects, Contact } from "./components/sections";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
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
