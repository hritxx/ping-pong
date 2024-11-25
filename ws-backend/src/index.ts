import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function (socket) {
  socket.on("message", (ev) => {
    console.log(ev);
    const message = ev.toString();
    if (message === "ping") {
      socket.send("pong");
    }
  });
});
