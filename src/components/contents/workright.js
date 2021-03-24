const WorkRight = (props) => {
    const {  name, company, details, technologies, image } = props.details;

    return (
        <div className="projects project-grid-2">
            <div className="image-holder">
                <img src={"./assets/projects/" + image} alt=""/>
            </div>

            <div className="project-details">
                <div className="project-details-holder">
                    <span className="label"> Project </span>
                    <h3 > { name }  </h3>
                </div>

                <div className="project-details-holder">
                    <span className="label">Company </span>
                    <h3 > { company } </h3>
                </div>

                <div className="project-details-holder">
                    <span className="label"> Details </span>
                    <h3 > { details } </h3>
                </div>

                <div className="project-details-holder">
                    <span className="label"> Technologies </span>
                    <h3 > { technologies } </h3>
                </div>
            </div>
        </div>
    );
}

export default WorkRight;
  