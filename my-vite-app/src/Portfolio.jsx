import "./App.css";

export default function Portfolio() {
  return (
    <main>
      <section id="about-me" className="page-wrapper">
        <section id="projects" className="page-section">
          <h2>Projects</h2>
          <div className="flex-container">
            <div className="flex-item pastel-puzzles">
              <div>
                <a
                  href="https://mjoel54.github.io/plant-app/index.html"
                  target="_blank"
                >
                  <h3>Plant App</h3>
                </a>
                <p>Javascript, Bootsrap</p>
                <a href="https://github.com/Mjoel54/plant-app" target="_blank">
                  <img
                    src="../public/github-mark.png"
                    style={{ height: "1.5rem", padding: "0" }}
                  />
                </a>
              </div>
            </div>

            <div className="flex-item run-buddy">
              <div>
                <h3>Readme Generator</h3>
                <p>Node JS</p>
                <a
                  href="https://github.com/Mjoel54/readme-generator"
                  target="_blank"
                >
                  <img
                    src="../public/github-mark.png"
                    style={{ height: "1.5rem", padding: "0" }}
                  />
                </a>
              </div>
            </div>

            <div className="flex-item react-calc">
              <div>
                <h3>Employee Tracker</h3>

                <p>Node JS, TypeScript</p>
                <a
                  href="https://github.com/Mjoel54/employee-tracker"
                  target="_blank"
                >
                  <img
                    src="../public/github-mark.png"
                    style={{ height: "1.5rem", padding: "0" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
