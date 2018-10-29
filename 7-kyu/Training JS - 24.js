function threeInOne(arr){
    let result = arr.slice();
    for (let i = 0; i < result.length; i++) {
        result.splice(i, 3, result[i] + result[i + 1] + result[i + 2]);
    }
    return result;
}