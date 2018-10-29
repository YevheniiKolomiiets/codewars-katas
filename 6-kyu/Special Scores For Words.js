function findWord(num_let, max_ssw) {
    let result = wordList
        .filter(word => word.length === num_let)
        .reduce((result, current) =>
                result = current.ssw() <= max_ssw && current.ssw() >= result.ssw() ?
                    current : result,
            '');

    return result ? result : null;
}

String.prototype.ssw = function() {
    return this.split('').reduce((score, char) => score += char.charCodeAt(0), 0);
};