const express = require("express");
const api = require("./routes/api");
const html = require("./routes/html");

const app = express();
const PORT = 4000; 

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

app.use("/api", api);
app.use("/", html);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));