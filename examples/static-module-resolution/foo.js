let b = 1;

export default b;

function doLog() {
    console.log('foo in foo', b++);
    if (b <= 10) {
        setTimeout(doLog, 1000);
    }
}

doLog();