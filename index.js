function greet(name) {
  if (!name) {
    return "Hello, stranger!";
  }
  return "Hello, " + name.toUpperCase();
}

console.log(greet());        // Hello, stranger!
console.log(greet("Ivan"));  // Hello, IVAN

