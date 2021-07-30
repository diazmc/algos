//Binary Search Tree

class BST {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }

    insert_node(node) {
        if(node < this.val && this.left) {
            this.left.insert_node(node);
        } else if (node < this.val) {
            this.left = new BST(node)
        } else if (node > this.val && this.right) {
            this.right.insert_node(node);
        } else {
            this.right = new BST(node);
        }
    }
}


let root = new BST(5);
root.insert_node(10);
root.insert_node(3);
root.insert_node(2);
root.insert_node(15);

console.log(root);

