import React, { Component } from 'react';
import axios from 'axios';

class Popup extends Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <div className="popup_body">
                        <span className="icon major fa-envelope"></span>
                        <h1 className="popupContent">Message Sent</h1>
                        <p className="popupContent">I'll try to get back as soon as possible!</p>

                    </div>
                    <input id="closePopup" type="submit" onClick={this.props.closePopup} value="x" className="special popupContent" />
                </div>
            </div>
        );
    }
}

class Footer extends Component {

    constructor() {
        super();
        this.state = {
            showPopup: false,
        };
    }
    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }
    handleSubmit(e) {
        console.log("Handlesubmit");
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        console.log("Message: ==>", message);
        axios({
            method: "POST",
            url: "http://localhost:3000/send",
            data: {
                name: name,
                email: email,
                message: message
            }
        }).then((response) => {
            console.log(response.data.msg);
            if (response.data.msg === 'success') {
                this.togglePopup();
                this.resetForm();
                // window.scrollTo(0, 0);
            } else {
                alert(response.data.msg)
            }
        })
    }

    resetForm() {
        document.getElementById('contact-form').reset();
    }



    render() {
        return (
            <div>
                <section id="footer">
                    <div className="container">
                        <header className="major">
                            <h2>Get in touch</h2>
                        </header>
                        <form id="contact-form" method="POST" onSubmit={this.handleSubmit.bind(this)}>
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
                            <li><a href="https://www.facebook.com/harry.y.wu" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                            <li><a href="https://www.instagram.com/harryywu" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                            <li><a href="https://github.com/hywu1996" className="icon fa-github"><span className="label">Github</span></a></li>
                            <li><a href="https://www.linkedin.com/in/harry-wu-5UUU" className="icon fa-linkedin"><span className="label">Github</span></a></li>
                        </ul>
                        <ul className="copyright">
                            <li>&copy; Harry Wu</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                        </ul>
                    </footer>
                </section>
                {this.state.showPopup ?
                    <Popup
                        closePopup={this.togglePopup.bind(this)}
                    />
                    : null
                }
            </div>

        )
    }
}

export default Footer;