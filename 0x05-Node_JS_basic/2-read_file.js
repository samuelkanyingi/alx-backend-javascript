const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1).filter(line => line.trim() !== '');
    const NUMBER_OF_STUDENTS = students.length;
    console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);
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
