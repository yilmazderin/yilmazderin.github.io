import React from 'react';
import "./about.css";
import Aboutme from '../../assets/avatar-2.svg'

const About = () => {
    return (
        <section className="about section container" id='about'>
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">

                <img src={Aboutme} alt="" className="about__img" />
                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">My name is Derin Yilmaz. I </p>
                        <a href="" className="btn">Download Resume</a>
                    </div>

                    <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills_number development">90%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills__percentage"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills_number">80%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills__percentage ui__design"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills_number photography">60%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills__percentage"></span>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default About