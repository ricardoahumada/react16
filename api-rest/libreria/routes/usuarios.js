const express = require('express');
const router = express.Router();

const data = [
  { id: 1, nombre: "Ricardo", email: "ricardo@netmind.com", password:"rcrd" },
  { id: 2, nombre: "Juan", email: "juan@netmind.com", password:"jn" },
  { id: 3, nombre: "Roberto", email: "roberto@netmind.com", password:"rbrt" }
];

router.get('/', function (req, res) {
  res.status(200).json(data);
});

router.get('/:id', function (req, res) {
  let found = data.find(function (user) {
    return user.id === parseInt(req.params.id);
  });

  if (found) {
    res.status(200).json(found);
  } else {
    res.sendStatus(404);
  }
});


module.exports = router;
