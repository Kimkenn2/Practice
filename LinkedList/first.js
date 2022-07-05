// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }

class Node {
    constructor(value) {
        this.value = value,
        this.next = null
    }
}

class LinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        // let node = new this.Node(data)
        const newNode = new Node(value)
        this.tail.next = newNode;
        this.tail = newNode
        this.length++
        // return this;
    }

    prepend(value) {
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
    }
    printList() {
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next
        }
        console.log(array)
        // console.log(this.tail.next == null)
    }
    insert(index, value){
        //check params
        if(index >= this.length){
            return this.append(value)
        }
        const newNode = new Node(value)
        const leader  = this.traverseToIndex(index-1)
        newNode.next = leader.next
        leader.next = newNode
    }
    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next
            counter++
        }
        return currentNode
    }
    remove(index) {
        const leader = this.traverseToIndex(index-1)
        leader.next = leader.next.next
        this.length--;
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
// myLinkedList.prepend(1515)
myLinkedList.insert(2, 99)
myLinkedList.insert(1, 414)
myLinkedList.insert(152125, 1)
myLinkedList.printList()
myLinkedList.remove(2)
myLinkedList.remove(2)
myLinkedList.printList()
// console.log(myLinkedList)