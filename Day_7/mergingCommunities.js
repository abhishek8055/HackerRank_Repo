function processData(input) {
    var lines = input.split("\n");
    var index = 0;
    //line0 contains the number of communities and queries
    var line0 = lines[index++].split(" ");
    var n = parseInt(line0[0]);
    var q = parseInt(line0[1]);
    var com = [];
    for (var i = 1; i <= n; i++) {
        com[i] = { 
            _size: 1,
            index: i,
            getSize: function () {
                if (this.parent) {
                    return this.parent.getSize();
                } else {
                    return this._size;
                }
            },
            setParent: function (p) {
                if (p.index === this.index) {
                    return;
                }
                if (p.index > this.index) {
                    p.setParent(this);
                    return;
                }    
                if (p.parent) {
                    this.setParent(p.parent);
                    return;
                }
                if (this.parent) {
                    this.parent.setParent(p);
                    return;
                }
                p._size += this.getSize();
                this.parent = p;
            },
        };
    }
    for (var i = 0; i < q; i++) {
        var query = lines[index++].split(" ");
        if (query[0] === "Q") {
            console.log(com[query[1]].getSize());
        } else {
            com[query[1]].setParent(com[query[2]]);
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
});