function rgb(r, g, b){
    return Array.from(arguments).map(color =>
        color <= 0 ?
            '00' : color >= 255 ?
            'FF' : color.toString(16))
        .join('')
        .toUpperCase();
}