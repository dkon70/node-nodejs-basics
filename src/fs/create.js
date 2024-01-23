import * as fs from 'fs';

const create = async () => {
    fs.open('src/fs/files/fresh.txt', 'wx', function(err, file) {
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