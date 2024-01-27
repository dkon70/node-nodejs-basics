import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathToInputFile = path.join(__dirname, '/files/fileToCompress.txt');
const pathToOutputFile = path.join(__dirname, '/files/archive.gz');

const compress = async () => {
    const readStream = createReadStream(pathToInputFile);
    const writeStream = createWriteStream(pathToOutputFile);
    readStream.pipe(createGzip()).pipe(writeStream);
};

await compress();