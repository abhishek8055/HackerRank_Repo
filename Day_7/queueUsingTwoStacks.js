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
    //INSTACK WILL ALWAYS BE USED FOR INSERTION 
    var inStack = new Array(); 
    //OUTSTACK WILL BE USED FOR PRINTING AND DELETING
    var outStack = new Array();
    const queries = parseInt(readLine(), 10);
    for(var i=0; i<queries; i++){
        var newQuery = readLine().replace(/\s+$/g, '').split(' ');
        const action = parseInt(newQuery[0]);
        //IF THE OPERATION TO BE PERFORMED IS ENQUEUE
        if(action == 1) {
            let item = parseInt(newQuery[1]);
            //INSERT NEW ELEMENT IN INSTACK
            inStack.push(item);
        } else { //IF OPERATION IS NOT ENQUEUE THEN POP ALL ELEMENTS OF STACK 1 AND PUSH STACK 2
            if(outStack.length == 0) {
                while(inStack.length > 0){
                    let item = inStack.pop();
                    outStack.push(item);
                }
            }
        }
        //IF OPERATION TO BE PERFORMED IS DEQUEUE THEN POP LAST ELEMENT FROM STACK 2
        if(action == 2) {
            outStack.pop();
        }
        //IF OPERATION TO BE PERFORMED IS SHOW THEN PRINT LAST ELEMENT FROM STACK 2
        if(action == 3) {
            console.log(outStack[outStack.length-1]);
        }
    }
} 

