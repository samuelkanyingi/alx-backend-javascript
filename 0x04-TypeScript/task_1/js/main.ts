interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[property: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};
console.log(teacher3)

interface Directors extends Teacher {
        numberOfReports: number;
}
const director1: Directors = {
	firstName: 'John',
	lastName: ' Doe',
	location: 'LOndon',
	fullTimeEmployee: true,
	numberOfReports: 17,
};
console.log(director1)

function printTeacher(firstName: string, lastName: string): string {
	return `${firstName[0]} ${lastName}`;
}
printTeacher("John", "Doe")

interface Class {
	workOnHomework(): string;
	displayName(): string;
	}
interface Constructor {
	firstName: string;
	lastName: string;
}
class StudentClass implements Class {
	constructor(arg: Constructor) {
		this.firstName = arg.firstName;
		this.lastName = arg.lastName;
	}
	workOnHomework() {
		return "Currently working";
	}
	displayName() {
		return this.firstName;
	}
}
