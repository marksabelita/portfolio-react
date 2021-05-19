const About = () => {
    const backEnd = ['NodeJs', 'ExpressJs', 'Laravel', 'CodeIgniter', 'AWS', 'Serverless', 'Docker', 'Microservices'];
    const frontEnd = ['Angular', 'ReactJs', 'ES6', 'TypeScript', 'SASS', 'LESS', 'CSS Frameworks'];
    const crossPlatform = ['Ionic', 'Electron'];

    return (
        <section className="hero" id="about">
            <h2 className="title">
                <span className="number-header"> 01. </span>About Me 
            </h2> 
            <div className="grid-2">
                <div className="details">
                    <div>
                        <p>
                            I am a <span className="color-green"> Fullstack developer </span> with more than 7 years of experience  in web and cross platform development. 
                        </p>
                        <p>
                            I work with various fields like gaming, telecommunication, travels, crm and medical fields.
                        </p>
                        <p>
                            List are the the technologies I've used for the past 7 years: 
                        </p>
                    </div>
                    <br/>

                    <div>
                        <p className="yellowish"> Backend technologies: </p>
                        <p> { backEnd.join(', ') } </p>
                    </div>
                    <div>
                        <p className="yellowish"> Frontend technologies: </p>
                        <p> { frontEnd.join(', ') } </p>
                    </div>
                    <div>
                        <p className="yellowish"> Cross platform technologies: </p>
                        <p> { crossPlatform.join(', ') } </p>
                    </div>
                </div>
                <div className="image" >
                    <img src="./assets/mark.jpg" className="profile-image" alt=""/>
                </div>
            </div>
        </section>

    );
  }
  
  export default About;
  