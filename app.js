const WebSocket = require('ws');
const PORT = 8080;
const TEN_SECONDS = 10000;

const wss = new WebSocket.Server({ port: PORT });
console.log("Server started on port:" + PORT);
wss.on('connection', function connection() {
  console.log("A connection was establieshed");
});

setInterval(notifyForAnimationChange, TEN_SECONDS);

function notifyForAnimationChange() {
	console.log("Sending new message on: "+ new Date().toString());
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(Math.random());
    }
  });
 }
