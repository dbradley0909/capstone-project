
module.exports = {
    getgetsubmit2:
    ("/api/getsubmit2",
    (req, res) => {
      const compliments = [
        "Gee, you're a smart cookie!",
        "Cool shirt!",
        "Your Javascript skills are stellar.",
      ];

      // choose random compliment
      let randomIndex = Math.floor(Math.random() * compliments.length);
      let randomCompliment = compliments[randomIndex];

      res.status(200).send(randomCompliment);
    }),
}