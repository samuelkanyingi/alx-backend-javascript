const fs = require('fs');

function countStudents(path) {
    try {
        if (!fs.existsSync(path)) {
            throw new Error('Cannot load the database');
        }
        const data = fs.readFileSync(path, 'utf8');
        const lines = data.split('\n').filter(line => line.trim() !== '');
        const students = lines.slice(1); // Skip header

        const numberOfStudents = students.length;
        console.log(`Number of students: ${numberOfStudents}`);

        const fields = {};
        students.forEach((student) => {
            const [firstname, lastname, age, field] = student.split(',');
            if (!fields[field]) {
                fields[field] = [];
            }
            fields[field].push(firstname);
        });

        for (const [field, names] of Object.entries(fields)) {
            console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        }
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
