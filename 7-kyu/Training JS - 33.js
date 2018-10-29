function maxMin(arr1,arr2){
    let difference = arr1.map((n, i) => Math.abs(n - arr2[i]));
    return [Math.max(...difference), Math.min(...difference)];
}