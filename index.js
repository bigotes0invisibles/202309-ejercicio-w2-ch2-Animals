const animalA = {
  id: "071A",
  name: "Giorno Jovana",
  age: 16,
  weigth: 70,
  species: "Mono humano",
  yearOfExtinction: null,
};
const animalB = {
  id: "045G",
  name: "veigo",
  age: 5,
  weigth: 5,
  species: "Dodo",
  yearOfExtinction: 1662,
};

const getSpeciesOfAnimal = (animal) => animal.species;

const isAnimalExtinct = (animal) => animal.yearOfExtinction != null;
