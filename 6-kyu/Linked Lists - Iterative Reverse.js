function Node(data) {
    this.data = data === undefined ? null : data;
    this.next = null;
}

function reverse(list) {
    let arr = [];
    let head = list

    while (head) {
        arr.push(head.data);
        head = head.next;
    }

    arr.reverse();

    let i = 0;
    while (list) {
        list.data = arr[i];
        list = list.next;
        i++;
    }
}