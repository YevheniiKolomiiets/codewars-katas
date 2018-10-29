// This is here as documentation. The nodes in the tree are instances of
// this class. You don't need to change this implementation.
class Node {
    constructor(value, left = null, right = null){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

const isBST = node => {
    let arr = inOrderTreeAsArray(node);
    if (arr.length <= 1) return true;
    return !!arr.reduce((a, b) => a && a < b ? b : false) || !!arr.reduce((a, b) => a && a > b ? b : false);
};

const inOrderTreeAsArray = node => !node ? [] : [...inOrderTreeAsArray(node.left), node.value, ...inOrderTreeAsArray(node.right)];