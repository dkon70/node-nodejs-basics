import { createUnzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathToInputFile = path.join(__dirname, '/files/archive.gz');
const pathToOutputFile = path.join(__dirname, '/files/fileToCompress.txt');

const decompress = async () => {
    const readStream = createReadStream(pathToInputFile);
    const writeStream = createWriteStream(pathToOutputFile);
    readStream.pipe(createUnzip()).pipe(writeStream);
};

await decompress();