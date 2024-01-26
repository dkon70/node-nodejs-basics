import * as fs from 'fs';
import path from 'path';
import url from 'url';

const rename = async () => {
    const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const pathToFile = path.join(__dirname, '/files/wrongFilename.txt');
    const pathToRenamedFile = path.join(__dirname, '/files/properFilename.md');
    fs.access(pathToRenamedFile, fs.constants.F_OK, function(err) {
        if(!err) {
            throw new Error('FS operation failed');
        }
    });
    fs.rename(pathToFile, pathToRenamedFile, function(err) {
        if (err) {
            if (err.code === 'ENOENT') {
                throw new Error('FS operation failed');
            } else {
                throw new Error(err);
            }
        }
    });
};

await rename();