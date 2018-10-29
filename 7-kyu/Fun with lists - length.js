function length(head, l = 1) {
    return !head ?
        0 : head.next ?
            length(head.next, l + 1) : l;
}