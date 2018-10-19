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


function maxValue(t) {
    var maxVal = 0;
    for (var i=1; i<=t.length; i++){
        var s = t.substring(0,i);
        maxVal = Math.max(maxVal, s.length*stringOccur(s, t));
    }
    return maxVal;
}

function stringOccur(s, t) {
    var occurance = 0;
    while(t.indexOf(s) > -1) {
        occurance++;
        t = t.substring(t.indexOf(s) + 1);
    }
    return occurance;
}


function main() {
    var t = readLine();
    var result = maxValue(t);
    process.stdout.write("" + result + "\n");

}