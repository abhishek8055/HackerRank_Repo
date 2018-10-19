var parentNodes = [],childNodes = [];
var count,constant;
var similarPairCount = 0;
var parentNode = '';
var nodes = {};

function processData(input) {
    count = parseInt(input.split("\n")[0].split(" ")[0]);
    constant = parseInt(input.split("\n")[0].split(" ")[1]);
   var input =  input.split('\n');
    var index = 0;
    
    this.subtractNodes = function(parent,child) {
        if(Math.abs(parseInt(parent) - child) <= constant) { 
            similarPairCount++;
       }
    }
    
    this.dfstravel = function(nodeVal) {
        if(nodes.hasOwnProperty(nodeVal)) {
            this.findChild(parentNode,nodes[nodeVal]);
        }
    }
    this.findChild = function(parent,childArray) {
        parentNode = parent;
        for(var i =0; i < childArray.length; i++) {
            this.subtractNodes(parentNode,childArray[i]);
            this.dfstravel(childArray[i]);
        }
    }
    for(var i = 1; i < count; i++) {
        parent = parseInt(input[i].split(" ")[0]);
        child = parseInt(input[i].split(" ")[1]);
         if(nodes.hasOwnProperty(parent)) {
          nodes[parent].push(child);
          }else {
          nodes[parent] = [child];
          }
       }
    
    
    for(node in nodes) {
      this.findChild(node,nodes[node]);
    }
    console.log(similarPairCount);

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