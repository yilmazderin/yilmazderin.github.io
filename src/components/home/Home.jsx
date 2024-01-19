import React from 'react';
import "./home.css";
import ME from '../../assets/derinpic-modified.png'
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {

    return (
        
        <section className="home container" id="home">  
                  
            <div className="intro">
              
                <img src = {ME} alt = "" className="personal-pic" />
                <h1 className="home__name">Derin Yilmaz</h1>
                <span className="home__education">I am a 4th year Software Engineering student with a passion for artificial intelligence, machine learning and big data.</span>

                <HeaderSocials />
                

                <a href='#experiences' className='btn'>Get to know me!</a>


            </div>
            
        </section>
    );
};

export default Home