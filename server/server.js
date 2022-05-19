const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const ITEMS = [
  {
    id: 1,
    name: "Crocodile",
    image: null,
    status: "new",
    date: new Date()
  },
  {
    id: 2,
    name: "Dragon",
    image: "https://picsum.photos/200/300",
    status: "new",
    date: new Date()
  },
  {
    id: 3,
    name: "Elephant",
    image: null,
    status: "done",
    date: new Date()
  },
  {
    id: 4,
    name: "Ghost",
    image: "https://picsum.photos/100/300",
    status: "error",
    date: new Date()
  },
  {
    id: 5,
    name: "Dino",
    image: "https://picsum.photos/400/200",
    status: "processing",
    date: new Date()
  },
  {
    id: 6,
    name: "Racoon",
    image: "https://picsum.photos/200/200",
    status: "done",
    date: new Date()
  },
  {
    id: 7,
    name: "Dog",
    image: "https://picsum.photos/200/400",
    status: "processing",
    date: new Date()
  },
];

app.get('/items', (req, res) => {
  if (Math.random() >= 0.5) {
    res.json({
      success: true,
      payload: ITEMS
    });
  } else {
    res.status(400).json({
      success: false,
      error: "Hey dude..."
    });
  }
});

app.put('/items/:id', (req, res) => {
  const id = +req.params.id;
  const status = req.body.status;
  const item = ITEMS.find(item => item.id === id);
  if (item) {
    item.status = status;
    item.date = new Date();
    res.json({
      success: true,
      payload: item
    });
    return;
  }
  res.status(404).json({
    success: false,
    error: `Item "${id}" not found`
  });
});

const PORT = process.env.PORT || 8083;

app.listen(PORT, '0.0.0.0', function() {
  console.log('App listening on port ' + PORT);
});
