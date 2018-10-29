function getCount(str) {
    return str.length - str.replace(/a|e|i|o|u/g, "").length;
}