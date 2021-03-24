

const CompanyLogos = () => {
    const companyLogos = [ "pccw.png", "hai.png", "global.svg", "outsourced.png", "sky.png", "cs.png","zeenoh.png"];

    return (
        <ul className="companies">
            { 
                companyLogos.map((logo, key) => {
                    return (
                        <li key={key}>
                            <img src={"./assets/company/" + logo} alt={logo}/>
                        </li>
                    )
                }) 
            }
        </ul>
    );
  }
  
  export default CompanyLogos;
  