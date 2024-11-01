import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import reverse from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('reverse', () => {
  const text = readFile('reverse_before.txt');
  const result = readFile('reverse_after.txt');

  expect(reverse(text)).toEqual(result);
  expect(reverse('')).toEqual('');
});