import WorkLeft from '../contents/workleft';
import WorkRight from '../contents/workright';

const Works = () => {
    const projects = [
        {
            name: 'OHSC Admin',
            company: 'Freelance',
            details: 'Administrator panel for OHSC website, this project track hospital status and generates reports.',
            technologies: 'Linux Server, CodeIgniter, Typescript, NodeJ',
            image: 'ohsc.png'
        },
        {
            name : "OHSC Offline",
            company : "Freelance",
            details : "Inspector's access that includes set of questioner used for hospital assessment.",
            technologies : "Angular, Ionic, Electron, Typescript, NodeJs",
            image: "ohsc-offiline.png"
        },
        {
            name: "CRM Product",
            company: "PCCW (HK/Philippines)",
            details: "Project Involvement includes frontend development on Customer Portal and User access management Page.",
            technologies: "Angular, Typescript, ES6",
            image: "pccw.png",
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
        <section id="porfolio" className="hero">
            <h2 className="title">
                <span  className="number-header"> 03. </span> Latest Projects
            </h2> 
            {
                projects.map((project, key) => {
                    return (key % 2  === 0) ? <WorkRight key={key} details={project} /> :  <WorkLeft key={key} details={project}/>
                })
            }
        </section>
    );
  }
  
  export default Works;
  


