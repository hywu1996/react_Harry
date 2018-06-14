import React from 'react';


const Footer = () => (
    <section id="footer">
        <div className="container">
            <header className="major">
                <h2>Get in touch</h2>
            </header>
            <form method="POST" action="https://formspree.io/harry.y.wu@gmail.com">
                <div className="row uniform">
                    <div className="6u 12u$(xsmall) input50"><input type="text" name="name" id="name" placeholder="name" /></div>
                    <div className="6u$ 12u$(xsmall) input50"><input type="email" name="_replyto" id="email" placeholder="email" /></div>
                    <div className="12u$ input100"><textarea name="message" id="message" placeholder="your message" rows="4"></textarea></div>
                    <div className="12u$ input100">
                        <ul className="actions">
                            <li><input type="submit" value="Send Message" className="special" /></li>
                        </ul>
                    </div>
                </div>
            </form>
        </div>
        <footer>
            <ul className="icons">
                <li><a href="#" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                <li><a href="#" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="#" className="icon alt fa-envelope"><span className="label">Email</span></a></li>
            </ul>
            <ul className="copyright">
                <li>&copy; Harry Wu</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
            </ul>
        </footer>
    </section>
);

export default Footer;