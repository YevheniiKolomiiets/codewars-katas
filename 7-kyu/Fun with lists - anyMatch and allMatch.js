function anyMatch(head, p) {
    return !head ?
        false : p(head.data) ?
            true : anyMatch(head.next, p);
}

function allMatch(head, p) {
    return !head ?
        true : p(head.data) ?
            allMatch(head.next, p) : false;
}