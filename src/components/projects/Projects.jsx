import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './projects.css';
import Movie from '../../assets/movie.png';
import Stock from '../../assets/stock.png';
import News from '../../assets/News.png';

const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  

  const projects = [
    // Your projects here
    { title: 'Movie Recommender', image: Movie, href: 'https://github.com/yilmazderin/MovieRecommender-MachineLearningTool' },
    { title: 'News Research Tool (LLM)', image: News, href: 'https://github.com/yilmazderin/NewsResearchTool-LLMProject' },
    { title: 'Text Summarizer', image: 'path_to_image_2' },
    { title: 'Stock Price Predictor', image: Stock, href: 'https://github.com/yilmazderin/StockPredictor-DeepLearningModel' },
  ];
  
  const Projects = () => {
    return (
      <section className="projects section container" id='projects'>
        <h2 className="section__title">Projects</h2>
        <Slider {...sliderSettings}>
          {projects.map((project, index) => (
            <div key={index}>
              <a href={project.href} target="_blank" rel="noopener noreferrer">
                <h3>{project.title}</h3>
                <img src={project.image} alt={project.title} />
             </a>
            </div>
          ))}
        </Slider>
      </section>
    );
  }

export default Projects;