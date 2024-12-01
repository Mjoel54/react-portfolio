import PropTypes from "prop-types";
import githubBlack from "./assets/images/github-black.png";

export default function Projects({
  projectImage,
  projectName,
  projectDescription,
  githubLink,
  deployedLink,
}) {
  return (
    <>
      <div className="col-12 col-md-6 col-xl-4">
        <div className="card p-0 mb-3">
          <img
            src={projectImage}
            className="card-img-top"
            alt="..."
            style={{ maxHeight: "13rem" }}
          />
          <div className="card-body text-center">
            {deployedLink ? (
              <a className="d-block mb-2" href={deployedLink} target="_blank">
                <h3 className="card-text">{projectName}</h3>
              </a>
            ) : (
              <h3 className="card-text">{projectName}</h3>
            )}

            <p>Description: {projectDescription}</p>

            {githubLink ? (
              <a href={githubLink} target="_blank">
                {" "}
                <img
                  src={githubBlack}
                  style={{ height: "2rem", padding: "0" }}
                />{" "}
              </a>
            ) : (
              <p>No Github link</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

Projects.propTypes = {
  projectImage: PropTypes.string,
  projectName: PropTypes.string,
  projectDescription: PropTypes.string,
  githubLink: PropTypes.string,
  deployedLink: PropTypes.string,
};
