const { createServer } = require("http");

// it is a good practice to always allow to
// run on a different port
const PORT = process.env.PORT || 5000;

const server = createServer();

server.on("request", (request, response) => {
  response.end("Hello, world! - This is node Server");
});

server.listen(PORT, () => {
  console.log(`starting server at port ${PORT}`);
});
