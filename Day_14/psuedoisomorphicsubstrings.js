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
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the pseudoIsomorphicSubstrings function below.
 */
function pseudoIsomorphicSubstrings(s) {
    const N = s.length;

    // initialize count matrix
    let ans = [];
    let isoSetCounts = Array(N+1); // 1st index is lengh of pairwise substrings
    for (var i=0; i <= N; i++) {
        isoSetCounts[i] = Array(N).fill(0); // 2nd index is ending index of the "top" substring 
    }

    // determine pairwise iso for length 2
    let len = 2;
    let maxStartIdx = N-len;
    let isIsoMatrix = initSquareArray(maxStartIdx + 1);
    isoSetCounts[len][len-1] = 1;
    let currentSetCount = isoSetCounts[len][len-1];
    for (var j=1; j <= maxStartIdx; j++) {
        let isIsoToSome = false;
        for (var i=0; i < j; i++) {
            //console.log("len=%d; j=%d; i=%d",len, j, i)
            isIsoMatrix[i][j] = ((s[i] == s[i+1]) == (s[j] == s[j+1]));
            
            if (isIsoMatrix[i][j]) {
                isIsoToSome = true;
            } 
        }
        if (!isIsoToSome) {
            currentSetCount++;
        }
        isoSetCounts[len][j+len-1] = currentSetCount;
    }
    //console.log(isoSetCounts);
    
    for (len=3; len <= N; len++) { // length of substrings
        let isIsoMatrixPrev = isIsoMatrix;
        maxStartIdx = N - len;
        isIsoMatrix = initSquareArray(maxStartIdx + 1);

        isoSetCounts[len][len-1] = 1;
        currentSetCount = isoSetCounts[len][len-1];
        for (var j=1; j <= maxStartIdx; j++) {
            let isIsoToSome = false;
            for (var i=0; i < j; i++) {
                //console.log("len=%d; j=%d; i=%d",len, j, i)
                if (!isIsoMatrixPrev[i][j] || !isIsoMatrixPrev[i+1][j+1]) {
                    isIsoMatrix[i][j] = false;
                } else {
                    isIsoMatrix[i][j] = true;

                    // check if the last letter appears in same places
                    let idx1 = s.substring(i, i+len-1).indexOf(s[i+len-1])
                    let idx2 = s.substring(j, j+len-1).indexOf(s[j+len-1])
                    if (idx1 != idx2) {
                        isIsoMatrix[i][j] = false;
                    } 
                }

                if (isIsoMatrix[i][j]) {
                    isIsoToSome = true;
                } 
            }

            if (!isIsoToSome) {
                currentSetCount++;
            }
            isoSetCounts[len][j+len-1] = currentSetCount;
        }

        isIsoMatrixPrev = null; 
        //console.log(isoSetCounts);
    }

    // compute final counts
    for (var pos = 0; pos < N; pos++) {
        var posCount = 1;
        for (len=1; len <= N; len++) {
            posCount += isoSetCounts[len][pos];
        }
        ans.push(posCount);
    }
    //console.log(isIso);
    //console.log("----------------------");

    return ans;
}

function initSquareArray(size) {
    let matrix = Array(size);
    for (var i=0; i < size; i++) {
        matrix[i] = Array(size);
    }
    return matrix;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = pseudoIsomorphicSubstrings(s);

    ws.write(result.join("\n") + "\n");

    ws.end();
}