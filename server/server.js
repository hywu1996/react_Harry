

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
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
const port = process.env.PORT || 5000;
app.get('/', function (req, res) {
    res.send({ express: 'Hello From Express' });
});

app.get('/send', function (req, res) {
    res.send({ express: 'Hello From Send' });
});
app.post('/send', function (req, res) {
    console.log('posting');
    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: creds.USER,
            pass: creds.PASS
        }
    });
    var name = req.body.name
    var email = req.body.email
    var message = req.body.message
    console.log(message);
    var content = `name: ${name} \n email: ${email} \n message: ${message} `
    console.log(content);
    let mailOptions = {
        from: 'hyw.website@gmail.com', // sender address
        to: 'harry.y.wu@gmail.com', // list of receivers
        subject: 'New Message from Contact Form', // Subject line
        text: content, // plain text body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
        res.render('index');
    });
});
app.listen(port, function () {
    console.log('Server is running at port: ', port);
});