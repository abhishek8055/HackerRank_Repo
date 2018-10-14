function processData(input) {
    var inputArray = _input.split('\n');
    var n = parseInt(inputArray[0]);
    var map = [];
    for(var i = 1; i <= n; i++) {
        map.push(inputArray[i].split(''));
    }
    for(var i = 1; i < n - 1; i++) {
        for(var j = 1; j < n - 1; j++) {
            var currentDepth = parseInt(map[i][j]);
            if(currentDepth > parseInt(map[i - 1][j])
               && currentDepth > parseInt(map[i + 1][j])
               && currentDepth > parseInt(map[i][j - 1])
               && currentDepth > parseInt(map[i][j + 1])) {
                map[i][j] = 'X';
            }
        }
    }
    for(var i = 0; i < n; i++) {
        console.log(map[i].join(''));
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
