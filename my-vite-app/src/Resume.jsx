import React from 'react';
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
          download="KLEIN - CV" // Optional: Customize the downloaded file name
          className="btn btn-primary mt-3"
        >
          Check out my resume!
        </a>
      </main>
    );
  }

  