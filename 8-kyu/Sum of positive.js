function positiveSum(arr) {
    return arr.filter(n => n > 0).length ? arr.filter(i => i > 0).reduce((sum, current) => sum += current) : 0;
}