import React from 'react';
import "./experiences.css";
import etds from '../../assets/etds-modified.png'
import ws from '../../assets/wslogo.png'
import usc from '../../assets/usc.png'
import rbc from '../../assets/rbc.png'

const Experiences = () => {
    return (
        <section className="experiences section container" id='experiences'>
            <h2 className="section__title">Experiences</h2>

            <div className="experience1__container grid">

                <a href= "https://www.rbcroyalbank.com/personal.html" target = "_blank">
                <img src={rbc} alt="" className="rbc" /> 
                </a>
                
                <div className="experience1__data grid">
                    <div className="experience1__info">
                        <h2 className="experience1__title">Royal Bank of Canada (RBC)</h2>
                        <h3 className="experience1__name">Software Developer Intern</h3>
                        <h3 className="ex1_date">September 2023 - April 2024</h3>
                        <p className="experience1__description">- Led the initiation and development of an advanced generative AI model, achieving a 95% accuracy rate in predictive simulations, designed to assist individuals in reducing their carbon emissions.</p>
                        <p className="experience1__description">- Prioritized data integrity and adhered to ethical standards in information usage, successfully processing and integrating over 3000 data points across various formats such as PDFs, CSVs, images, and links during model training.</p>
                        <p className="experience1__description">- Actively participated in weekly collaboration sessions with cross-functional stakeholders, including technical leads and department heads, employing Agile and Scrum methodologies for streamlined and effective project management.</p>
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
                        <h3 className="experience1__name">Machine Learning Developer Intern</h3>
                        <h3 className="ex1_date">January 2023 - August 2023</h3>
                        <p className="experience1__description">- Trained a natural language processing (NLP) model to efficiently differentiate various insurance plans, trained using over 10,000 detailed insurance documents, highlighting robust data-driven decision-making capabilities.</p>
                        <p className="experience1__description">- Designed and implemented a machine learning model with a 93% precision rate that predicts class subjects based on course descriptions, improving cataloging efficiency for academic institutions.</p>
                        <p className="experience1__description">- Extracted and refined data from 8,000 Ontario university courses, demonstrating a comprehensive approach to data collection and preparation for advanced analytics.</p>
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
                        <h3 className="experience1__name">Junior Developer Intern</h3>
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

            
        </section>
    )
}

export default Experiences