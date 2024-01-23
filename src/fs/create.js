import * as fs from 'fs';
import path from 'path';
import url from 'url';

const create = async () => {
    const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const pathToFile = path.join(__dirname, '/files/fresh.txt');
    fs.open(pathToFile, 'wx', function(err, file) {
        if (err) {
            if (err.code === 'EEXIST') {
                throw new Error('FS operation failed');
            } else {
                throw new Error(err);
            }
        }

        fs.writeFile(file, 'I am fresh and young', function(err) {
            if (err) {
                throw new Error(err);
            }
        });
    })
};

await create();