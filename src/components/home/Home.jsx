import React from 'react';
import "./home.css";
import ME from '../../assets/derin.png'
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';

const Home = () => {
    return (
        <section className="home container" id="home">
            <div className="intro">
                <img src = {ME} alt = "" className="personal-pic" />
                <h1 className="home__name">Derin Yilmaz</h1>
                <span className="home__education">I am a 3rd year Software Engineering student</span>

                <HeaderSocials />

                <a href='#contact' className='btn'>Get to know me!</a>

                <ScrollDown />
            </div>
        </section>
    )
}

export default Home