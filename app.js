const express = require('express');
const path = require('path');
const nodeMailer = require('nodemailer');
const app = express();
app.use(express.json());


let transponter = nodeMailer.createTransport({
    service: 'gmail',
    secure: false,
    port: 25,
    auth: {
        user: 'paulocesar1252@gmail.com',
        pass: 'Casadasprima12'
    },
    tls: {
        rejectUnauthorized: false
    }
});

app.set('view engine', 'ejs'); 
app.use('/public', express.static('public'));

app.listen(5000, () => console.log('Server listening on port 5000'));

app.get('/', (req, res) => {
    res.render('index');
})

app.post('/enviar', (req, res) => {
    const mailOptions = {
        from: req.body.remetente.toString(),
        to: 'paulocesar1252@gmail.com',
        subject: req.body.assunto.toString(),
        text: req.body.remetente.toString() + ', ' + req.body.corpo.toString()
    }
    console.log(mailOptions);
    //Enviando o email
    transponter.sendMail(mailOptions, (err, info) => {
        if (err) {
            res.json({
                msg: 'Email nao conseguiu ser enviado!'
            });           
        }else {
            console.log(`Sent, ${info.messageId}`);
            res.json({
                msg: 'Email enviado com sucesso!'
            });            
        }
    })

})

