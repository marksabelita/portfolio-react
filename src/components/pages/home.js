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

            <a href="./assets/MarkSabelitaCV.pdf" className="download-button" target="_blank">Download my resume </a>
        </section>
    );
  }
  
  export default Home;
  