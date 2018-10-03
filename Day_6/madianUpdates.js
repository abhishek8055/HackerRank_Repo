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
//FUNCTION RETURNS THE MEDIAN OF CURRENT ARRAY
function median(arr) {
    //IF ARRAY IS EMPTY THEN THERE WILL BE NO MEDIAN
    if (arr.length == 0) { 
        return "Wrong!"; 
    }
    //IF NUMBER OF ELEMENT IN ARRAY IS ODD
    if (arr.length % 2 == 1) {
        return arr[Math.floor(arr.length / 2)];
    } else {//IF NUMBER OF ELEMENT IN ARRAY IS EVEN
        var index = arr.length / 2;
        return (arr[index - 1] + arr[index]) / 2;
    }
}
//FUNCTION THAT FINDS THE CORRECT(SORTED POSITION) FOR NEW ITEM TO BE INSERTED IN ARRAY
function binarySearch(arr, item, start, end) {
    //IF ARRAY IS EMPTY, INSERT ITEM AT INDEX ZERO
    if(arr.length == 0) {
        return 0;
    }
    //IF NEW ITEM IS SMALLLER THAN ALL EXIXTING ELEMENTS THEN INSERT AT INDEX ZERO
    if (item <= arr[start]) { 
        return start; 
    }
    //IF NEW ITEM IS GREATER THAN ALL EXIXTING ELEMENTS THEN INSERT AT INDEX LAST
    if (arr[end] < item) { 
        return end + 1;
    }
    //IF THERE IS ONLY TWO ELEMENT IN ARRAY
    if(end - start == 1){
        return end;
    }
    
    var index = start + Math.floor((end - start + 1) / 2);
    //BINARY SEARCH FOR INDEX AT LEFT SIDE
    if (item <= arr[index]) {
        return binarySearch(arr, item, start, index);
    }
    //BINARY SEARCH FOR INDEX AT RIGHT SIDE
    if (arr[index] < item) {
        return binarySearch(arr, item, index, end);
    }
}

function processData(input) {
    //NUMBER OF TEST CASES
    const queries = parseInt(readLine(), 10);
    var res = [];
    var arr = [];
    for(var i=0; i<queries; i++) {
        var nextQuery = readLine().replace(/\s+$/g, '').split(' ');
        var action = nextQuery[0];
        
        if(action == 'a') {
            var item = parseInt(nextQuery[1]);
            //FINDING THE CORRECT INDEX FOR NEW ITEM TO BE INSERTED
            var index = binarySearch(arr, item, 0, arr.length-1);
            //INSERTING NEW ITEM IN SORTED MANNER
            arr.splice(index, 0, item);
            //INSERTING THE NEWLY CREATED MEDIAN INTO RESULT ARRAY
            res.push(median(arr));
        }
       
        if(action == 'r') {
            var item = parseInt(nextQuery[1]);
            //FINDING THE INDEX OF ITEM TO BE REMOVED
            let found = arr.indexOf(item); 
            //IF ITEM IS NOT PRESENT IN ARRAY
            if(found == -1) {
                console.log("Wrong!");
            } else {
                //REMOVING ITEM
                arr.splice(found,1); 
                //ST
                res.push(median(arr));
            }          
        }
    }
    for(var i=0; i<res.length; i++) {
        console.log(res[i]);
    }
} 

