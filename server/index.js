const express = require('express');
const cors = require('cors');
const controller = require('./controller')
const app = express();
app.use(express.json);
app.use(cors());


app.get("/api/submit2", controller.getsubmit2);
// app.get('/submit', (req, res) => {  

//     res.status(200).send('welcome to api')
// })

// app.post('/submit', (req, res) => {  
//     res.status(200).send(characters)
// })

// app.delete('/submit', (req, res) => {  
//     res.status(200).send(characters)
// })


 app.listen(4000, () => console.log('up on 4000'))