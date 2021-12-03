

const registerButton = document.querySelector(".registerbtn")
registerButton.addEventListener("click", () => {
  axios.get("http://localhost:4567/test")
    .then(response => {
      alert(response.data);
    })
    .catch(error => {
      console.log(error)
    });
})

const form = document.getElementById('checkoutForm')
form.addEventListener('submit', (e) => {
  e.preventDefault();
  axios.get("http://localhost:4567/submit3")
    .then(response => {
      alert(response.data);
    })
    .catch(error => {
      console.log(error)
    });
 })

 const password = document.getElementById('forgotpassword')
form.addEventListener('submit', (e) => {
  e.preventDefault();
  axios.get("http://localhost:4567/forgotpassword")
    .post(request => {
      alert(response.data);
    })
    .catch(error => {
      console.log(error)
    });
 })

//  form.addEventListener('log in', (e) => {
//    e.preventDefault();
//    axios.get("http://localhost:4567/login")
//      .post(request => {
//        let info= request.params.id;
//        console.log(info);
//      })
//      .catch(error => {
//        console.log(error)
//      });
//   })

