import fs from 'fs';
import { createHash } from 'crypto';
import url from 'url';
import path from 'path';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const pathToFile = path.join(__dirname, '/files/fileToCalculateHashFor.txt');

const hash = createHash('sha256');

const calculateHash = async () => {
    fs.readFile(pathToFile, { encoding: 'utf-8' }, function(err, data) {
        if (err) {
            throw new Error(err);
        }
        hash.update(data);
        console.log(hash.digest('hex'));
    });
};

await calculateHash();