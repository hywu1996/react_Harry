import React from 'react';

const Welcome = () => (
  <section id="header">
  <header className="major">
      <h1>Harry Wu</h1>
      
      <p>Here's a little bit about myself</p>
      &nbsp;
      <ul className="icons">
                    <li><a href="https://www.facebook.com/harry.y.wu" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                    <li><a href="https://www.instagram.com/harryywu" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                    <li><a href="https://github.com/hywu1996" className="icon fa-github"><span className="label">Github</span></a></li>
                    <li><a href="https://www.linkedin.com/in/harry-wu-5UUU" className="icon fa-linkedin"><span className="label">Github</span></a></li>
                </ul>
  </header>
  
  <div className="container">
      <ul className="actions">
          <li><a href="#one" className="button special scrolly">Begin</a></li>
      </ul>
  </div>
</section>
);

export default Welcome;