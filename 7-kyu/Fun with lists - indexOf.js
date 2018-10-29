function indexOf(head, value, i = 0) {
    return !head ?
        -1 : head.data === value ?
            i : indexOf(head.next, value, ++i);
}