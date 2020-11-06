// es5

const printHello = () => {
  console.log('Hello Yeswanth');
};
const hello = () => {
  console.log('Hello Bharath');
};
console.log('Hello Nishanth');
setTimeout(printHello, 0);
const hi = () => {
  console.log('Hello Laddu');
};
hi();
hello();
console.log('Hello Penchal');

// es6
// const display = (data) => {
//   console.log(data);
// };

// const fetchData = fetch('https://twitter.com/manisrinivasa3/tweets/1');
// fetchData.then(display);

// console.log('Me First!');

// OOP

// const user = Object.create(null);
// user.name = 'mani';
// const user1 = {};
// console.log(user);
// console.log(user1);

const userCreator = (name, score) => {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
};

const userFunctionStore = {
  increment: function() {
    this.score++;
  },
  login: function() {
    console.log('Logged in');
  },
};

const user1 = userCreator('mani', 10);
const user2 = userCreator('penchal', 9);
console.log(user1.increment());
