# oop-exercises


How to work
Create a folder called exercises/.
Write each exercise in its own file, for example exercises/01-dog.js.
Run it with node exercises/01-dog.js and compare the output with the "Expected" block.
Stuck for more than 15 minutes? Open the hint. Still stuck? Ask, that is normal.


1. Your first class
Concept: a class is a blueprint, an object is one thing built from it.

Create a Dog class with a name and a bark() method.

const rex = new Dog('Rex');
const luna = new Dog('Luna');
rex.bark();
luna.bark();

Expected:

Rex says woof
Luna says woof

Hint The constructor(name) runs when you call new Dog('Rex'). Save the name with this.name = name.


2. Objects remember things
Concept: each object keeps its own state.

Create a Counter with increment(), decrement(), reset() and a value property that starts at 0.

const a = new Counter();
const b = new Counter();
a.increment();
a.increment();
b.decrement();
console.log(a.value, b.value);
a.reset();
console.log(a.value);

Expected:

2 -1
0

Question to answer: why did b not change when you called a.increment()?


3. Protect your data
Concept: encapsulation. Some data should only change through methods that check the rules.

Create a BankAccount with a private #balance.

deposit(amount) adds money. Throw an Error if the amount is 0 or negative.
withdraw(amount) removes money. Throw an Error if there is not enough balance.
balance is a getter, so people can read it but not set it directly.

const account = new BankAccount();
account.deposit(100);
account.withdraw(30);
console.log(account.balance);

try {
  account.withdraw(500);
} catch (error) {
  console.log(error.message);
}

Expected:

70
Not enough balance

Hint Private fields start with #: declare #balance = 0; at the top of the class. A getter looks like get balance() { return this.#balance; }.

Try this: write account.#balance = 1000000 outside the class. What happens and why is that good?

About # and private: in JavaScript, # is how you make something private. In TypeScript you can also write it explicitly:

class BankAccount {
  private balance = 0;
}

Both hide the field, with one difference. TypeScript's private is only checked while you write code and disappears when the code runs. # stays private even at runtime. TypeScript docs


4. Computed properties
Concept: getters can calculate values instead of storing them.

Create a Rectangle with width and height, and getters area and perimeter.

const r = new Rectangle(3, 4);
console.log(r.area, r.perimeter);
r.width = 10;
console.log(r.area);

Expected:

12 14
40

Question to answer: why is area still correct after changing the width?


5. Inheritance
Concept: a child class reuses everything from a parent and adds or changes parts.

Create an Animal class with name and a describe() method. Then create Dog and Cat that extend it and each add a speak() method.

const dog = new Dog('Rex');
const cat = new Cat('Misha');
console.log(dog.describe());
console.log(dog.speak());
console.log(cat.speak());

Expected:

I am Rex
Rex says woof
Misha says meow

Hint class Dog extends Animal { ... }. If you write a constructor in Dog, you must call super(name) first.


Checklist
1. Your first class
2. Objects remember things
3. Protect your data
4. Computed properties
5. Inheritance

