function sortDict(dict){
    return Object.entries(dict).map(([key, value]) => [Number(key) || key, value]).sort((a, b) => b[1] - a[1]);
}