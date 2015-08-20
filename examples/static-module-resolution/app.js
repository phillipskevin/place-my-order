import foo from "./foo";

let count = 1;

function doLog() {
    console.log('foo in app', foo);
    if (++count <= 10) {
        setTimeout(doLog, 1000);
    }
}

doLog();