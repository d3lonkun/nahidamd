const app = require(express)();

app.get('/', (req, res) => res.send(`Connected to the server, and the bot must be ready right now.`));

module.exports = () => {
  app.listen(3000);
}
