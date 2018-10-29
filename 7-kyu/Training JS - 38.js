function findSimilarity(str,word){
    return str.split(' ')
        .filter(w => w.match(new RegExp("^" + word.replace(/./g, '.')
            .replace(/^./, word[0])
            .replace(/.$/, word.slice(-1)) + "$")))
        .join(' ');
}