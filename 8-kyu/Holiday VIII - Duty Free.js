function dutyFree(normPrice, discount, hol){
    return parseInt( hol / (normPrice * discount * 0.01) );
}