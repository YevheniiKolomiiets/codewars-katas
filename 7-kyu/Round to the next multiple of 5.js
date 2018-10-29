function roundToNext5(n){
    return n % 5 !== 0 && n > 0 ? n + 5 - n % 5 : n - n % 5;
}