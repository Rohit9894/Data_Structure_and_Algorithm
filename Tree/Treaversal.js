class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Insert a new value into the tree
  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  // Inorder Traversal (Left -> Root -> Right)
  inorder(node = this.root) {
    if (node) {
      this.inorder(node.left);
      console.log(node.value);
      this.inorder(node.right);
    }
  }

  // Preorder Traversal (Root -> Left -> Right)
  preorder(node = this.root) {
    if (node) {
      console.log(node.value);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  // Postorder Traversal (Left -> Right -> Root)
  postorder(node = this.root) {
    if (node) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.value);
    }
  }
}


{
  "root": {
    "value": 10,
    "left": {
      "value": 5,
      "left": {
        "value": 2,
        "left": null,
        "right": null
      },
      "right": {
        "value": 7,
        "left": null,
        "right": null
      }
    },
    "right": {
      "value": 15,
      "left": null,
      "right": null
    }
  }
}

        10
       /  \
     5     15
    / \
   2   7

