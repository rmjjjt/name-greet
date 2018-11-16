const greet = name => {
  return `Whassup ${name}, where you been, maestro?`;
};

const res = greet('Charlie');
console.log(res);
module.exports = greet;