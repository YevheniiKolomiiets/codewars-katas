function reduce(head, f, init) {
    return !head ? init : reduce(head.next, f, f(init, head.data));
}