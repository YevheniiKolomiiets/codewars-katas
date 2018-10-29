function adjacentElementsProduct(array) {
    return array.reduce(
        (max, curr, i) =>
            max = i ?
                curr * array[i - 1] < max ? max : curr * array[i - 1]
                : -Infinity , -Infinity);
}