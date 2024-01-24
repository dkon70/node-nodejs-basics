import { createReadStream } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import { stdout } from 'process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathToFile = path.join(__dirname, '/files/fileToRead.txt');

const read = async () => {
    const stream = createReadStream(pathToFile, { encoding: 'utf-8' });
    stream.pipe(stdout);
};

await read();