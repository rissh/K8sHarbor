const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

let server; // To hold a reference to the server instance

app.get("/", (req, res) => {
  res.send("Your React app is running!");
});

app.get("/exit", (req, res) => {
  // Perform actions to stop the server or any other desired actions
  res.send("Server stopping...");
  server.close(() => {
    console.log("Server stopped");
  });
});

server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
