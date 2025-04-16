const mongoose = require("mongoose");

const PokemonSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    name: { type: Object, required: true },
    base: { type: Object, required: true },
  },
  { strict: false }
);

const Pokemon = mongoose.model("Pokemon", PokemonSchema);
module.exports = Pokemon;
