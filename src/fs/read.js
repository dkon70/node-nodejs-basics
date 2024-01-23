import * as fs from 'fs';
import path from 'path';
import url from 'url';

const read = async () => {
    const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const pathToFile = path.join(__dirname, '/files/fileToRead.txt');
    fs.readFile(pathToFile, { flag: 'r', encoding: 'utf-8' }, function(err, data) {
        if (err) {
            if (err.code === 'ENOENT') {
                throw new Error('FS operation failed');
            } else {
                throw new Error(err);
            }
        }
        console.log(data);
    });
};

await read();