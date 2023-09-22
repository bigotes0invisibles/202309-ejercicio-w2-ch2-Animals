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

const explainAnimal = (animal) =>
  `El animal ${animal.name} es un ${animal.species} de ${animal.age} años de edad y pesa ${animal.weigth} kg.`;
