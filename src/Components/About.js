import React from 'react';

const About = () => (
    <section id="one" className="main special">
        <div className="container">
            <span className="image fit primary"><img src="images/pic01.jpg" alt="" /></span>
            <div className="content">
                <header className="major">
                    <h2>About Me</h2>
                </header>
                <p>Hi, I'm Harry. I'm a student at Western University in my last year doing a B.Sc. in Computer Science and Medical Science. I started university as a pre-med student; however, after taking a few computer science courses to fill my requirements, I realized how much I enjoyed programming and decided to switch into computer science. I've worked jobs ranging from an assistant at Costco to a research student at CHU Sainte-Justine Hospital to a Co-op Developer at Maxxam Analytics. Keep reading to learn more about me!</p>
            </div>
            <a href="#two" className="goto-next scrolly">Next</a>
        </div>
    </section>
);

export default About;

