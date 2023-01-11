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
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Shapes from './components/home/Shapes'


function App() {
  return (
    <>
      <Sidebar />
      <main className='main'>
        <Shapes />
        <Home />
        <Experiences />
        <Education />
        <About />
      </main>
    </>
  );
}

export default App;
