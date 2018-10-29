function alienLanguage(str){
    //coding here...
    return str.split(' ')
        .map(word => word.toUpperCase().slice(0, word.length - 1) + word.toLowerCase().slice(-1))
        .join(' ');
}