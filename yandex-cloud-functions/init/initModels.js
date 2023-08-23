const comicsStore = require('../store/ComicsStore');

const values = [
  {
    name: "Имя персонажа",
    description: "описание...",
    modified: "2020-07-21",
    thumbnail: "http://...",
    comics: [
      { name: "Spider-Man: 101 Ways to End the Clone Saga (1997) #1"},
    ]
  },
  {
    name: "Имя персонажа2",
    description: "описание.2..",
    modified: "2020-07-21",
    thumbnail: "http://...",
    comics: [
      { name: "Spider-Man: 101 Ways to End the Clone Saga (1997) #1"},
    ]
  }
];

module.exports = () => {
  if (comicsStore.getAll().length) {
    return;
  }
  values.forEach(item => comicsStore.add(item))
};
