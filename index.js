function greet(name) {
  //  БАГ: якщо name не переданий — буде undefined
  return "Hello, " + name.toUpperCase();
}

console.log(greet()); // викликається без аргументу -> помилка
