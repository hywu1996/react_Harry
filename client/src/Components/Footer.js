import React, {Component} from 'react';
import axios from 'axios';


class Footer extends Component{
    handleSubmit(e){
        console.log("Handlesubmit");
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        
        axios({
            method: "POST", 
            url:"http://localhost:5000/send", 
            data: {
                name: name,   
                email: email,  
                messsage: message
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Message Sent."); 
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
    }

    resetForm(){
        document.getElementById('contact-form').reset();
    }



    render(){
        return(
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
                        <li><a href="#" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                        <li><a href="#" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                        <li><a href="#" className="icon alt fa-envelope"><span className="label">Email</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Harry Wu</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                    </ul>
                </footer>
            </section>
        )
    }
}

export default Footer;