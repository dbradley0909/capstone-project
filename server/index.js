const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

//const ctrl = require('./controller')
app.get("/api/test", (req, res) => {
    console.log("Hello")
    res.status(200).send('Thank you for signing up! An email will be sent to your account')
});

app.get("/api/test/submit3",
(req, res) => {
 const confirmations = [
"Thank you your confirmation number is 5453454",
"Thank you your confirmation number is 545345efff4",
"Thank you your confirmation number is 5453ygyu454",
"Thank you your confirmation number is 54534chchch54",
];
let randomIndex = Math.floor(Math.random() * confirmations.length);
let randomCompliment = confirmations[randomIndex];

res.status(200).send(randomCompliment);
 });

// app.post('/submit', (req, res) => {  
//     res.status(200).send(characters)btn
// })

// app.delete('/submit', (req, res) => {  
//     res.status(200).send(characters)
// })

const port = process.env.PORT || 4567
 app.listen(port, () => console.log(`Live on port ${port}`))