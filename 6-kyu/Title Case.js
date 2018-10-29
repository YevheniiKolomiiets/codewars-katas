function titleCase(title, minorWords) {
    if (!title) return '';
    let minorWordsArr = minorWords ? minorWords.toLowerCase().split(' ') : [];
    return title.split(' ').reduce((result, word, i) =>
        result += (i === 0 ?
            capitalizeFirstLetter(word) : ~minorWordsArr.indexOf(word.toLowerCase()) ?
                word.toLowerCase() : capitalizeFirstLetter(word)) + ' ', '').trim();
}

function capitalizeFirstLetter(word) {
    return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
}