import React from "react";

const About = () => (
  <section id="one" className="main special">
    <div className="container">
      <span className="image fit primary">
        <img src="images/bg.jpg" alt="" />
      </span>
      <div className="content">
        <header className="major">
          <h2>About Me</h2>
        </header>
        <p>
          I'm currently a full-stack developer at Morgan Stanley focused on
          improving application performance and breaking apart a monolith. Most
          familiar with Java and Javascript but eager to learn any programming
          language! Experience working in Java EE, native Android development,
          Spring, React Native, Vue/Laravel, and many more!
        </p>
      </div>
      <a href="#two" className="goto-next scrolly">
        Next
      </a>
    </div>
  </section>
);

export default About;
