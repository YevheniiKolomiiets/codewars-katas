function infiniteLoop(arr,d,n){
    //coding here...
    if (d === 'left') {
        for (let i = 0; i < n; i++) {
            arr[0].push(arr[1].shift());
            arr[1].push(arr[2].shift());
            arr[2].push(arr[0].shift());
        }
    } else {
        for (let i = 0; i < n; i++) {
            arr[0].unshift(arr[2].pop());
            arr[1].unshift(arr[0].pop());
            arr[2].unshift(arr[1].pop());
        }
    }
    return arr;
}