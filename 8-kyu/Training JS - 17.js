function firstToLast(str,c){
    return ~str.search(c) ? str.lastIndexOf(c) - str.indexOf(c) : -1;
}