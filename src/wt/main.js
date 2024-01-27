import { cpus } from 'os';
import { Worker } from 'worker_threads';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathToWorker = path.join(__dirname, '/worker.js');

const performCalculations = async () => {
    const cores = cpus();
    const res = [];
    let n = 10;
    const workerPromises = cores.map((_, index) => {
        return new Promise((resolve) => {
            const worker = new Worker(pathToWorker, { workerData: n++ });
            worker.on('message', (message) => {
                res[index] = { status: 'resolved', data: message };
                resolve();
            });
            worker.on('error', () => {
                res[index] = { status: 'error', data: null };
                resolve();
            });
        });
    });

    await Promise.all(workerPromises);
    console.log(res);
};

await performCalculations();