function tailAndHead(arr){
    return arr.map((n, i) => (n%10 + +String(arr[i+1])[0]) || 1).reduce((prev, curr) => prev * curr);
}