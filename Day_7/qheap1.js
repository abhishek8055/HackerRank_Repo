function processData(input) {
    var inputArray = input.split('\n');
    var output='';
    var testCase = parseInt(inputArray[0]);
    var actions;
    var myHeap=[];
    function addHeap(){

    }
    function deleteFromHeap(n) {
        for(var i=0;i<myHeap.length;i++){
            if(myHeap[i]==n){
                myHeap.splice(i, 1);
            }
        }
    }
    function getMin(){
        var min=myHeap[0];
        for(var i=0;i<myHeap.length;i++){
            if(myHeap[i]<min){
                min = myHeap[i];
            }
        }
        return min;
    }

    for(var i=1; i<=testCase; i++){
        actions = inputArray[i].split(' ');
        if(parseInt(actions[0])==1){
            myHeap.push(parseInt(actions[1]));
        }else if(parseInt(actions[0])==2){
            deleteFromHeap(parseInt(actions[1]));
        }else{
            output += getMin()+'\n';
        }
    } 
    console.log(output);  
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