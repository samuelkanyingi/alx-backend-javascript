const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }
    const [, ...studentLines] = lines;
    // const [firstname, lastname, age, field] = header.split(',');

    const studentsByField = {};

    studentLines.forEach((line) => {
      const [first, , , fld] = line.split(',');
      if (!studentsByField[fld]) {
        studentsByField[fld] = [];
      }
      studentsByField[fld].push(first);
    });
    const totalStudents = studentLines.length;
    console.log(`Number of students: ${totalStudents}`);
    Object.keys(studentsByField).forEach((fld) => {
      const names = studentsByField[fld].join(', ');
      console.log(`Number of students in ${fld}: ${studentsByField[fld].length}. List: ${names}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
