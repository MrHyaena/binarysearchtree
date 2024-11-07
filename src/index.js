import "./styles.css";

let myArray = [];

class node {
  constructor(data) {
    this.data = data;
    this.left = [];
    this.right = [];
  }
}

class tree {
  constructor(array) {
    this.root = buildTree(array);
  }
}

let myTree = new tree([1, 7, 7, 23, 7, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);

console.log(myTree);

deleteValue(67);
insert(226);
insert(757);

// Additional functions

function deleteValue(value) {
  let indexvalue = myArray.indexOf(value);
  myArray.splice(indexvalue, 1);
  myTree.root = "";
  myTree.root = buildTree(myArray);
}

function insert(value) {
  myArray.splice(0, 0, value);
  myTree.root = "";
  myTree.root = buildTree(myArray);
}

console.log(find(myTree.root, 9));

function find(root, value) {
  if (value > root.data) {
    return find(root.right, value);
  } else if (value < root.data) {
    return find(root.left, value);
  } else if (value === root.data || root === null) {
    return root;
  }
}

let levelOrderArray = [];
console.log(inOrder());

function callLevelOrderArray() {
  console.log(levelOrderArray);
}

function inOrder(callback) {
  getRoot(myArray, 0, myArray.length);

  function getRoot(arr, start, end) {
    if (start > end) return null;

    // Find the middle element
    let mid = start + Math.floor((end - start) / 2);

    let midData = arr[mid];

    // Create root node
    let root = new node(midData);

    levelOrderArray.push(root);

    // Create left subtree
    root.left = getRoot(arr, start, mid - 1);

    // Create right subtree
    root.right = getRoot(arr, mid + 1, end);

    return root;
  }

  return levelOrderArray;
}

console.log(findDepth(myTree.root, 5));

function findDepth(root, x) {
  // Base case
  if (root == null) return -1;

  // Initialize distance as -1
  var dist = -1;

  // Check if x is current node=
  if (
    root.data == x ||
    // Otherwise, check if x is
    // present in the left subtree
    (dist = findDepth(root.left, x)) >= 0 ||
    // Otherwise, check if x is
    // present in the right subtree
    (dist = findDepth(root.right, x)) >= 0
  )
    // Return depth of the node
    return dist + 1;

  return dist;
}

// Function for building a whole tree

function buildTree(array) {
  let workingArray = [];
  let finalArray = [];

  deleteDuplicate(array);
  mergeSort();

  let root = getRoot(finalArray, 0, finalArray.length - 1);

  myArray = finalArray;

  // Functions for preparing our array

  function deleteDuplicate(array) {
    array.map((item) => {
      if (workingArray.includes(item)) {
      } else {
        workingArray.push(item);
      }
    });
    finalArray = workingArray;
  }

  function mergeSort() {
    finalArray = [];
    let loop = workingArray.length;
    let highest = "";
    let indexhighest = 0;
    for (let i = 0; i < loop; i++) {
      highest = Math.min(...workingArray);
      indexhighest = workingArray.indexOf(highest);
      workingArray.splice(indexhighest, 1);
      finalArray.push(highest);
    }
    workingArray = finalArray;
  }

  // Getting the root

  function getRoot(arr, start, end) {
    if (start > end) return null;

    // Find the middle element
    let mid = start + Math.floor((end - start) / 2);

    let midData = arr[mid];

    // Create root node
    let root = new node(midData);

    // Create left subtree
    root.left = getRoot(arr, start, mid - 1);

    // Create right subtree
    root.right = getRoot(arr, mid + 1, end);

    return root;
  }

  return root;
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

console.log(prettyPrint(myTree.root));
