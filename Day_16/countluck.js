function processData(input) {
    //Enter your code here
    var lines = input.split('\n');
    var caseLine, rowSize, colSize, root, startPosCol, startPosRow, matrix, breadth, curNode, newNode, exitNode, count, hypothesis;
    lines.shift(); // remove number of cases
    
    function Node (parent, rowIndex, colIndex) {
        this.parent = parent;
        this.rowIndex = rowIndex;
        this.colIndex = colIndex;
        this.value = matrix[rowIndex][colIndex];
        this.childrenCount = 0;
    }
    
    while (lines.length != 0 ){
        caseLine = lines.shift().split(' ');
        rowSize = parseInt(caseLine.shift());
        colSize = parseInt(caseLine.shift());
        exitNode = null;
        breadth = [];
        matrix = [];
        count = 0;
        
        //put elements into matrix
        for (var rowIndex = 0; rowIndex < rowSize; rowIndex++){
            matrix.push(lines.shift().split(''));
        }

        //find start position 
        for (var rowIndex = 0; rowIndex < rowSize; rowIndex++){
            startPosCol = matrix[rowIndex].indexOf('M');
            if (startPosCol != -1){
                startPosRow = rowIndex;
                break;
            }
        }
        
        root = new Node (null, startPosRow, startPosCol);
        breadth.push(root);
        
        function nodeHandler (inputNode){
            if (inputNode.parent.parent != null){
                if (inputNode.rowIndex == inputNode.parent.parent.rowIndex && 
                    inputNode.colIndex == inputNode.parent.parent.colIndex){
                    return false;
                }
            }
            
            if (inputNode.value == '.'){
                inputNode.parent.childrenCount++;
                breadth.push(inputNode);
            }
            if (inputNode.value == '*'){
                inputNode.parent.childrenCount++;
                return true;
            }
            return false;
        }
        
        //Get Exit Node
        while (breadth.length != 0){
            curNode = breadth.shift();
            if (curNode.rowIndex + 1 < rowSize){
                newNode = new Node (curNode, curNode.rowIndex+1, curNode.colIndex);
                if (nodeHandler(newNode)){
                    exitNode = newNode;
                }
            }
            if (curNode.rowIndex -1 >= 0){
                newNode = new Node (curNode, curNode.rowIndex -1, curNode.colIndex);
                if (nodeHandler(newNode)){
                    exitNode = newNode;
                }
            }
            if (curNode.colIndex+1 < colSize){
                newNode = new Node (curNode, curNode.rowIndex, curNode.colIndex +1);
                if (nodeHandler(newNode)){
                    exitNode = newNode;
                }
            }
            if (curNode.colIndex -1 >= 0){
                newNode = new Node (curNode, curNode.rowIndex, curNode.colIndex -1);
                if (nodeHandler(newNode)){
                    exitNode = newNode;
                }
            }
            if (exitNode != null){
                break;
            }
            
        }
        
        //Count the number of intersections from exit to start
        curNode = exitNode;
        
        while (curNode.parent != null){
            curNode = curNode.parent;
            if (curNode.childrenCount >1){
                count++;
            }
        }
        hypothesis = parseInt(lines.shift());
        if (count == hypothesis){
            console.log('Impressed');
            
        }
        else {
            console.log('Oops!');
        }
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
});countluck.js