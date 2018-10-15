'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the bfs function below.
class Queue { 
    // Array is used to implement a Queue 
    constructor() { 
        this.items = []; 
    } 
    // adding element to the queue 
    enqueue(element) {          
        this.items.push(element); 
    } 
    // removing element from the queue 
    // returns underflow when called  
    // on empty queue 
    dequeue() {
        if(this.isEmpty()) 
            return "Underflow"; 
        return this.items.shift(); 
    } 
    // returns the Front element of  
    // the queue without removing it. 
    front() { 
        if(this.isEmpty()) 
            return "No elements in Queue"; 
        return this.items[0]; 
    } 
    // isEmpty function 
    isEmpty() { 
        // return true if the queue is empty. 
        return this.items.length == 0; 
    } 
    printQueue() { 
        var str = ""; 
        for(var i = 0; i < this.items.length; i++) 
            str += this.items[i] +" "; 
        return str; 
    } 
} 

class Graph {
    // adjacent list 
    constructor(noOfVertices) 
    { 
        this.noOfVertices = noOfVertices; 
        this.AdjList = new Map(); 
    } 
    
    addVertex(v) { 
        this.AdjList.set(v, []); 
    }
    addEdge(v, w) {  
        this.AdjList.get(v).push(w); 
        // Since graph is undirected, 
        // add an edge from w to w also 
        this.AdjList.get(w).push(v); 
    } 

    printGraph() { 
        // get all the vertices 
        var get_keys = this.AdjList.keys(); 

        // iterate over the vertices 
        for (var i of get_keys) { 
            // great the corresponding adjacency list 
            // for the vertex 
            var get_values = this.AdjList.get(i); 
            var conc = ""; 

            // iterate over the adjacency list 
            // concatenate the values into a string 
            for (var j of get_values) {
                conc += j + " "; 
            } 
            // print the vertex and its adjacency list 
            console.log(i + " -> " + conc); 
        } 
    } 
} 


function bfs(n, m, edges, s) {
    var graph = new Graph(n); 
    
    //ADDING VERTICES
    for (let i = 1; i<=n; i++) { 
        graph.addVertex(i); 
    } 
    //ADDING EDGES
    for(let i=0; i<m; i++){
        graph.addEdge(edges[i][0], edges[i][1]); 
    }
    
    // create a visited array 
    var visited = []; 
    for (let i = 0; i < n; i++) 
        visited[i] = false; 
  
    // Create an object for queue 
    var q = new Queue(); 
  
    // add the starting node to the queue 
    visited[s-1] = true; 
    q.enqueue(s); 
  
    // loop until queue is element 
    let levelD = 0;
    let res = [n-1];
    
    //RESULT ARRAY WHICH STORES THE DISTANCE FROM ROOT
    for(let i=0; i<n-1; i++) {
        res[i] = -1;
    }
    
    console.log(graph.AdjList);
    while (!q.isEmpty()) { 
        // get the element from the queue 
        var getQueueElement = q.dequeue(); 
        
        // passing the current vertex to callback funtion 
        
  
        // get the adjacent list for current vertex 
        var getList = graph.AdjList.get(getQueueElement); 
        if(getList.length == 1 && !getList.includes(s)) {
            levelD += 6;
        } else if(getList.length > 1) {
            levelD += 6;
        }
        console.log(getQueueElement);
        console.log(getList.length);
        console.log(getList);
        console.log(levelD);
        for(let v=0; v<getList.length; v++) {
            if(getList[v] != s && res[getList[v]-2] == -1) {
                res[getList[v]-2] = levelD;
            }
        }
        
  
        // loop through the list and add the elemnet to the 
        // queue if it is not processed yet 
        for (let i in getList) { 
            let neigh = getList[i]; 
            //console.log(neigh);
            if (!visited[neigh-1]) { 
                visited[neigh-1] = true; 
                q.enqueue(neigh); 
            } 
        }
    }
    return res;
   
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const nm = readLine().split(' ');

        const n = parseInt(nm[0], 10);

        const m = parseInt(nm[1], 10);

        let edges = Array(m);

        for (let i = 0; i < m; i++) {
            edges[i] = readLine().split(' ').map(edgesTemp => parseInt(edgesTemp, 10));
        }

        const s = parseInt(readLine(), 10);

        let result = bfs(n, m, edges, s);

        ws.write(result.join(" ") + "\n");
    }

    ws.end();
}
