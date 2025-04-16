const mongoose = require("mongoose");
const Pokemon = require("./models/Pokemon");
const pokemons = require("../data/pokemon.json");

mongoose
  .connect("mongodb://localhost:27017/pokedex", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Connected to MongoDB for seeding");

    await Pokemon.deleteMany({});
    console.log("Existing documents removed");
    const validPokemons = pokemons.filter((p) => p.base);
    console.log("Number of pokemons read from JSON:", pokemons.length);
    console.log("Number of valid pokemons:", validPokemons.length);
    const result = await Pokemon.insertMany(validPokemons);
    console.log("Number of pokemons inserted:", result.length);

    mongoose.connection.close();
  })
  .catch((err) => console.error("Error during seeding:", err));
