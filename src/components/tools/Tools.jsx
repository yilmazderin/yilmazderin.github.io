import React from 'react';
import { FaPython, FaJava, FaReact } from 'react-icons/fa';
import "./tools.css";

const Tools = () => {
    return (
        <section className="tools section container" id='tools'>
            <h2 className="section__title">Tools</h2>
            <h3 className="my__languages">Languages</h3>
            <div>
      <FaPython size={32} style={{ color: 'blue' }} />
    </div>
            <h3 className="my__languages">Technologies</h3>
        </section>
    )
}

export default Tools