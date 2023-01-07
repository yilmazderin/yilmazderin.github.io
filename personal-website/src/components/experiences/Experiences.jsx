import React from 'react';
import "./experiences.css";
import etds from '../../assets/etds-modified.png'

const Services = () => {
    return (
        <section className="experiences section container" id='experiences'>
            <h2 className="section__title">Experiences</h2>

            <div className="experiences__container grid">

                <img src={etds} alt="" className="etds" />
            </div>
        </section>
    )
}

export default Services