class LinkedList{
  constructor(){
    this.head = null;
  }

  // Insert at the end
  append(value){
    if (this.head === null){
      this.head = new Node(value);
      return;
    }

    let currentNode = this.head;
    while(currentNode.nextNode !== null){
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = new Node(value);
    return;
  }

  // Insert at the start
  prepend(value){
    let newNode = new Node(value);
    // Make new node point to head node
    newNode.nextNode = this.head;
    // Set as new head
    this.head = newNode;
  }

  // Returns the total number of nodes in the list
  size(){
    if (this.head === null) return 0;
    
    let currentNode = this.head;
    let total = 0;
    while (currentNode !== null){
      total++;
      currentNode = currentNode.nextNode;
    }
    return total;
  }

  // Returns the first node in the list
  head(){
    return this.head;
  }

  // Returns the last node in the list
  tail(){
    if (this.head === null) return null;

    let currentNode = this.head;
    while(currentNode.nextNode !== null){
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  // Returns the node at the given index
  at(index){
    let size = this.size();
    if(index > size) return "out of range"

    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  // Removes the last element from the list
  pop(){
    if (this.head === null) return null;

    // One node
    if (this.head.nextNode === null){
      this.head = null;
      return;
    }

    // Multiple nodes
    let currentNode = this.head;
    while(currentNode.nextNode !== null && currentNode.nextNode.nextNode !== null){
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = null;
  }

  // Returns true if the passed in value is in the list and otherwise returns false
  contains(value){
    if (this.head === null) return false;

    let currentNode = this.head;
    while(currentNode !== null){
      if (currentNode.value == value) return true;
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  // Returns the index of the node containing value, or null if not found
  find(value){

  }

  // Represents your LinkedList objects as strings
  toString(){
    if (this.head === null) return "null";
    
    let currentNode = this.head;
    let linkedString = "";
    
    while (currentNode !== null){
      linkedString += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }
    linkedString += "null";
    return linkedString;
  }
}

class Node{
  constructor (value){
    this.value = value;
    this.nextNode = null;
  }
}

let linkedList = new LinkedList();
linkedList.prepend(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
console.log(linkedList.contains(1));
// console.log(linkedList.size());
// console.log(linkedList.tail());
// console.log(linkedList.at(0));