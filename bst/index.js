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

    find_node(node) {
        if(node < this.val && this.left) {
            return this.left.find_node(node);
        }
        if(node > this.val && this.right) {
            return this.right.find_node(node)
        }

        return node == this.val;
    }

    pre_order() {
        // console.log(this.val);

        // if(this.left) {
        //     this.left.pre_order();
        // }

        // if(this.right) {
        //     this.right.pre_order();
        // }
        let output = [];
        let stack = [];

        if(this !== null) {
            stack.push(this);
        }
        let cur;
        while(stack.length !== 0) {
            cur = stack.pop();
            output.push(cur.val);
            if(cur.right) {
                stack.push(cur.right);
            }
            if(cur.left) {
                stack.push(cur.left);
            }
        }

        console.log(output);
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

function bfs(node) {
    let queue = [];
    queue.push(node);

    while(queue.length !== 0) {
        current = queue.shift();
        console.log(current.val)

        if(current.left) {
            queue.push(current.left)
        }

        if(current.right) {
            queue.push(current.right)
        }
    }
}

function find_min_val(node) {
    if(node.left) {
        return find_min_val(node.left);
    }
    else {
        return node.val;
    }
}



let root = new BST(6);
root.insert_node(10);
root.insert_node(3);
root.insert_node(2);
root.insert_node(1);
root.insert_node(4);
root.insert_node(15);
root.insert_node(9);

root.pre_order();