const server = require("./api/server");

const port = env.process.PORT || 4000;

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
