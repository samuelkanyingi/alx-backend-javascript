const fs = require('fs');

function countStudents(path) {
    let data;

    try {
        // Attempt to read the file content synchronously
        data = fs.readFileSync(path, 'utf8');
    } catch (error) {
        // Handle error if the file cannot be read
        throw new Error('Cannot load the database');
    }

    // Split the file content by new lines
    const lines = data.split('\n').filter(line => line.trim() !== '');

    // Remove the header line and filter out any empty lines
    const students = lines.slice(1).filter(line => line.trim() !== '');

    // Log the number of students
    const numberOfStudents = students.length;
    console.log(`Number of students: ${numberOfStudents}`);

    // Initialize an object to hold the students by field
    const fields = {};

    // Iterate through each student line
    students.forEach((student) => {
        const [firstname, lastname, age, field] = student.split(',');

        if (!fields[field]) {
            fields[field] = [];
        }

        fields[field].push(firstname);
    });

    // Log the number of students and their names by field
    for (const [field, names] of Object.entries(fields)) {
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
}

module.exports = countStudents;
