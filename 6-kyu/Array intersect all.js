var intersect = function (...args) {
    return !args[0] ? [] : args[0].filter(w => args.every(a => a.includes(w)));
};