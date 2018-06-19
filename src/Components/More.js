import React from 'react';

const More = () => (
  <section id="three" className="main special">
    <div className="container">
      <span className="image fit primary"><img src="images/pic03.jpg" alt="" /></span>
      <div className="content">
        <header className="major">
          <h2>Hobbies and Interests</h2>
        </header>
        <ul>
            <li>I love volleyball and skateboarding</li>
            <li>I enjoy playing the piano</li>
            <li>My favourite book series is the Alex Delaware detective series by Jonathan Kellerman</li>
            <li>My favourite piece of anime is <i>A Silent Voice</i></li>
            <li>My favourite TV Series is <i>NCIS</i></li>
            <li>The game I've played most is probably Binding of Issac @ 206 hours</li>
        </ul>
      </div>
      <a href="#footer" className="goto-next scrolly">Next</a>
    </div>
  </section>
);

export default More;