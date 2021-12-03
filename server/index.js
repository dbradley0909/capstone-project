const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

const { getTest,getSubmit3, getForgotPassword, } = require('./controller.js')

app.get("/test", getTest)
app.get("/submit3", getSubmit3)
app.get("/forgotpassword", getForgotPassword)
//app.post("/login", getLogin)


const port = process.env.PORT || 4567
 app.listen(port, () => console.log(`Live on port ${port}`))