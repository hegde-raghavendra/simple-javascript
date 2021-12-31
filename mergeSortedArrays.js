function mergeSortedArrays(array1, array2) {

    let output = [];
    let left = 0;
    let right = 0;

    while (array1[left] !== undefined  && array2[right] !== undefined) {
        if(array1[left] < array2[right]) {
            output.push(array1[left]);
            left = left+1;
        } else {
            output.push(array2[right]);
            right = right + 1;
        }
        console.log(output);
    }
    if (array1[left] === undefined) {
        for (let i = right; i < array2.length; i++) {
            output.push(array2[i]);
        }        
    }
    if (array2[right] === undefined) {
        for (let i = left; i < array1.length; i++) {
            output.push(array1[i]);
        }        
    }
    return output;

}

console.log(mergeSortedArrays([0, 3, 4, 31], [4,6,30])); ;

