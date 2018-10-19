function processData(input) {
  input = input.split('\n');
  for (var i = 2; i < input.length; i = i + 2) {
    console.log(sum(input[i].split(' ').map(Number), Number(input[i - 1].split(' ')[1])));
  }
}

function sum(arr, mod) {
  var sum, res = [], prefix = [];
  for (var i = 0; i < arr.length; i++) {
    prefix.push({id:i,val: ((prefix[i - 1] && prefix[i-1].val || 0) + arr[i]) % mod});
  }
  prefix.sort((a,b) => a.val - b.val);
  var max = prefix[0].val;
  for(i = 0; i < arr.length - 1; i++){
    max = Math.max(max, prefix[i+1].val);
    if(prefix[i].id > prefix[i+1].id)
      max = Math.max(max, (prefix[i].val + mod - prefix[i+1].val) % mod);
  }
  return max;
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