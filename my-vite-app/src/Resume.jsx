import resume from './assets/files/KLEIN Mitchell - CV - Portfolio.pdf';

export default function Resume() {
  let proficiencyList = [
    "HTML", "CSS", "Javascript", "React"
  ]


    return (
      <main className="py-5 px-4">
        <div className="text-center">
        <h2 className="h2 mt-4">Resume</h2>
        <a
          href={resume} // Path to your PDF in the `public` folder
          download="KLEIN - CV" // Downloaded file name
          className="btn btn-dark m-4 md"
        >
          Check out my resume!
        </a></div>
        <hr />
     <h3>Proficiencies</h3>
     <ul>
      {proficiencyList.map((element, index) => <li key={index} className="text-decoration-none">{element}</li>)}
     </ul>


      </main>
    );
  }

  