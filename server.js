const net = require("net");
const server = net.createServer();
server.listen({
  host: "localhost",
  port: 3000,
});

server.on("connection", (client) => {
  console.log("client connected");
});
