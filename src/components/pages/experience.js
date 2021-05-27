import CompanyLogos from "../contents/companylogos";
import React, { useState, useRef } from "react";
import { useSwipeable } from 'react-swipeable'

const Experience = () => {
    const companies = [
        {
            label: "PCCW Solutions",
            value: "pccw"
        },
        {
            label: "Freelancer",
            value: "freelance"
        },
        {
            label: "Outsourced.ph",
            value: "outsourced"
        },
        {
            label: "SkyCable Inc",
            value: "sky"
        },
        {
            label: "CoreServ",
            value: "coreserv"
        },
        {
            label: "Zeenoh",
            value: "zeenoh"
        }
    ]

    const companyDetails = [
        {
            id: "pccw",
            company: "PCCW Solutions Inc.",
            date: "April 2020 - Present",
            position: "I06 Solutions Developer",
            stack: ["Angular", "TypeScript", "NodeJs", "Java"],
            descriptions: [
                "Maintain quality and ensure responsiveness of applications.",
                "Collaborate with the rest of the engineering team to design and launch new features.",
                "Maintain code integrity and organization.",
                "Development experience for web applications."
            ]
        },
        {
            id: "freelance",
            company: "Freelance",
            date: "December 2019 - Present",
            position: "Freelance Fullstack Developer",
            stack: ["Angular", "CodeIgniter", "NodeJs", "Ionic", "Electron"],
            descriptions: [
                "Design overall architecture of the web application.",
                "Collaborate with the rest of the engineering team to design and launch new features.",
                "Maintain code integrity and organization.",
                "Experience working with graphic designers and converting designs to visual elements.",
                "Development experience for both mobile and desktop."
            ]
        },
        {
            id: "outsourced",
            company: "Outsourced Quality Assured",
            date: "March 2018 - March 2020",
            position: "Fullstack Developer",
            stack: ["Angular", "ExpressJs", "NodeJs", "AWS", "Serverless", "ECS"],
            descriptions: [
                "Design overall architecture of the web application.",
                "Collaborate with the rest of the engineering team to design and launch new features.",
                "Maintain code integrity and organization.",
                "Experience working with graphic designers and converting designs to visual elements.",
                "Development experience for both mobile and desktop."
            ]
        },
        {
            id: "sky",
            company: "SkyCable Corporation",
            date: "March 2016 - April 2018",
            position: "Web Developer",
            stack: ["Angular", "CodeIgniter", "NodeJs", "Ionic", "Electron"],
            descriptions: [
                "Create Website layout/user interface.",
                "Write well designed, testable, efficient code.",
                "Integrate data from various back-end services and databases.",
                "Gather and refine specifications and requirements based on technical needs",
                "Create and maintain software documentation.",
                "Be responsible for maintaining, expanding, and scaling our site."
            ]
        },
        {
            id: "coreserv",
            company: "Coreserve",
            date: "June 2015 – May 2016",
            position: "Web Developer",
            stack: ["Angular", "CodeIgniter", "NodeJs", "Ionic", "Electron"],
            descriptions: [
                "Create Website layout/user interface.",
                "Write well designed, testable, efficient code.",
                "Integrate data from various back-end services and databases.",
                "Gather and refine specifications and requirements based on technical needs",
                "Create and maintain software documentation.",
                "Be responsible for maintaining, expanding, and scaling our site."
            ]
        },
        {
            id: "zeenoh",
            company: "Zennoh Games",
            date: "December 2014 – June 2015",
            position: "Web Developer",
            stack: ["Angular", "CodeIgniter", "NodeJs", "Ionic", "Electron"],
            descriptions: [
                "Create Website layout/user interface.",
                "Write well designed, testable, efficient code.",
                "Integrate data from various back-end services and databases.",
                "Gather and refine specifications and requirements based on technical needs",
                "Create and maintain software documentation.",
                "Be responsible for maintaining, expanding, and scaling our site."
            ]
        },
    ]

    const [ activeCompany, setActiveCompany ] = useState(companyDetails[0]);
    const [ activeTab, setActiveTab ] = useState('pccw');
    const itemEls = useRef({});

    const onClickSelectCompany = (value, index) => {
        itemEls.current[index].scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        ;
        setActiveTab(value);
        const activeCompanyDetails = companyDetails.find((cd) => cd.id === value);
        setActiveCompany(activeCompanyDetails);
    }

    const handlers = useSwipeable({
        onSwiped: (eventData) => {
            let currentIndex = 0;
            const index = companies.findIndex(c => c.value === activeTab);
            if(eventData.dir === 'Left') {
                currentIndex =  (index === companies.length - 1) ? 0 : index+1;
            } else if(eventData.dir === 'Right') {
                currentIndex =  (index === 0) ? companies.length - 1 : index-1;
            }

            onClickSelectCompany(companies[currentIndex].value, currentIndex);
        }
    });

    return (
        <section id="experience" className="hero alt-content">
            <h2 className="title">
                <span className="number-header"> 02. </span>Working Experience
            </h2> 

            <div className="grid-2-l-content" >
                <div className="details">
                    <div className="company-header">
                        <ul className="experience-list">
                            { 
                                companies.map(({ label, value }, key) => {
                                    const ref = React.createRef();

                                    return( 
                                        <div key={key} className="company-holder" ref={(element) => itemEls.current[key] = element}> 
                                            <li className={ activeTab === value ? 'active' : '' } onClick={() => { onClickSelectCompany(value, key) }}>{ label }</li>
                                            <div className={ activeTab === value ? 'triangle-right' : '' }> </div>
                                        </div>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="roles" {...handlers}>
                    <div>
                        <h3>{activeCompany.position} @ <span className="yellowish">{activeCompany.company}</span> </h3>
                        <div className="date">
                            {activeCompany.date}
                        </div>
                        <div>
                            <ul className="work-detail">
                                {
                                    activeCompany.descriptions.map((desc, key) => <li key={key}> {desc} </li>)
                                }
                            </ul>
                        </div>
                        <div>
                            <span className="yellowish">Tech stack</span> : { activeCompany.stack.join(', ') }
                        </div>
                    </div>
                </div>
            </div>

            <div className="company-logos">
                <h3 className="yellowish"> Companies  </h3>
                <CompanyLogos/>
            </div>
        </section>
    );
  }
  
  export default Experience;
  