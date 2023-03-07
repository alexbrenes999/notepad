const fs = require("fs");
const uuid = require("../helpers/uuid");
const api = require("express").Router();
const { readAndAppend } = require("../helpers/fsutils");

api.get("/notes", (req, res) => {
  fs.readFile(__dirname + "/../db/db.json", (err, data) => {
    if (err) throw err;
    const getNotes = JSON.parse(data);
    res.json(getNotes);
  });
});

api.post("/notes", (req, res) => {
  if (req.body) {
    const newNote = {
      title: req.body.title,
      text: req.body.text,
      id: uuid(),
    };

    readAndAppend(newNote, "./db/db.json");
    res.json("New note was added!");
  } else {
    res.err("error if note isn't added");
  }
});

module.exports = api;