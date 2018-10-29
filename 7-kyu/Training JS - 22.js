const shuffleIt = (arr, ...swap) =>{
    for (x of swap) {
        let [a, b] = x;
        [ arr[b], arr[a] ] = [ arr[a], arr[b] ];
    }
    return arr;
}