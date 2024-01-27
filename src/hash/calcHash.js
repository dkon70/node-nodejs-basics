import fs from 'fs';
import { createHash } from 'crypto';
import url from 'url';
import path from 'path';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const pathToFile = path.join(__dirname, '/files/fileToCalculateHashFor.txt');

const hash = createHash('sha256');

const calculateHash = async () => {
    const stream = fs.createReadStream(pathToFile, { encoding: 'utf-8' });
    stream.on('data', function(data) {
        hash.update(data);
        console.log(hash.digest('hex'));
    });
};

await calculateHash();