String.prototype.capitalizeFirstLetter = function() {
    return this.slice(0, 1).toUpperCase() + this.slice(1).toLowerCase();
};

function toCamelCase(str){
    return !str ? '' : str
        .split(/[-_]/g)
        .map((word, i) => i === 0 ? word : word.capitalizeFirstLetter())
        .join('');
}