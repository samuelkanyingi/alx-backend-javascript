#!/usr/bin/node

class HolbertonCourse {
    constructor(name, length, students) {
        // Validate types
        this._validateName(name);
        this._validateLength(length);
        this._validateStudents(students);

        // Assign attributes
        this._name = name;
        this._length = length;
        this._students = students;
    }

    // Getter for name
    get name() {
        return this._name;
    }

    // Setter for name
    set name(newName) {
        this._validateName(newName);
        this._name = newName;
    }

    // Getter for length
    get length() {
        return this._length;
    }

    // Setter for length
    set length(newLength) {
        this._validateLength(newLength);
        this._length = newLength;
    }

    // Getter for students
    get students() {
        return this._students;
    }

    // Setter for students
    set students(newStudents) {
        this._validateStudents(newStudents);
        this._students = newStudents;
    }

    // Validation methods
    _validateName(name) {
        if (typeof name !== 'string') {
            throw new TypeError('Name must be a string');
        }
    }

    _validateLength(length) {
        if (typeof length !== 'number') {
            throw new TypeError('Length must be a number');
        }
    }

    _validateStudents(students) {
        if (!Array.isArray(students) || !students.every(student => typeof student === 'string')) {
            throw new TypeError('Students must be an array of strings');
        }
    }
}

export default HolbertonCourse;
