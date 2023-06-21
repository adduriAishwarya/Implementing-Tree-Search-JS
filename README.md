# Implementing-Tree-Search-JS
Implementing Tree Search in Javascript

**DOM Tree Search**
This is a JavaScript program that creates a DOM tree and allows you to search it based on selectors.
The program defines a class called Node, which represents a node in the DOM tree. A Node has a tag name, an array of children nodes, an array of classes, and an ID.

**Implementation**
recursive implementation. The search method in the Node class uses recursion to traverse the DOM tree and search for nodes that match the given selector. It recursively calls itself on each child node to search for matching nodes and aggregates the results.

**Node Class**
The Node class represents an HTML element. It can have a tag name, a list of CSS classes, and a list of children nodes.

**Usage**

To use the Node class, you can create a new instance by calling the constructor and passing in the tag name, children, and classes:
Node properties can be accessed using instances using dot notation.
_"new Node(tag, children, classes,id)"_
Creates a new Node instance with the given tag name, children nodes, and class array.

tag (string): The tag name of the node.
children (array): An array of Node instances representing the children of the node.
classes (array): An array of CSS class names (strings) on the element.


_search(selector)_ : Returns descendant nodes matching the selector. The selector can be a tag name or a CSS class name.


**License**
This project is licensed under the MIT License - check out the LICENSE file for details.

