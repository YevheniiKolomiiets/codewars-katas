function isolateIt(arr){
    return arr.map(s => s = s.length%2 ? s.slice(0, s.length/2) + '|' + s.slice(s.length/2 + 1, s.length) : s.slice(0, s.length/2) + '|' + s.slice(s.length/2, s.length));
}