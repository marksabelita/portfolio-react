const About = () => {
    const backEnd = ['NodeJS', 'ExpressJS', 'Laravel', 'CodeIgniter', 'AWS', 'Serverless', 'Docker', 'Microservices'];
    const frontEnd = ['ReactJS', 'NextJS', 'VueJS', 'Quasar', 'Angular', 'ES6', 'TypeScript', 'SASS', 'LESS', 'CSS Frameworks', 'Figma'];
    const crossPlatform = ['Ionic', 'Electron', 'React Native'];

    return (
        <section className="hero" id="about">
            <h2 className="title">
                <span className="number-header"> 01. </span>About Me 
            </h2> 
            <div className="grid-3">
                <div className="details">
                    <div>
                        <h2>
                            I am a <span className="color-green"> Fullstack developer </span> with more than 8 years of experience in web and cross platform development. 
                        </h2>
                    </div>

                    <br/>

                    <h4 class="skill-label">
                        List are the technologies that I've experienced working with:  
                    </h4>

                    <div className="skillset">
                        <p className="yellowish"> Backend technologies: </p>
                        <p> { backEnd.join(', ') } </p>
                    </div>
                    <div className="skillset">
                        <p className="yellowish"> Frontend technologies: </p>
                        <p> { frontEnd.join(', ') } </p>
                    </div>
                    <div className="skillset">
                        <p className="yellowish"> Cross platform technologies: </p>
                        <p> { crossPlatform.join(', ') } </p>
                    </div>
                </div>
                {/* <div className="image" >
                    <img src="./assets/mark.jpg" className="profile-image" alt=""/>
                </div> */}
            </div>
        </section>

    );
  }
  
  export default About;
  