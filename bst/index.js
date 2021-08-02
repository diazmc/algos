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

    pre_order() {
        console.log(this.val);

        if(this.left) {
            this.left.pre_order();
        }

        if(this.right) {
            this.right.pre_order();
        }
    }

    in_order() {
        if(this.left) {
            this.left.in_order();
        }

        console.log(this.val);

        if(this.right) {
            this.right.in_order();
        }
    }

    post_order() {
        if(this.left) {
            this.left.post_order();
        }

        if(this.right) {
            this.right.post_order();
        }

        console.log(this.val);
    }
}


let root = new BST(6);
root.insert_node(10);
root.insert_node(3);
root.insert_node(2);
root.insert_node(4);
root.insert_node(15);
root.insert_node(9);

root.post_order();

