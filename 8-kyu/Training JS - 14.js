function colorOf(r,g,b){
    //coding here
    let hexArr = [
        r.toString(16).length === 1 ? '0' + r.toString(16) : r.toString(16),
        g.toString(16).length === 1 ? '0' + g.toString(16) : g.toString(16),
        b.toString(16).length === 1 ? '0' + b.toString(16) : b.toString(16),
    ];
    return '#'.concat(hexArr.join(''));
}