'use strict';

function median(arr) {
    if (arr.length == 0) { 
        return "Wrong!"; 
    }
    if (arr.length % 2 == 1) {
        return arr[Math.floor(arr.length / 2)];
    } else {
        var index = arr.length / 2;
        return (arr[index - 1] + arr[index]) / 2;
    }
}

function binarySearch(arr, item, start, end) {
    if (item <= arr[start]) { 
        return start; 
    }
    if (arr[end] < item) { 
        return end + 1;
    }
    if(end - start == 1){
        return end;
    }
    var index = start + Math.floor((end - start + 1) / 2);
    if (item <= arr[index]) {
        return binarySearch(arr, item, start, index);
    }
    if (arr[index] < item) {
        return binarySearch(arr, item, index, end);
    }
}


function processData(input) {
    var lines = input.split('\n');
    var numberOfTests = parseInt(lines[0], 10);

    var res = [];
    var arr = [];
    for (var i = 1; i <= numberOfTests; i++) {
        var item = parseInt(lines[i], 10);
        
        var index = binarySearch(arr, item, 0, arr.length-1);
        arr.splice(index, 0, item);
        res.push(median(arr).toFixed(1));
    }
    process.stdout.write(res.join('\n'));
    process.stdout.write('\n');
}


process.stdin.resume();
process.stdin.setEncoding('ascii');
var _input = '';
process.stdin.on('data', function (input) { _input += input; });
process.stdin.on('end', function () { processData(_input); });