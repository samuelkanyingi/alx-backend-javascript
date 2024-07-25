const express = require('express');
const fs = require('fs');
// const path = require('path');

const app = express();
const port = 1245;
const databasePath = process.argv[2];

const countStudents = (filePath) => new Promise((resolve, reject) => {
  if (!filePath) {
    reject(new Error('Cannot load the database'));
    return;
  }
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }
    const lines = data.trim().solit('\n').filter((line) => line.trim() !== '');
    const [, ...studentLines] = lines;
    const studentsByField = {};
    studentLines.forEach((line) => {
      const [first, , , field] = line.split(', ');
      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }
      studentsByField[field].push(first);
    });
    const totalStudents = studentLines.length;
    let results = `Number of students: ${totalStudents}\n`;
    Object.keys(studentsByField.forEach((field) => {
      const names = studentsByField[field].join(', ');
      results += `Number of students in ${field}: ${studentsByField[field].length}. List: ${names}\n`;
    }));
    resolve(results.trim());
  });
});
app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});
app.get('/students', (req, res) => {
  countStudents(databasePath)
    .then(((studentList) => {
      res.status(200).send(`This is the list of our students\n${studentList}`);
    }))
    .catch((error) => {
      res.status(500).send(error.message);
    });
});
app.use((req, res) => {
  res.status(404).send(`<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="utf-8">
    <title>Error</title>
    </head>
    <body>
    <pre>Cannot GET ${req.originalUrl}</pre>
    </body>
    </html>`);
});
app.listen(port, () => {
  console.log(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });
});
module.exports = app;
