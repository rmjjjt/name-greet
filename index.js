const greet = (name, secondName) => {
  return `Whassup ${name}, where you been, ${secondName} maestro?`;
};

const res = greet('Charlie', 'Banana');
console.log(res);
module.exports = greet;