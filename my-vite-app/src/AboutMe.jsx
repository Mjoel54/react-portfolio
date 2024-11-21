export default function AboutMe() {

  const aboutMeContent = [
    "I am a web developer who enjoys creating websites and web applications. I have experience with HTML, CSS, JavaScript, and React.",
    "I am also familiar with Node.js, Express.",
    "I am currently learning how to use TypeScript.",
  ];
  return (
    <main id="aboutMe">
      <h2>About Me</h2>
      <ul>
        {aboutMeContent.map((content, index) => (<li key={index}>{content}</li>))}
      </ul>
    </main>
  );
}
