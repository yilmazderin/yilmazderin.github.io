import React from 'react'

const Card = (props) => {
    return (
        <div className="timeline__item">
            <i className={props.icon}></i>
            <span className="timeline__date">{props.year}</span>
            <h3 className="timeline__title">{props.title}</h3>
            <div className="timeline__text">{props.desc}</div>
            <div className="timeline_text">{props.desc1}</div>
            <div className="timeline_text">{props.desc2}</div>
        </div>
    )
}
export default Card