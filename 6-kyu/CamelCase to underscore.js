const toUnderScore = name => {
    return name.replace(/[A-Z]|\d{1,}/g, (str, i) => i && name.charAt(i - 1) !== '_' ? `_${str}` : str);
}