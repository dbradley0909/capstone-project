

const registerButton = document.querySelector(".registerbtn")
registerButton.addEventListener("click", () => {
console.log('hit')
  axios.get("http://localhost:4567/api/test")
    .then(response => {
      alert(response.data);
    })
    .catch(error => {
      console.log(error)
    });
})

const submit3 = document.querySelectorId("submit3")
submit3.addEventListener("click", (e) => {
  e.preventDefault();
console.log('hit')
  axios.get("http://localhost:4567/api/test/submit3")
    .then(response => {
      alert(response.data);
    })
    .catch(error => {
      console.log(error)
    });
})
// document.getElementsByClassName("btn").onclick = function () {
//   axios.get("http://localhost:4000/api/btn/")
//     .then(function (response) {
//       const data = response.data;
//       alert(data);
//     });
// }
