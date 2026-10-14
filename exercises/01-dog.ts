class Dog {
	name: string;

	constructor(name: string) {
		this.name = name;
	}
	bark() {
		console.log(`${this.name} says woof`);
	}
}

const rex = new Dog("Rex");
const luna = new Dog("Luna");

rex.bark();
luna.bark();

// No hint was necessary
