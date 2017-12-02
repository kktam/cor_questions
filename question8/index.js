process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

function reverseString(src) {
    if (src === undefined || src == null || src.length < 1) {
        return src;
    }

    var turns = src.length - 2;
  
    var results = []
    for(var i = turns; i >= 0; i-- ) {
        results.push(src[i]);
    }
    //process.stdout.write("result =" + JSON.stringify(results) + "\n"); 

    return results.join("");
}

function main() {
    var s1 = readLine();
    process.stdout.write("oring string =" + s1 + "\n");

    var result = reverseString(s1);
    process.stdout.write("reversed string =" + result + "\n");
}