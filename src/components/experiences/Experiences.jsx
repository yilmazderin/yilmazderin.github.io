import React from 'react';
import "./experiences.css";
import etds from '../../assets/etds-modified.png'
import ws from '../../assets/wslogo.png'
import wai from '../../assets/wai.png'

const Experiences = () => {
    return (
        <section className="experiences section container" id='experiences'>
            <h2 className="section__title">Experiences</h2>

            <div className="experience1__container grid">

                <img src={ws} alt="" className="ws" />
                <div className="experience1__data grid">
                    <div className="experience1__info">
                        <h2 className="experience1__title">Wired Solutions</h2>
                        <h3 className="experience1__name">Junior Developer</h3>
                        <p className="experience1__description">I created ...</p>
                    </div>
                </div>
            </div>

            <div className="experience1__container grid">

                <img src={etds} alt="" className="etds" />
                <div className="experience1__data grid">
                    <div className="experience1__info">
                        <h2 className="experience1__title">Eagle Truck Driving School</h2>
                        <h3 className="experience1__name">Web Developer</h3>
                        <p className="experience1__description">I created ...</p>
                    </div>
                </div>
            </div>

            <div className="experience1__container grid">

                <img src={wai} alt="" className="wai" />
                <div className="experience1__data grid">
                    <div className="experience1__info">
                        <h2 className="experience1__title">Western AI</h2>
                        <h3 className="experience1__name">Web Developer</h3>
                        <p className="experience1__description">I created ...</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experiences