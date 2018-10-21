function processData(input) {
    input = input.split('\n');
    var n = input[0];
    for(var i = 1; i < 2*n; i+= 2){
        console.log(abb(input[i],input[i+1]));
    }
} 

function abb(w1,w2){
    var j = 0;
    var mayus;
    for(var i = 0; i < w2.length; i++){
        while( j < w1.length){
            if( i > 0){
                if(w1[j] != w2[i] && w1[j] != w2[i-1] && w1[j].toUpperCase() == w1[j]){
                    return 'NO';
                }
            }
            if(w1[j] == w2[i] || w1[j].toUpperCase() == w2[i]){
                if(i == w2.length - 1 && w1[j].toUpperCase() == w2[i]){
                    mayus = false;
                }else if(w1[j] == w2[i]){
                    mayus = true;
                }
                j++;
                break;
            }
            j++;
        }
        if(j == w1.length && i == w2.length - 1 && w2[w2.length-1].toUpperCase() != w1[w1.length-1] || j == w1.length && i != w2.length - 1){
            return 'NO';
        }
    }
    for(j; j < w1.length; j++){
        if(w1[j] == w1[j].toUpperCase() && w1[j] != w2[w2.length - 1]){
            return 'NO';
        }else if(w1[j] == w1[j].toUpperCase() && mayus){
            return 'NO'
        }
    }
    return 'YES';
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