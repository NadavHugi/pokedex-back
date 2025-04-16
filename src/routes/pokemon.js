const express = require("express");
const router = express.Router();
const Pokemon = require("../models/Pokemon");

router.get("/", async (req, res) => {
  try {
    const pokemons = await Pokemon.find({});
    res.json(pokemons);
  } catch (err) {
    console.error("Error fetching pokemons:", err);
    res.status(500).json({ error: "Error fetching pokemons" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const pokemon = await Pokemon.findOne({ id });
    if (!pokemon) {
      return res.status(404).json({ error: "Pokemon not found" });
    }
    res.json(pokemon);
  } catch (err) {
    console.error("Error fetching pokemon by id:", err);
    res.status(500).json({ error: "Error fetching pokemon" });
  }
});

module.exports = router;
