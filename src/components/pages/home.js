import Typed from 'typed.js';
import React, { useEffect, } from 'react'

const Home = () => {
    useEffect(() => {
        new Typed('.exp', {
            strings: ['', 'Fullstack Developer.' ,'Frontend Developer.', 'Backend Developer.', 'Cross platform Developer.'],
            typeSpeed: 50,
            loop: true,
        });
    })  
    return (
        <section className="hero" id="About">
            <div className="hi">Hi<span className="color-green">!</span> </div>
            <div className="im">I'm Mark Sabelita,</div>
            <div className="work"> <span className="yellowish"> I worked as a </span> <span className="exp"> </span></div>
            <button className="download-button">
                <a href="./assets/MarkSabelitaCV.pdf" target="_blank">Resume </a>
            </button>
        </section>
    );
  }
  
  export default Home;
  