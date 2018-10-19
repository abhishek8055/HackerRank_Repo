function processData(input) {    
	var inputarr = input.split("\n");
	var n = parseInt(inputarr[0]);
	var suffixes = [];
	var strlen = 0;
	var str = "";
	
	for(var i = 1; i <= n; i++){
		str = inputarr[i];
		strlen = str.length;
		for(var j = 0; j < strlen; j++){
			suffixes.push(str.substr(j));
		}		
	}
	suffixes.sort();
	var endidx = 0;
	var endidxarr = [];
	var regex, str;
	for(var l = 0; l < suffixes.length; l++){
		str = suffixes[l];
		if(str === suffixes[l+1]){
			suffixes.splice(l, 1);
			l--;
		}else{
			if(l > 0)
				str = removePrefix(str, suffixes[l-1]);			
			
			endidx += str.length;
			endidxarr.push(endidx);
		}		
	}	
	//console.log(suffixes);
	//console.log(endidxarr);
	var q = parseInt(inputarr[i]);
	i++;
	
	var k = 0;
	
	for(; i < n+q+2; i++){
		k = parseInt(inputarr[i]);
		enditem = endidxarr.find(function(item, idx){
			if(item >= k){
				return item;
			}
		})				
		
		if(!enditem){
			console.log("INVALID");
		}else{
			endidx = endidxarr.indexOf(enditem);
			str = suffixes[endidx];
			console.log(str.substring(0, str.length-(enditem-k)));
		}
	}	
}

function removePrefix(str, prefix){
	var char = "";
	for(var i = 0; i < prefix.length; i++){
		char = prefix.substr(i,1);
		if(str.indexOf(char) === 0){
			str = str.substr(1);
		}else{
			break;
		}		
	}
	return str;	
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