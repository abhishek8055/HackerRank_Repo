process.stdin.resume();
process.stdin.setEncoding("ascii");
let currentLine = 0;
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   _input = _input.split('\n');
    processData(_input);
});
function readLine() {
    return _input[currentLine++];
}

function processData(input) {
    const queries = parseInt(readLine(), 10);
    var arr = new Array(); 
    for(var i=0; i<queries; i++) {
        var nextQuery = readLine().replace(/\s+$/g, '').split(' ');
        var action = nextQuery[0];
        if(action == 'a') {
            var item = parseInt(nextQuery[1]);
            arr.push(item);
            arr.sort(function(a,b){return a - b})
            var mid = Math.floor(arr.length/2);
            if(arr.length%2 == 0) {
                console.log((arr[mid-1]+arr[mid])/2);
            }
            else {
                console.log(arr[mid]);
            }
        }
        
        if(action == 'r') {
            var item = parseInt(nextQuery[1]);
            let found = arr.indexOf(item); 
            if(found == -1) {
                console.log("Wrong!");
            } else {
                arr.splice(found,1);
                if(arr.length > 0){
                    arr.sort(function(a,b){return a - b})
                    var mid = Math.floor(arr.length/2);
                    if(arr.length%2 == 0) {
                        console.log((arr[mid-1]+arr[mid])/2);
                    }
                    else {
                        console.log(arr[mid]);
                    }
                } else {
                    console.log("Wrong!");
                }  
            }          
        }
    }
} 

