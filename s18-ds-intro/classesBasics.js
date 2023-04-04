class Student {
	constructor(firstName, lastName, year) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.grade = year;
		this.tardies = 0;
		this.scores = [];
	}

	fullName() {
		return `Your full name is ${this.firstName} ${this.lastName}.`;
	}

	markLate() {
		this.tardies++;
		if (this.tardies >= 3) {
			return "You are EXPELLED!!!";
		}

		return `${this.firstName} ${this.lastName} has been late ${this
			.tardies} time(s)`;
	}

	addScore(score) {
		this.scores.push(score);

		return this.scores;
	}

	calculateAverage() {
		const sum = this.scores.reduce((a, b) => a + b);

		return sum / this.scores.length;
	}

	static EnrollStudents() {
		return "Enrolling students!!";
	}
}

const std1 = new Student("Chaitanya", "Vuddanti", 10);
const std2 = new Student("Srikanth", "Achanta", 10);

std2.markLate();
std2.addScore(92);
std2.addScore(87);
std2.addScore(100);

console.log(Student.EnrollStudents());

console.log({
	std1: std1.fullName(),
	std2: std2.calculateAverage(),
});
