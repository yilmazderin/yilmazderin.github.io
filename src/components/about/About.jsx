import React from 'react';
import "./about.css";
import Aboutme from '../../assets/dyilmaz.png'

const About = () => {
    return (
        <section className="about section container" id='about'>
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">

                <img src={Aboutme} alt="" className="about__img" />
                <div className="about__data grid">
                    <div className="about__info">
                    </div>

                    <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Hey everyone! Thanks for check ouy my website :)</h3>
                                <span className="skills_number development">I am currently in my third year at Western University, studying Software Engineering with a minor in Mathematics. Some of my favourite hobbies include travelling the world, finding new music (I attatched my favourite playlist below) and learning new songs on the guitar. If you have any questions feel free to message me on my LinkedIn or sending me an email at yilmaz2002derin@gmail.com . I hope you have an amazing day!</span>
                            </div>
                            <a href="" className="btn">Download Resume</a>
                        </div>
                    </div>                    
                </div>
            </div>
            <h3 className="playlist">Here's what I am listening to: </h3>
            <iframe classname= "playlist__song" src="https://open.spotify.com/embed/playlist/753Lh5cWKzjRyJflxRvrG4?theme=0" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </section>
    )
}

export default About