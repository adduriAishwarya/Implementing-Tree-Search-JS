class Node {
  constructor(tag, children, classes, id) {
    this.tag = tag;
    this.children = children || [];
    this.classes = classes || [];
    this.id = id || null;
  }

  search(selector) {
      if (selector == null) {
          throw new Error('Selector cannot be null or undefined');
        }


    let results = [];

    if (matchesSelector(this, selector)) {
      results.push(this);
    }

    for (let child of this.children) {
      results.push(...child.search(selector));
    }

    return results;
  }
}

function matchesSelector(node, selector) {
  // Split the selector into tag name, classes, and ID.
  if (typeof selector !== 'string') {
      throw new Error('Selector argument must be a string.');
    }
    if (selector == null) {
      throw new Error('Selector cannot be null or undefined');
    }
  let parts = selector.split(/([.#])/);
  let tagName = parts[0];
  let classes = [];
  let id = null;

  for (let i = 1; i < parts.length; i += 2) {
    let type = parts[i];
    let value = parts[i + 1];

    if (type === '.') {
      classes.push(value);
    } else if (type === '#') {
      id = value;
    }
  }

  // Check if the tag name matches.
  if (tagName && node.tag !== tagName) {
    return false;
  }

  // Check if all classes match.
  for (let className of classes) {
    if (!node.classes.includes(className)) {
      return false;
    }
  }

  // Check if the ID matches.
  if (id && node.id !== id) {
    return false;
  }

  // If we made it this far, the node matches the selector.
  return true;
}

// create the DOM tree
const tree = new Node('body', [
  new Node('div', [
    new Node('span', [], ['note'], 'span-1'),
    new Node('span', [], [], 'span-2'),
    new Node('div', [
      new Node('p', [], ['sub1-p1', 'note'], 'para-1'),
      new Node('span', [], ['sub1-span3'], 'span-3')
    ], ['subContainer1'], 'div-2'),
    new Node('div', [
      new Node('section', [
        new Node('label', [], [], 'lbl-1')
      ], [], 'sec-1')
    ], ['subContainer2'], 'div-3'),
    new Node('div', [
      new Node('span', [], ['mania'], 'span-4'),
      new Node('span', [], ['note', 'mania'], 'span-5')
    ], [], 'div-4')
  ], ['mainContainer'], 'div-1'),
  new Node('span', [], ['randomSpan'], 'span-6')
], [], 'content');

const divNode1 = tree.children[0];
  
//Test1 
// find all descendant <span> elements of divNode1
  
//   const spanNodes = divNode1.search('span');
//   console.log(spanNodes);

//Test2
// const noteNodes = divNode1.search('.note');
// console.log(noteNodes);

// Test3
// const labelNodes = divNode1.search('label');
// console.log(labelNodes);

// //Test 4
// const p1 = divNode1.children[2].children[0];
// const noteNodes = p1.search('.note');
// console.log(noteNodes);

// //Test5
// const divNodes = divNode1.search('div');
// console.log(divNodes);

// //Test6 -- searching for div elements in divNode1
// const divNodes = divNode1.search('div');
// console.log(divNodes);

// //Test7
// const divNode2 = tree.children[0].children[2];
// const sectionNodes = divNode2.search("section");
// console.log(sectionNodes);

// //Test8
// console.log(divNode1.search());

// //Test9
// console.log(divNode1.search("section"));

//Test10
console.log(divNode1.search(".randomSpan"));
