

// 
// 

// app.get('/send', (req, res) => {
//   res.send({ express: 'Hello From Express' });
// });

// app.listen(port, () => console.log(`Listening on port ${port}`));


const creds = require('./config/config');

var express = require('express'),
    nodeMailer = require('nodemailer'),
    bodyParser = require('body-parser');

var app = express();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.static(__dirname +'./../client/dist'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
const port = process.env.PORT || 5000;
app.get('/', function (req, res) {
    res.send({ express: 'Hello From Express' });
});

app.post('/send1', function (req, res) {
    res.end(JSON.stringify({msg: "success"}));
});
app.post('/send', function (req, res) {
    console.log('posting');

    var name = req.body.name
    var email = req.body.email
    var message = req.body.message

    if (isBlank(name)) {
        res.end(JSON.stringify({msg: "Oops! You might have forgotten your name!"}));
        return ;
    }
    if (isBlank(email)) {
        res.end(JSON.stringify({msg: "Oops! Did you forget your email?"}));
        return ;
    }
    if (isBlank(message)) {
        res.end(JSON.stringify({msg: "Sorry! I can't read blank messages. :("}));
        return ;
    }
    if (!(email.includes('@') && email.includes('.'))) {
        res.end(JSON.stringify({msg: "Invalid email field. Try again! You can do this!"}));
        return ;
    }
    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: creds.USER,
            pass: creds.PASS
        }
    });
    console.log(message);
    var content = `Name: ${name} \nEmail: ${email} \n\nMessage: ${message} `
    var htmlcontent = `<strong>Name:</strong> ${name} <br/> <strong>Email:</strong> ${email} <br/> <hr/> <strong>Message:</strong> <br/> <p>${message}</p> <br/> <hr/> <br/> <div style="text-align: center"> <i>Harry Wu &nbsp;hyw.website@gmail.com </i> </div>`
    console.log(content);
    let mailOptions = {
        from: 'hyw.website@gmail.com', // sender address
        to: 'harry.y.wu@gmail.com', // list of receivers
        subject: 'New Message from Contact Form', // Subject line
        text: content, // plain text body
        html: htmlcontent,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
        res.end(JSON.stringify({msg: "success"}));
    });
});
app.listen(port, function () {
    console.log('Server is running at port: ', port);
});

function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}