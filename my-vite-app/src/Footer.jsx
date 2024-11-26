import githubWhite from "./assets/images/github-white.png";
import linkedInWhite from "./assets/images/linkedin-white.png";

export default function Footer() {
  return (
    <>
      <footer className="w-100 text-center py-4 text-white">
        <div>
          <a href="https://github.com/Mjoel54" target="_blank" className="mx-3">
            <img
              src={githubWhite}
              style={{ height: "2.5rem"}}
            />
          </a>
          <a href="https://www.linkedin.com/in/mitchell-k-598591247/" target="_blank" className="mx-3">
            <img
              src={linkedInWhite}
              style={{ height: "2.5rem"}}
            />
          </a>
        </div>
      </footer>
    </>
  );
}
