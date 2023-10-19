import React from 'react';
import "./home.css";
import ME from '../../assets/derin.png'
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    const words = [
        { text: 'Machine Learning',rotation: 'rotate(-10deg)', fontSize: '24px', className: 's1',scale: 'scale(1)' },
        { text: 'Artificial Intelligence', rotation: 'rotate(15deg)', fontSize: '30px', className: 's2', scale: 'scale(1)' },
        { text: 'Python', rotation: 'rotate(-20deg)', fontSize: '28px', className: 's3', scale: 'scale(1)' },
        { text: 'Data Science', rotation: 'rotate(-5deg)', fontSize: '28px', className: 's4', scale: 'scale(1)' },
        { text: 'Big Data', rotation: 'rotate(-5deg)', fontSize: '28px', className: 's5', scale: 'scale(1)' },
        { text: 'Linear Regression', rotation: 'rotate(5deg)', fontSize: '28px', className: 's6', scale: 'scale(1)' },
        { text: 'Classification', rotation: 'rotate(5deg)', fontSize: '28px', className: 's7', scale: 'scale(1)' },
        { text: 'Natural Language Processing', rotation: 'rotate(25deg)', fontSize: '28px', className: 's8', scale: 'scale(1)' },
        { text: 'Software Engineer', rotation: 'rotate(5deg)', fontSize: '28px', className: 's9', scale: 'scale(1)' },
        { text: 'Neural Networks', rotation: 'rotate(5deg)', fontSize: '28px', className: 's10', scale: 'scale(1)' },
        { text: 'Supervised Learning', rotation: 'rotate(5deg)', fontSize: '28px', className: 's11', scale: 'scale(1)' },
      ];

    return (
        
        <section className="home container" id="home">  
                  
            <div className="intro">
              
                <img src = {ME} alt = "" className="personal-pic" />
                <h1 className="home__name">Derin Yilmaz</h1>
                <span className="home__education">I am a 4th year Software Engineering student with a passion for artificial intelligence, machine learning and big data.</span>

                <HeaderSocials />
                

                <a href='#experiences' className='btn'>Get to know me!</a>

                <ScrollDown />
            </div>
            
        </section>
    );
};

export default Home