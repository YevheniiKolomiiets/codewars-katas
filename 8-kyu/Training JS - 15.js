function howManySmaller(arr,n){
    //coding here..
    return arr.filter(item => item.toFixed(2) < n).length;
}