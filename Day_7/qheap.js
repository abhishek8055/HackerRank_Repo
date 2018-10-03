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

var array_length;
/* to create MAX  array */  
function heap_root(input, i) {
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var max = i;

    if (left < array_length && input[left] > input[max]) {
        max = left;
    }

    if (right < array_length && input[right] > input[max])     {
        max = right;
    }

    if (max != i) {
        swap(input, i, max);
        heap_root(input, max);
    }
}

function swap(input, index_A, index_B) {
    var temp = input[index_A];

    input[index_A] = input[index_B];
    input[index_B] = temp;
}

function heapSort(input) {
    
    array_length = input.length;

    for (var i = Math.floor(array_length / 2); i >= 0; i -= 1)      {
        heap_root(input, i);
      }

    for (i = input.length - 1; i > 0; i--) {
        swap(input, 0, i);
        array_length--;
      
      
        heap_root(input, 0);
    }
}


function processData(input) {
    const queries = parseInt(readLine(), 10);
    var arr = new Array();
    for(var i=0; i<queries; i++){
        var newQuery = readLine().replace(/\s+$/g, '').split(' ');
        const action = parseInt(newQuery[0]);
        if(action == 1) {
            let item = parseInt(newQuery[1]);
            arr.push(item);
        }
        if(action == 2) {
            let item = parseInt(newQuery[1]);
            let index = arr.indexOf(item);
            arr.splice(index, 1);
        }
        if(action == 3){
            heapSort(arr);
            console.log(arr[0]);
        }
    }
    
} 
