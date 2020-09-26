//generate an array

const genArr = (n) => {
    const array = [];
    for(let i = 0 ; i < n ; i++) {
        array.push(Math.floor(Math.random() * 100000001));
    }
    return array;
}

//merge sort

function merge(firstHalf, secondHalf) {
    const mergedLength = firstHalf.length + secondHalf.length;
    const mergedArray = [];
    let i = 0;
    let j = 0;
    for (let c = 0 ; c < mergedLength ; c++) {
        if(i < firstHalf.length && j < secondHalf.length) {
            if(firstHalf[i] <= secondHalf[j]) {
                mergedArray[c] = firstHalf[i];
                i++;
            } else {
                mergedArray[c] = secondHalf[j];
                j++;
            }
        } else if(i === firstHalf.length) {
            mergedArray[c] = secondHalf[j];
            j++;
        } else if(j === secondHalf.length) {
            mergedArray[c] = firstHalf[i];
            i++;
        }
    }
    return mergedArray;
}

function mergeSort(array) {
    if(array.length === 2) return array[0] <= array[1] ? [array[0], array[1]] : [array[1], array[0]];
    if(array.length === 1) return array;

    let m = Math.floor(array.length / 2);
    let firstHalf = array.slice(0, m);
    let secondHalf = array.slice(m, array.length);

    firstHalf = mergeSort(firstHalf);
    secondHalf = mergeSort(secondHalf);

    return merge(firstHalf, secondHalf);    
}

let arr = genArr(2500000);
console.log(mergeSort(arr).slice(2499990));