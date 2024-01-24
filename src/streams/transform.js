import { stdin, stdout } from 'process';
import { Transform } from 'stream';

const transform = async () => {
    const reversed = new Transform({ transform(chunk, _, callback) {
        callback(null, `${chunk.toString().split('').reverse().join('')}\n`);
    } });
    stdin.pipe(reversed).pipe(stdout);
};

await transform();