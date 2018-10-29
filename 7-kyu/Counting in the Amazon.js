function countArara(n) {
    var result = [];
    for (var i = 1; i <= n; i++){
        if (n % 2 && i === n){
            result.push('anane');
        } else if (i % 2 === 0){
            result.push('adak');
        }
    }
    return result.join(' ');
}