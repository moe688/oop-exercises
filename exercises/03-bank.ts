class BankAccount {
	#balance: number = 0;

	deposit(depositAmount: number) {
		if (depositAmount <= 0) {
			throw new Error("Amount must be higher than 0");
		}
		this.#balance = this.#balance + depositAmount;
	}

	withdraw(withdrawAmount: number) {
		if (withdrawAmount > this.#balance) {
			throw new Error("Not enough balance");
		}
		this.#balance = this.#balance - withdrawAmount;
	}
	get balance() {
		return this.#balance;
	}
}

const account = new BankAccount();
account.deposit(100);
account.withdraw(30);
console.log(account.balance);

try {
	account.withdraw(500);
} catch (error) {
	console.log(error.message);
}

try {
	account.deposit(0);
} catch (error) {
	console.log(error.message);
}

//account.#balance = 1000000
//Property '#balance' is not accessible outside class 'BankAccount' because it has a private identifier.
