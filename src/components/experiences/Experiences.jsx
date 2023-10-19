import React from 'react';
import "./experiences.css";
import etds from '../../assets/etds-modified.png'
import ws from '../../assets/wslogo.png'
import usc from '../../assets/usc.png'

const Experiences = () => {
    return (
        <section className="experiences section container" id='experiences'>
            <h2 className="section__title">Experiences</h2>

            <div className="experience1__container grid">

                <a href= "https://wiredsolutions.ca/" target = "_blank">
                <img src={ws} alt="" className="ws" /> 
                </a>
                
                <div className="experience1__data grid">
                    <div className="experience1__info">
                        <h2 className="experience1__title">Wired Solutions</h2>
                        <h3 className="experience1__name">Machine Learning Developer</h3>
                        <h3 className="ex1_date">January 2023 - August 2023</h3>
                        <p className="experience1__description">- Trained a natural language processing (NLP) model to efficiently differentiate various insurance plans, trained using over 10,000 detailed insurance documents, highlighting robust data-driven decision-making capabilities.</p>
                        <p className="experience1__description">- Designed and implemented a machine learning model with a 93% precision rate that predicts class subjects based on course descriptions, improving cataloging efficiency for academic institutions.</p>
                        <p className="experience1__description">- Extracted and refined data from 8,000 Ontario university courses, demonstrating a comprehensive approach to data collection and preparation for advanced analytics.
</p>
                    </div>
                </div>
            </div>

            <div className="experience1__container grid">

                <a href= "https://wiredsolutions.ca/" target = "_blank">
                <img src={ws} alt="" className="ws" /> 
                </a>
                
                <div className="experience1__data grid">
                    <div className="experience1__info">
                        <h2 className="experience1__title">Wired Solutions</h2>
                        <h3 className="experience1__name">Junior Developer</h3>
                        <h3 className="ex1_date">May 2022 - December 2022</h3>
                        <p className="experience1__description">Created a natural language processing model to predict the subject of a course based on the course description.</p>
                        <p className="experience1__description">Collaborated with a team of frontend developers to create a feature of a new LMS website for users to draft schedules</p>
                        <p className="experience1__description">Bug-tested and revised the code for the LMS website when bugs arose.</p>
                    </div>
                </div>
            </div>

            <div className="experience1__container grid">

                <a href= "https://eagletruckdrivingschool.com/" target = "_blank">
                <img src={etds} alt="" className="ws" /> 
                </a>
                <div className="experience1__data grid">
                    <div className="experience1__info">
                        <h2 className="experience1__title">Eagle Truck Driving School</h2>
                        <h3 className="experience1__name">Web Developer</h3>
                        <h3 className="ex1_date">May 2021 - August 2021</h3>
                        <p className="experience1__description">Developed a website for a new company that displayed the information about their services, with an automated email form feature.</p>
                        <p className="experience1__description">Consistently had meetings with the president to ensure that expectations and requirements for the website were being met.</p>
                    </div>
                </div>
            </div>

            <div className="experience1__container grid">

                <a href= "https://westernusc.ca/" target = "_blank">
                <img src={usc} alt="" className="wai" /> 
                </a>
                <div className="experience1__data grid">
                    <div className="experience1__info">
                        <h2 className="experience1__title">Western University Student Council</h2>
                        <h3 className="experience1__name">Engineering Councillor</h3>
                        <h3 className="ex1_date">Januart 2021 - December 2021</h3>
                        <p className="experience1__description">Was part of a team that created a calorie tracking Android application using React</p>
                        <p className="experience1__description">Mainly focused on the frontend of the project, creating a designing simple yet efficient user interface</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experiences