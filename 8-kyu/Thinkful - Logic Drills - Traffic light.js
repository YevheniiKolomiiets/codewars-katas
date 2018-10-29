function updateLight(current) {
    let result = '';
    let arr = ['green', 'yellow', 'red', 'green'];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === current) {
            result = arr[i+1];
            break;
        }
    }
    return result;
}