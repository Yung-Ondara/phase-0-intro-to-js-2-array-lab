// Write your solution here!
// Define the initial cats array
const cats = ["Milo", "Otis", "Garfield"];

// Function to append a cat to the end (destructive)
function destructivelyAppendCat(name) {
  cats.push(name);
}

// Function to prepend a cat to the beginning (destructive)
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// Function to remove the last cat (destructive)
function destructivelyRemoveLastCat() {
  cats.pop();
}

// Function to remove the first cat (destructive)
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Function to append a cat to the end (non-destructive)
function appendCat(name) {
  return [...cats, name];
}

// Function to prepend a cat to the beginning (non-destructive)
function prependCat(name) {
  return [name, ...cats];
}

// Function to remove the last cat (non-destructive)
function removeLastCat() {
  return cats.slice(0, -1);
}

// Function to remove the first cat (non-destructive)
function removeFirstCat() {
  return cats.slice(1);
}




