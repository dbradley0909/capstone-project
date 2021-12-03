module.exports = {
  getTest: (req, res) => {
    console.log("Hello")
    res.status(200).send('Thank you for signing up! An email will be sent to your account')

},
  getSubmit3: (req,res) => {
    const confirmations = [
    "Thank you your confirmation number is 5453454",
    "Thank you your confirmation number is 545345efff4",
    "Thank you your confirmation number is 5453ygyu454",
    "Thank you your confirmation number is 54534chchch54"
]
let idx = Math.floor(Math.random() * confirmations.length);
let random = confirmations[idx];

res.status(200).send(random);    
  },  

  getForgotPassword:
  (req,res) => {
   prompt('enter your email here');
res.status(200).send('prompt');    
  },  
  
};