import React from 'react';

const About = () => (
    <section id="one" className="main special">
        <div className="container">
            <span className="image fit primary"><img src="images/pic01.jpg" alt="" /></span>
            <div className="content">
                <header className="major">
                    <h2>About Me</h2>
                </header>
                <p>I'm currently a student at Western University in my last year doing a double major in Computer Science and Medical Science. Originally a pre-med student, I decided to switch into computer science after realizing how much I loved programming. I'm particularly interested in web development and artificial intellengence but also love to learn new things!</p>

                <p>You can also find me at my other pages: </p>
                <ul className="icons">
                    <li><a href="https://www.facebook.com/harry.y.wu" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                    <li><a href="https://www.instagram.com/harryywu" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                    <li><a href="https://github.com/hywu1996" className="icon fa-github"><span className="label">Github</span></a></li>
                    <li><a href="https://www.linkedin.com/in/harry-wu-5UUU" className="icon fa-linkedin"><span className="label">Github</span></a></li>
                </ul>

            </div>
            <a href="#two" className="goto-next scrolly">Next</a>
        </div>
    </section>
);

export default About;

