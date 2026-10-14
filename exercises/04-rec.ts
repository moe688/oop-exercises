class Rectangle {
	#height: number;
	#width: number;

	constructor(height: number, width: number) {
		this.#height = height;
		this.#width = width;
	}

	get area() {
		return this.#height * this.#width;
	}

	get perimeter() {
		return 2 * (this.#height + this.#width);
	}
}
const r = new Rectangle(3, 4);
console.log(r.area, r.perimeter);
r.#width = 10;
console.log(r.area);

//Property '#width' is not accessible outside class 'Rectangle' because it has a private identifier.
