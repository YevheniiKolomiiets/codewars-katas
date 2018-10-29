function mirrorImage(arr){
    let result = [];
    arr.some((x, i) => {
        result[0] = x;
        result[1] = arr[i+1];
        return result[0] && result[1] ? result[0].toString() === result[1].toString().split('').reverse().join('') : result = [-1, -1];
    });
    return result;
}