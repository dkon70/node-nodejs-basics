import * as fs from 'fs';
import path from 'path';
import url from 'url';

const list = async () => {
    const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const folderPath = path.join(__dirname, '/files');
    fs.readdir(folderPath, function(err, files) {
        if (err) {
            if (err.code === 'ENOENT') {
                throw new Error('FS operation failed');
            } else {
                throw new Error(err);
            }
        }
        console.log(files);
    })
};

await list();