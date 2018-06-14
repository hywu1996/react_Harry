import React from 'react';

const Resume = () => (
	<section id="two" className="main special">
		<div className="container">
			<span className="image fit primary"><img src="images/pic02.jpg" alt="" /></span>
			<div className="content">
				<header className="major">
					<h2>Cool Things I've Done</h2>
				</header>

				<p>Here are links to some things that I'm pretty proud of: </p>
				<ul className="icons-grid">
					<li>
						<a href="https://github.com/hywu1996/Hand-Written-Digit-Classification" target="_blank">
							<span className="icon major fa-pencil"></span>
							<h3>MNIST Digit Classification</h3>
						</a>
					</li>
					<li>
						<a href="https://github.com/hywu1996/Simple-Python_Flask-MYSQL-Backend-Project" target="_blank">
							<span className="icon major fa-database"></span>
							<h3>Movie Theatre Management System</h3>
						</a>
					</li>
					<li>
						<a href="#" target="_blank">
							<span className="icon major fa-code"></span>
							<h3>PHP/mongoDB Login System</h3>
						</a>
					</li>
					<li>
						<a href="https://github.com/hywu1996/react_Harry" target="_blank">
							<span className="icon major fa-chrome"></span>
							<h3>This Site Built Using ReactJS</h3>
						</a>
					</li>
				</ul>
				<p>These next ones aren't programming related but check them out if you're curious! </p>
				<ul className="icons-grid">
					<li>
						<a href="https://www.fasebj.org/doi/pdf/10.1096/fj.201601299R" target="_blank">
							<span className="icon major fa-flask"></span>
							<h3>Paper on Neu3/Neu4 Neuronal Regulation</h3>
						</a>
					</li>
					<li>
						<a href="https://drive.google.com/open?id=1_1Pjz5edqzx1VTbevh4GrNGywz_6sByn" target="_blank">
							<span className="icon major fa-book"></span>
							<h3>Essay on Rhetoric of Freedom in America</h3>
						</a>
					</li>
				</ul>
			</div>
			<p> If you are interested in learning more, here's a link to my resume: </p>
			<ul className="actions">
				<li><a href="https://drive.google.com/open?id=1hBD3XTE62-hc8rBpDGCAVMXCeSUTOiY0" target="_blank" className="button special"><i className="fa fa-file-pdf-o"></i> &nbsp;Resume</a></li>
			</ul>
			<a href="#three" className="goto-next scrolly">Next</a>
		</div>
	</section>
);

export default Resume;