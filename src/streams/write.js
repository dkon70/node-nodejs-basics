import { stdin } from 'process';
import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathToFile = path.join(__dirname, '/files/fileToWrite.txt');

const write = async () => {
    const stream = createWriteStream(pathToFile, { encoding: 'utf-8' });
    stdin.pipe(stream);
};

await write();