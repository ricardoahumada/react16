const express = require('express');
const router = express.Router();

const data = [
  { id: 1, name: "Ricardo", email: "ricardo@netmind.com" },
  { id: 2, name: "Juan", email: "juan@netmind.com" },
  { id: 3, name: "Roberto", email: "roberto@netmind.com" }
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

router.post('/', function (req, res) {
  let usersIds = data.map(user => user.id);
  let orderNums = data.map(user => user.order);

  let newId = usersIds.length > 0 ? Math.max.apply(Math, usersIds) + 1 : 1;
  let newOrderNum = orderNums.length > 0 ? Math.max.apply(Math, orderNums) + 1 : 1;

  let newUser = {
    id: newId,
    name: req.body.name,
    email: req.body.email,
  };

  data.push(newUser);

  res.status(201).json(newUser);
});

router.put('/:id', function (req, res) {
  let found = data.find(function (user) {
    return user.id === parseInt(req.params.id);
  });

  if (found) {
    let updated = {
      id: found.id,
      name: req.body.name,
      email: req.body.email,
    };

    let targetIndex = data.indexOf(found);

    data.splice(targetIndex, 1, updated);

    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
});

router.delete('/:id', function (req, res) {
  let found = data.find(function (user) {
    return user.id === parseInt(req.params.id);
  });

  if (found) {
    let targetIndex = data.indexOf(found);

    data.splice(targetIndex, 1);
  }

  res.sendStatus(204);
});

module.exports = router;
