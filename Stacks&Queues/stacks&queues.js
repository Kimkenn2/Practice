class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek(){
        return this.top
    }
    push(value){
        const newNode = new Node()
        newNode.value = value
        newNode.next = this.top
        this.top = newNode
        this.length++
        return this
    }
    pop(){ 
        if(!this.top){
            return null
        }
        if(this.top === this.bottom) {
            this.bottom = null
        }
        // const holdingPointer = this.top
        this.top = this.top.next
        this.length--
        return this
    }
}

const myStack = new Stack()
console.log(myStack.push('Google'))
console.log(myStack.push('Discord'))
console.log(myStack.push('Udemy'))
// console.log(myStack.peek())
console.log(myStack.pop())
console.log(myStack.pop())
// console.log(myStack.pop())