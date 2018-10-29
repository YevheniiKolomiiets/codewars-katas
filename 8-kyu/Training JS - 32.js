function roundIt(n){
    let [left, right] = String(n).split('.').map(side => side.length);
    return left === right ?
                        Math.round(n) : left < right ?
                            Math.ceil(n) : Math.floor(n);
}