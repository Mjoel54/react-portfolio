import resume from '../public/KLEIN Mitchell - CV - Portfolio.pdf';

export default function Resume() {
  let proficiencyList = [
    "HTML", "CSS", "Javascript", "React"
  ]


    return (
      <main>
        <h2>Resume</h2>
     <h3>Proficiencies</h3>
     <ul>
      {proficiencyList.map((element, index) => <li key={index}>{element}</li>)}
     </ul>

        <a
          href={resume} // Path to your PDF in the `public` folder
          download="KLEIN - CV" // Downloaded file name
          className="btn btn-primary m-4 md"
        >
          Check out my resume!
        </a>
      </main>
    );
  }

  