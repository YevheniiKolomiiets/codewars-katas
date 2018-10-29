function humanReadable(seconds) {
    return `${String(parseInt(seconds / 3600)).padStart(2, '0')}:${String(parseInt(seconds / 60 % 60)).padStart(2, '0')}:${String(parseInt(seconds % 60)).padStart(2, '0')}`;
}