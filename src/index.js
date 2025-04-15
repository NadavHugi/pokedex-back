const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const pokemons = require("./data/pokemon.json");

app.get("/api/pokemons", (req, res) => {
  res.json(pokemons);
});

app.get("/api/pokemons/:id", (req, res) => {
  const id = Number(req.params.id);
  const pokemon = pokemons.find((p) => p.id === id);
  if (!pokemon) {
    return res.status(404).json({ error: "Pokemon not found" });
  }
  res.json(pokemon);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
