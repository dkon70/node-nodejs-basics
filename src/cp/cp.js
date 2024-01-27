import { spawn } from 'child_process';
import { stdin, stdout } from 'process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathToScript = path.join(__dirname, '/files/script.js');

const spawnChildProcess = async (args) => {
    const childProcess = spawn('node', [pathToScript, ...args]);
    childProcess.stdout.on('data', (data) => {
        stdout.write(data.toString());
    });
    stdin.on('data', (data) => {
        childProcess.stdin.write(data);
    });
};

spawnChildProcess(['someArgument1', 'someArgument2']);
