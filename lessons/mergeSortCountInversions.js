//Algorithm for counting inversions in an unsorted array

//duplicates in arrays not admitted

function countInversions(array) {
let inversions = 0;

const mergeCount = (array1, array2) => {
    const mergedArray = [];
    const mergedArrayLength = (array1.length + array2.length);

    for(i=0 ; i < mergedArrayLength ; i++) {
        if((array1[0] <= array2[0] || array2.length === 0) && array1.length != 0) {
            mergedArray.push(array1.shift());
        } else {
            mergedArray.push(array2.shift());
            inversions += array1.length;
        }
    }
    return mergedArray;
}

function recursiveCalls(array) {
    if(array.length === 1) return array;

    let m = Math.floor(array.length / 2);
    let firstHalf = array.slice(0, m);
    let secondHalf = array.slice(m, array.length);

    firstHalf = recursiveCalls(firstHalf);
    secondHalf = recursiveCalls(secondHalf);

    return mergeCount(firstHalf, secondHalf);    
}

    recursiveCalls(array);
    return inversions;
}
