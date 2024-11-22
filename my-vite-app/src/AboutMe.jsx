import kleinAvatar from "./assets/images/klein-avatar.png";

export default function AboutMe() {
  const aboutMeContent = [
    "Future web developer with expertise in HTML, CSS, JavaScript, and React, along with experience in TypeScript.",
    "As the Learning Management System (LMS) Coordinator at EDU Holdings, I manage and enhance Canvas the digital learning platform used by 3,000 students, streamline workflows, and ensure seamless integration of new features for users. My work involves solving complex challenges, improving user experience, and delivering efficient solutions. ",
  ];

  return (
    <main id="aboutMe" className="container-fluid p-5">
      <div className="row">
      <aside className="col-md-5 d-flex align-items-center justify-content-center p-2">
        <img src={kleinAvatar} alt="cartoon man waving" aria-hidden="true" className="img-fluid"/>
      </aside>
      <section className="col-md-7 py-2 px-4">
        <h2>About Me</h2>

        {/* {aboutMeContent.map((content, index) => (
          <>
          <p key={index}>{content}</p>
          <hr /></>
        ))} */}
        <p><em>Future</em> web developer with expertise in HTML, CSS, JavaScript, and React, along with a developing understanding of TypeScript.</p>
        <hr />
        <h3>Areas of interest</h3>
<p>
    <strong>Website development for small businesses:</strong> Helping small businesses establish a strong online presence through user-friendly and visually appealing websites.
  </p>
<p>
    <strong>React:</strong> Leveraging React's component-based architecture to build scalable and interactive user interfaces.
    </p>
  <p>
    <strong>Educational Technologies:</strong> Exploring innovative tools and platforms like Learning Management Systems (LMS) to enhance digital learning experiences for students and educators.
    </p>


         </section>
      </div>
    </main>
  );
}
