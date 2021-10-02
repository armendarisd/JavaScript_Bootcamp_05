function itIsAmazing(arg1, arg2, arg3){
    let n = 0;
    let myArgs;
    myArgs = process.argv.slice(2);
    while(myArgs[n] != undefined){
        console.log(myArgs[n]);
        n++;
    }
}

itIsAmazing(process.argv[2], process.argv[3], process.argv[4]);

