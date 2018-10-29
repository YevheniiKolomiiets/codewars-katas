function meeting(s) {
    return s.split(';')
        .map( name => `(${name.split(':')
            .reverse()
            .join(', ')
            .toUpperCase()})` )
        .sort()
        .join('');
}