import * as fs from 'fs';
import url from 'url';
import path from 'path';

const remove = async () => {
    const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const pathToFile = path.join(__dirname, '/files/fileToRemove.txt');
    fs.rm(pathToFile, function(err) {
        if (err) {
            if (err.code === 'ENOENT') {
                throw new Error('FS operation failed');
            } else {
                throw new Error(err);
            }
        }
    });
};

await remove();