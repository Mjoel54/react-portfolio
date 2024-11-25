import githubWhite from "./assets/images/github-white.png";
import linkedInWhite from "./assets/images/linkedin-white.png";

export default function Footer() {
  return (
    <>
      <footer>
        <div>
          <a href="https://github.com/Mjoel54" target="_blank" className="mx-2">
            <img
              src={githubWhite}
              style={{ height: "2rem", padding: "0" }}
            />
          </a>
          <a href="https://www.linkedin.com/in/mitchell-k-598591247/" target="_blank" className="mx-2">
            <img
              src={linkedInWhite}
              style={{ height: "2rem", padding: "0" }}
            />
          </a>
        </div>
      </footer>
    </>
  );
}
