const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      const lines = data.trim().split('\n').filter((line) => line.trim() !== '');
      if (lines.length === 0) {
        throw new Error('Cannot load the database');
      }
      const [, ...studentLines] = lines;

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
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}
module.exports = countStudents;
