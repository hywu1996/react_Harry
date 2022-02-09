import React from "react";

const Resume = () => (
  <section id="two" className="main special">
    <div className="container">
      <div className="content">
        <header className="major">
          <h2>Projects</h2>
        </header>

        <p>Projects I've been a part of:</p>
        <ul className="icons-grid">
          <li>
            <a href="https://shopaccessories365.com/" target="_blank">
              <span className="icon major fa-car"></span>
              <h3>Shop Accessories 365 (Vue, Laravel, MySQL)</h3>
            </a>
          </li>
          <li>
            <a
              href="https://play.google.com/store/apps/details?id=ca.uwo.its.adt.westernumobile"
              target="_blank"
            >
              <span className="icon major fa-graduation-cap"></span>
              <h3>Western University App (Android)</h3>
            </a>
          </li>
          <li>
            <a href="https://x-cd.com/" target="_blank">
              <span className="icon major fa-code"></span>
              <h3>X-CD Conferencing Mobile App (React Native)</h3>
            </a>
          </li>
          <li>
            <a
              href="https://play.google.com/store/apps/details?id=org.oma.oma_app"
              target="_blank"
            >
              <span className="icon major fa-user-md"></span>
              <h3>Ontario Medical Association App (Android)</h3>
            </a>
          </li>
        </ul>

        <p>Personal Projects: </p>
        <ul className="icons-grid">
          <li>
            <a
              href="https://github.com/hywu1996/Hand-Written-Digit-Classification"
              target="_blank"
            >
              <span className="icon major fa-pencil"></span>
              <h3>MNIST Digit Classification (ML, MATLAB) </h3>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/hywu1996/Simple-Python_Flask-MYSQL-Backend-Project"
              target="_blank"
            >
              <span className="icon major fa-database"></span>
              <h3>Movie Theatre Management System (Python, Flask, MySQL)</h3>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/hywu1996/Blogging-Web-MEAN"
              target="_blank"
            >
              <span className="icon major fa-code"></span>
              <h3>Blogging Site (Mongo, Express, Angular, Node)</h3>
            </a>
          </li>
          <li>
            <a href="https://github.com/hywu1996/react_Harry" target="_blank">
              <span className="icon major fa-chrome"></span>
              <h3>This ReactJS/Express Website</h3>
            </a>
          </li>
        </ul>
        <p>
          These next ones aren't programming related but check them out if
          you're interested!
        </p>
        <ul className="icons-grid">
          <li>
            <a
              href="https://www.fasebj.org/doi/pdf/10.1096/fj.201601299R"
              target="_blank"
            >
              <span className="icon major fa-flask"></span>
              <h3>Paper on Neu3/Neu4 Neuronal Regulation</h3>
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/open?id=1_1Pjz5edqzx1VTbevh4GrNGywz_6sByn"
              target="_blank"
            >
              <span className="icon major fa-book"></span>
              <h3>Rhetoric of Freedom: Women's Suffrage</h3>
            </a>
          </li>
        </ul>
      </div>
      <p> To learn more about me, here's a link to my resume: </p>
      <ul className="actions">
        <li>
          <a
            href="https://docs.google.com/document/d/1URcobsAdKmHtahHibWoO3L492JE0fM2Igju7KAC1KNY/edit?usp=sharing"
            target="_blank"
            className="button special"
          >
            <i className="fa fa-file-pdf-o"></i> &nbsp;Resume
          </a>
        </li>
      </ul>
      <a href="#three" className="goto-next scrolly">
        Next
      </a>
    </div>
  </section>
);

export default Resume;
