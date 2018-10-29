function whatNumberIsIt(n){
    //coding here
    let result = '';
    if (Number.isNaN(n)) return 'Input number is Number.NaN';

    switch (n) {
        case Number.MAX_VALUE:
            result = 'Number.MAX_VALUE';
            break;
        case Number.MIN_VALUE:
            result = 'Number.MIN_VALUE';
            break;
        case Number.NEGATIVE_INFINITY:
            result = 'Number.NEGATIVE_INFINITY';
            break;
        case Number.POSITIVE_INFINITY:
            result = 'Number.POSITIVE_INFINITY';
            break;
        default:
            result = n.toString();
    }
    return `Input number is ${result}`;
}