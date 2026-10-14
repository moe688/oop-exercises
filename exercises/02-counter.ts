class Counter {
	value: number;
	constructor() {
		this.value = 0;
	}

	increment() {
		this.value = this.value + 1;
	}

	decrement() {
		this.value = this.value - 1;
	}
	reset() {
		this.value = 0;
	}
}

const a = new Counter();
const b = new Counter();
a.increment();
a.increment();
b.decrement();
console.log(a.value, b.value);
a.reset();
console.log(a.value);

//b did not change when I called a.increment() beause the two objects are independet from one another and each holds a different value.
