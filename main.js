class LinkedList{
  constructor(){
    this.head = null;
  }

  // Insert at the end
  append(value){
    // Check head null
    if (this.head == null){
      this.prepend(value);
      return;
    }

    // Follow node chain until null
    let newNode = Node(value);
    let currentNode = this.head;
    while(currentNode.nextNode != null){
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = newNode;
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

  }
}

class Node{
  constructor (){
    this.value = null;
    this.nextNode = null;
  }
}

let linkedList = new LinkedList();
linkedList.append(3);
linkedList.prepend(4);