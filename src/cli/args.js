import process from 'process';

const parseArgs = () => {
    const cliArgumentsArray = process.argv.slice(2);
    for(let i = 0; i < cliArgumentsArray.length; i+=2) {
        console.log(`${cliArgumentsArray[i]} is ${cliArgumentsArray[i+1]}`);
    }
};

parseArgs();