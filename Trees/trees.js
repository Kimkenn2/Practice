class Node{
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null
    }
    insert(value){
        const newNode = new Node(value);
        if(this.root === null){
            this.root = newNode
        } else {
            let currentNode = this.root;
            while(true) {
                if(value < currentNode.value){
                    //left
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this
                    }
                    currentNode = currentNode.left
                } else {
                    //right
                    if(!currentNode.right){
                        currentNode.right = newNode;
                        return this;
                    } 
                    currentNode = currentNode.right
                }
            }
        }
    }
    lookup(value){
        // let currentNode = this.root
        // // console.log(currentNode)
        // while(currentNode) {
        //     if(currentNode.value === value){
        //         return currentNode.value
        //     } else if (value < currentNode.value){
        //         currentNode = currentNode.left
        //     } else if (value > currentNode.value){
        //         currentNode = currentNode.right
        //     }
        //     if(currentNode.right == null && currentNode.left == null){
        //         return("not found")
        //     }
        // }
        if(!this.root){
            return false;
        }
        let currentNode = this.root;
        while(currentNode){
            if(value < currentNode.value){
                currentNode = currentNode.left
            } else if (value > currentNode.value){
                currentNode = currentNode.right;
            } else if (currentNode.value === value){
                return currentNode;
            }
        }
        return false
    }
}

const tree = new BinarySearchTree();
tree.insert(1)
tree.insert(2)
tree.insert(15)
tree.insert(13)
tree.insert(0)
tree.insert(14)
// console.log(JSON.stringify(traverse(tree.root)))
console.log(tree.lookup(15))


//       9
//   4      20
// 1   6  15   170

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  }