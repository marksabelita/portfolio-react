
import { Link  } from "react-scroll";

const NavList = (props) => {
    const { navs, classLabel, onClickCallback, hasResume} = props;
    return (
        <ul className={classLabel}>
            { 
                navs.map(({label, link, count}, key) => {
                    return (
                        <Link
                            key={key}
                            to={link}
                            spy={true}
                            smooth={true}
                            duration={500}
                            onClick={() => onClickCallback(true)}
                        >
                            <li key={key}> <span className="color-green">{count}.</span> {label}</li>
                        </Link>
                    )
                    
                })
            }
            { hasResume ? 
                <li style={{textAlign: 'center'}}>
                    <button className="download-button">
                        <a href="./assets/MarkSabelitaCV.pdf" style={{color: '#fff'}} target="_blank">Download My Resume </a>
                    </button>
                </li> : ''
            }
        </ul>
    );
  }
  
  export default NavList;
  