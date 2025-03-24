class LinkedList{
  constructor(){
    this.head = null;
  }

  // Insert at the end
  append(value){
    if (this.head == null){
      this.head = new Node(value);
      return;
    }

    let currentNode = this.head;
    while(currentNode.nextNode != null){
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
    let total = 0;

    // Follow node chain
  }

  // Returns the first node in the list
  head(){
    return this.head;
  }

  // Returns the last node in the list
  tail(){

  }

  // Returns the node at the given index
  at(index){

  }

  // Removes the last element from the list
  pop(){

  }

  // Returns true if the passed in value is in the list and otherwise returns false
  contains(value){

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
linkedList.append(3);
linkedList.prepend(4);
console.log(linkedList.toString());