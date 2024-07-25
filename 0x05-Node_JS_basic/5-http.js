const http = require('http');
const fs = require('fs');
// const path = require('path');

const port = 1245;
const databasePath = process.argv[2];

const countStudents = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }
    const lines = data.trim().split('\n').filter((line) => line.trim() !== '');
    const [, ...studentLines] = lines;
    const studentsByField = {};

    studentLines.forEach((line) => {
      const [first, , , field] = line.split(',');
      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }
      studentsByField[field].push(first);
    });
    const totalStudents = studentLines.length;
    let result = `Number of students: ${totalStudents}\n`;
    Object.keys(studentsByField).forEach((field) => {
      const names = studentsByField[field].join(', ');
      result += `Number of students in ${field}: ${studentsByField[field].length}. List: ${names}\n`;
    });
    resolve(result.trim());
  });
});

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(databasePath)
      .then((studentList) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`This is the list of our students\n${studentList}`);
      })
      .catch((error) => {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end(error.message);
      });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found\n');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
module.exports = app;
