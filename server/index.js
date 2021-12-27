//BACK END=====
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json()); // When we want to be able to accept JSON.

///CONTROLLER-------------

const ctrl = require('./controller')

app.get("/api/compliment", ctrl.compliments)
app.get('/api/fortune', ctrl.fortune)
app.post('/api/nameage', ctrl.nameAge)
app.put('/api/nameage', ctrl.editAge)
app.delete('/api/nameage/:id', ctrl.deleteUser)


///SERVER---LISTRENING---
app.listen(4001, () => console.log("Server running on 4001"));
