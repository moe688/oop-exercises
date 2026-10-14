class Animal {
	name: string;

	constructor(name: string) {
		this.name = name;
	}
	describe(): string {
		return `I am ${this.name}`;
	}
}

class Dog extends Animal {
	speak(): string {
		return `${this.name} says woof`;
	}
}

class Cat extends Animal {
	speak(): string {
		return `${this.name} says meow`;
	}
}

const dog = new Dog("Rex");
const cat = new Cat("Misha");
console.log(dog.describe());
console.log(dog.speak());
console.log(cat.speak());
