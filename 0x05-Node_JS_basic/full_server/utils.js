import fs from 'fs';
import readline from 'readline';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    const data = {};
    const stream = fs.createReadStream(filePath);
    const rl = readline.createInterface({
      input: stream,
      crlfDelay: Infinity
    });

    rl.on('line', (line) => {
      const [firstname, field] = line.split(',');
      if (!data[field]) {
        data[field] = [];
      }
      data[field].push(firstname);
    });

    rl.on('close', () => resolve(data));
    rl.on('error', (err) => reject(err));
  });
}
