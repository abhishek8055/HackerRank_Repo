'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'kruskals' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts WEIGHTED_INTEGER_GRAPH g as parameter.
 */

/*
 * For the weighted graph, <name>:
 *
 * 1. The number of nodes is <name>Nodes.
 * 2. The number of edges is <name>Edges.
 * 3. An edge exists between <name>From[i] and <name>To[i]. The weight of the edge is <name>Weight[i].
 *
 */

function solve(gNodeCount, gFrom, gTo, gWeight) {
  const adjList = {};
  for (let i = 1; i <= gNodeCount; i++) adjList[i] = [];
  gFrom.forEach((d, i) => {
    adjList[d].push({ dest: gTo[i], weight: gWeight[i] });
    adjList[gTo[i]].push({ dest: d, weight: gWeight[i] });
  });
  const edgeList = adjList[1];
  const visited = { 1: true };
  let totalWeight = 0;
  while (gNodeCount-- > 1) {
    // Using a min heap will yeild a faster solution.
    edgeList.sort((a, b) => b.weight - a.weight);
    const bestEdge = edgeList.pop();
    totalWeight += bestEdge.weight;

    adjList[bestEdge.dest].forEach(d => {
      if (visited[d.dest]) return;

      const existingSameDestEdge = edgeList.find(e => d.dest === e.dest);
      if (!existingSameDestEdge) edgeList.push(d);
      else existingSameDestEdge.weight = Math.min(existingSameDestEdge.weight, d.weight);
    });

    visited[bestEdge.dest] = true;
  }
  return totalWeight;
}

function main() {
  const gNodesEdges = readLine().split(' ');
  const gNodeCount = Number(gNodesEdges[0]);
  const gEdges = Number(gNodesEdges[1]);

  let gFrom = [];
  let gTo = [];
  let gWeight = [];

  for (var gItr = 0; gItr < gEdges; gItr++) {
    const gFromToWeight = readLine().split(' ');

    gFrom.push(parseInt(gFromToWeight[0], 10));
    gTo.push(parseInt(gFromToWeight[1], 10));
    gWeight.push(parseInt(gFromToWeight[2], 10));
  }
  console.log(solve(gNodeCount, gFrom, gTo, gWeight));
}