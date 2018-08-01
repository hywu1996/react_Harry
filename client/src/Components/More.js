import React from 'react';

const More = () => (
  <section id="three" className="main special">
    <div className="container">
      <span className="image fit primary"><img src="images/pic03.jpg" alt="" /></span>
      <div className="content">
        <header className="major">
          <h2>Hobbies and Interests</h2>
        </header>
        <h5>Things I'd like to think I'm good at</h5>
        <ul class="alt">
          <li>I love volleyball and skateboarding</li>
          <li>I enjoy playing the piano</li>
          <li>Programming, I'd hope?</li>
        </ul>
        <h5>Things I think I'm good at but probably not really</h5>
        <ul class="alt">
        <li>Amateur-at-best photographer</li>
        <li>Most video games</li>
        <li>Leaving helpful comments in my code</li>
        </ul>
        <h5>Random Things</h5>
        <ul class="alt">
        <li>Big fan of Jonathan Kellerman's Alex Delaware detective series</li>
          <li>Favourite animated film is <i>A Silent Voice</i></li>
          <li>Favourite TV Series is <i>NCIS</i></li>
          <li>Binding of Issac addict (220 hours)</li>
        </ul>
      </div>
      <a href="#footer" className="goto-next scrolly">Next</a>
    </div>
  </section>
);

export default More;