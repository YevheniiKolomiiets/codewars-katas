function high(x){
    return x.split(' ').reduce((result, word) => result = word.score() > result.score() ? word : result, '');
}

String.prototype.score = function() {
    return this.split('').reduce((score, char) => score += char.charCodeAt(0) - 96, 0);
};