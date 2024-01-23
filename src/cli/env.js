import process from 'process';

const parseEnv = () => {
    for(let key in process.env) {
        if (key.startsWith('RSS_')) {
            console.log(`${key}=${data[key]}`);
        }
    }
};

parseEnv();