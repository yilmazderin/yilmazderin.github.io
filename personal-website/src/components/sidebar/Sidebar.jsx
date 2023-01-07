import React from 'react';
import "./sidebar.css";
import Logo from '../../assets/dy-logo-removebg-preview.png';

const Sidebar = () => {
    return (
        <aside className='aside'>
            <a href="#home" className="nav__logo">
                <img src = {Logo} className= "logo_pic" alt = '' />
            </a>

            <nav className="nav">
                <div className="nav__menu">
                    <ul className="navlist">
                        <li className="nav__item">
                            <a href="#home" className="nav__link">
                                <i className='icon-home'></i>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                            <i className='icon-user-following'></i>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#services" className="nav__link">
                            <i className='icon-briefcase'></i>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#resume" className="nav__link">
                            <i className='icon-graduation'></i>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link">
                            <i className='icon-layers'></i>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#blog" className="nav__link">
                            <i className='icon-note'></i>
                            </a>
                        </li>
                        
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                            <i className='icon-bubble'></i>
                            </a>
                        </li>

                    </ul>
                </div>
            </nav>

            <div className="nav__footer">
                <span className="copyright">&copy; 2022-2023. </span>
            </div>
        </aside>
    )
}

export default Sidebar