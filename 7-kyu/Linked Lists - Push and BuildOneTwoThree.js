class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

const push = (head, data) => new Node(data, head);

const buildOneTwoThree = () => [1, 2, 3].reduceRight((head, data) => push(head, data), null);