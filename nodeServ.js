const { createServer } = require("http");

// it is a good practice to always allow to
<<<<<<< HEAD
// running on a different port
=======
// run on a different port
>>>>>>> 0b524094458b8b9eb7c74b148b605160dfd18cb4
const PORT = process.env.PORT || 5000;

const server = createServer();

server.on("request", (request, response) => {
  response.end("Hello, world! - This is node Server");
});

server.listen(PORT, () => {
  console.log(`starting server at port ${PORT}`);
<<<<<<< HEAD
});
=======
});
>>>>>>> 0b524094458b8b9eb7c74b148b605160dfd18cb4
