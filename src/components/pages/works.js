import WorkLeft from '../contents/work';
import WorkRight from '../contents/workright';

const Works = () => {
    const projects = [
        {
            name: 'Health Advance Insitute Website',
            company: 'Freelance (South Africa)',
            details: 'Office website of health advance institute',
            technologies: 'NextJS(React), Redux, Laravel, AWS, Figma',
            images: [
                { image: '/hai/hai-ohsc-online.png', width: '100%' },
                { image: '/hai/hai-website.png', width: '100%' },
                { image: '/hai/hai-elearning.png', width: '100%' },
                { image: '/hai/hai-ohsc-offline-tablet.png', width: '100%' },
                { image: '/hai/hai-ohsc-offline-mobile.png', width: '240px' },
            ]
        },
        {
            name : "Project 19",
            company : "Freelance (America)",
            details : "Customer service portal connected to zendesk for providing item mofication and refunds to customers",
            technologies : "VueJS, Quasar, NodeJS, Zendesk",
            images: [
                { image: '/project19/eden-brothers.png', width: '100%' },
            ]
        },
        {
            name: "CRM Product",
            company: "PCCW (HK/Philippines)",
            details: "Project Involvement includes frontend development on Customer Portal and User access management Page.",
            technologies: "Angular, Typescript, ES6",
            images: [
                { image: '/pccw/pccw.png', width: '100%' },
            ]
        }, {
            name: "gWorld",
            company: "Global works and travel (Australia) ",
            details: "User panel for global works and travel clients where user can book destination, display details about booking details and offers.",
            technologies: "AWS, NodeJs, Serverless, ECS, Angular, Typescript",
            image: "gworld.png",
        }, {
            name: "IRSM - Integrated Remote Monitoring System",
            company: "SkyCable (Philippines)",
            details: "Monitoring system for all cable and network devices of skycable. System help with monitoring and analysis for network and hardware status.",
            technologies: "Linux Server, Laravel, Angular, Typescript, NodeJs, Bash ",
            image: "irsm.jpeg",
        }, {
            name: "EPG - Electronic Program Guide",
            company: "SkyCable (Philippines)",
            details: "System allow administrator to push and view program guides for skycable channels, this system also allow bulk insert or imports of excel file for a fast and easy way to upload.",
            technologies: "Linux Server, React, Redux, NodeJs, Bash",
            image: "epg.png",
        }
    ]

    return (
        <section id="porfolio" >
            {
                projects.map((project, key) => {
                    return (
                        <WorkLeft key={key} details={project}/>
                    );
                })
            
            /* <h2 className="title">
                <span  className="number-header"> 03. </span> Latest Projects
            </h2> 
            {
                projects.map((project, key) => {
                    return (key % 2  === 0) ? <WorkRight key={key} details={project} /> : 
                })
            } */}
        </section>
    );
  }
  
  export default Works;
  


