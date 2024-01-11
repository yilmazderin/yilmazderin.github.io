import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Experiences from './components/experiences/Experiences';
import Education from './components/education/Education';
import Portfolio from './components/portfolio/Portfolio';
import Pricing from './components/pricing/Pricing';
import Testimonials from './components/testimonials/Testimonials';
import Tools from './components/tools/Tools';
import Contact from './components/contact/Contact';
import Shapes from './components/home/Shapes'
import Project from './components/projects/Projects';


function App() {
  return (
    <>
      <Sidebar />
      <main className='main'>
        <Shapes />
        <Home />
        <Experiences />
        <Education />
        <Tools />
        <About />
      </main>
    </>
  );
}

export default App;
