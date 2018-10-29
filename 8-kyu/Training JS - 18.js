function splitAndMerge(str,sp){
    return str.split(' ')
        .map(s => s.split('').join(sp))
        .join(' ');
}