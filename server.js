const express = require('express');
const app = express();
const port = 8000;

var sendEmail = require('./utils/sendEmail');

app.use(express.urlencoded({
    extended : false
}));

app.use('/public', express.static)

app.get('/', (req, res)=>{
    res.send(`Email sent successfully...`);
})

app.post('/sendEmail', (req, res)=> {
    const {name, surname, email} = req.body;
    res.setHeader("Content-Type", "application/json");

    const from = "puttayya.m.kattimath@gmail.com";
    const  to = "puttayyakattimath@gmail.com";
    const subject = "Test interview on nodejs email scheduling";
    // const text = "This is testing email form send grid email provider";

    const output = `
        <p>send grid email provider</p>
        <h3>Details</h3>
        <ul>
            <li>Name : ${name}</li>
            <li>Surname : ${surname}</li>
            <li>e-mail : ${email}</li>    
        </ul>
    `
    sendEmail(to, from, subject, output);
    
    res.send(`${from} ${to} ${subject} ${output}`);

})

app.listen(port, ()=> {
    console.log(`app listening on port ${port}`);
});

