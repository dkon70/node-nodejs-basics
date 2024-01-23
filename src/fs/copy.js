import * as fs from 'fs';
import path from 'path';
import url from 'url';

const copy = async () => {
    const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const pathToFilesFolder = path.join(__dirname, '/files');
    const pathToFilesCopyFolder = path.join(__dirname, '/files_copy')
    fs.cp(pathToFilesFolder, pathToFilesCopyFolder, { recursive: true, errorOnExist: true, force: false }, function(err) {
        if (err) {
            if (err.name === 'SystemError') {
                throw new Error('FS operation failed');
            } else {
                throw new Error(err);
            }
        }
    });
};

await copy();
