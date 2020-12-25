//Basic JavaScript: Accessing Nested Arrays

var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

// research in what situations to use dot notation over brackets.

var secondTree = myPlants[1].list[1];

//challenge prompt: "Retrieve the second tree from the variable myPlants using object dot and array bracket notation."
