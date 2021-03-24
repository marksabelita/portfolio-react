 const Contact = () => {
    return (
        <section className="hero alt-content" id="contact">
            <h2 className="title">
                <span className="number-header"> 04. </span> Contact Me
            </h2> 

            <div className="contact text-center" >
                <div className="contact-information">
                    <div>
                        <h4 className="contact-label">ADDRESS</h4>
                        <div > Rizal, Philippines </div>
                    </div>  
                    <div> 
                        <h4 className="contact-label">EMAIL:</h4>
                        <div> <a  href="mailto:cmsabelita@gmail.com">cmsabelita@gmail.com </a></div>
                    </div>

                    <div>
                        <h4 className="contact-label">CONTACT NO.</h4>
                        <div > <a  href="tel:+639499444366">+639499444366</a> </div>
                    </div>
                </div>
            </div>

            <div className="contact-form">

                <div className="form-style-5">
                    <form>
                        <fieldset>
                            <legend><span className="number">1</span> DETAILS </legend>
                            <input type="email" name="field1" placeholder="Your Email"/>
                            <input type="text" name="field2" placeholder="Name"/>
                            <input type="text" name="field2" placeholder="Subject"/>
                            <textarea name="field3" placeholder="Description"></textarea>
                        </fieldset>
                        <button className="download-button send" >
                            Send
                        </button>
                        </form>
                    </div>
            </div>
        </section>
    );
  }
  
export default Contact;
  