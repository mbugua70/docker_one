const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.json([
    {
      id: "1",
      title: "Book Review: The Bear & The Nightingale",
    },
    {
      id: "2",
      title: "Game Review: Pokemon Brillian Diamond",
    },
    {
      id: "3",
      title: "Show Review: Alice in Borderland",
    },
    {
      id: "4",
      title: "Game Review: Pokemon Brillian Diamond",
    },
    {
      id: "5",
      title: "Show Review: Alice in Borderland",
    },
    {
      id: "6",
      title: "Game Review: Pokemon Brillian Diamond",
    },
    {
      id: "7",
      title: "Incididunt reprehenderit est eu laboris pariatur aliqua.",
    },
    {
      id: "8",
      title:
        "Ea quis enim cupidatat nisi sint pariatur nulla exercitation ut ipsum ullamco nostrud commodo id.",
    },
    {
      id: "9",
      title:
        "Ea quis enim cupidatat nisi sint pariatur nulla exercitation ut ipsum ullamco nostrud commodo id.",
    },
  ]);
})

app.listen(4000, () => {
  console.log('listening for requests on port 4000')
})