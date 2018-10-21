function processData(input) {
    //Enter your code here
    var match = input.match(/\d+/);
    var T = Number(match[0]), n, result, xorMap;
    input = input.slice(match[0].length + 1);
    for(var c = 0; c < T; c++) {
        match = input.match(/\d+/);
        n = Number(match[0]);
        input = input.slice(match[0].length + 1);
        match = input.match(/[^\n]+/);
        arr = match[0].split(" ").map(Number);
        input = input.slice(match[0].length + 1);
        xorMap = arr.map(function(val, ind) {
            var count = (n - ind) * (1 + ind);
            if(count%2) return val;
            else return 0;
        });
        result = xorMap.reduce(function(p, c) {
            return p ^ c;
        })
        console.log(result);
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