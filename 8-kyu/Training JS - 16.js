function cutIt(arr){
    //coding here...
    let minLength = Infinity;
    arr.forEach(item => minLength = item.length < minLength ? item.length : minLength);
    return arr.map(item => item.slice(0, minLength));
}