import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    const socials = [
        {
            href: "https://www.linkedin.com/in/mark-angelo-sabelita-55b514108/",
            icon: faLinkedin
        },
        {
            href:"https://github.com/marksabelita",
            icon: faGithubSquare
        },
        {
            href: "https://www.instagram.com/marksabelita",
            icon: faInstagramSquare
        },
        {
            href: "https://www.facebook.com/cmsabelita",
            icon: faFacebookSquare
        }
    ];
    return (
        <div className="footer">
            <footer>
                <div className="label-footer">
                    <ul>
                        <li key="findMe" className="find-me">
                            <div> Find </div>
                            <div> Me </div>
                        </li>
                        {
                            socials.map(({ icon, href }, key) => {
                                return <li key={key}> <a target="_blank" rel="noreferrer" href={href}> <FontAwesomeIcon icon={icon} /> </a> </li>
                            })
                        }
                    </ul>
                </div>
            </footer>
        </div>
    );
  }
  
  export default Footer;
  