// console.log('hello from js');
// console.log(document);
// console.log(document.body);

// html collection vs nodelist




// https://stackoverflow.com/questions/15763358/difference-between-htmlcollection-nodelists-and-arrays-of-objects


// https://softauthor.com/javascript-htmlcollection-vs-nodelist/#:~:text=Learn%20the%20key%20differences%20between,nodes%2C%20and%20text%20nodes).



                          /*   HTMLCollection and a NodeList

The main difference between an HTMLCollection and a NodeList is that one is live and one is static. This means that when an element is appended to the DOM, a live node will recognize the new element while a static node will not.

1. HTMLCollection

The element methods getElementsByClassName() and getElementsByTagName() return a live HTMLCollection. It only includes the matching elements (e.g. class name or tag name) and does not include text nodes, it provides only two methods item and namedItem.

In the example below, all the elements with the class name of fruits is selected. The item() method is then used to access the fruit at index 0 and a class name of fruit__01 is added to that element.

const fruits = document.getElementsByClassName(‘fruits’);
fruits.item(0).classList.add(‘fruit__01’)
2. NodeList

The element method *querySelectorAll()* returns a static NodeList. They look like arrays but are not.

NodeLists have a defined forEach method as well as a few other methods including item, entries, keys, and values.

NodeLists behave differently depending on how you access them; if you access elements using childNodes, the returned list is live and will update as more elements are added to the node. If it’s accessed using querySelectorAll(), the returned list is static and will not update if more elements are added to the node.

// returns static collection
 const fruits = document.querySelectorAll(‘.fruits’);
// returns live collection
 const fruits = document.querySelector(‘.fruits’);
 const childFruit = fruits.childNodes;
See the following codepen for an in browser example:

HTMLCollection vs NodeList */

// ==========================================================

// class বের  করার জন্য

// DataTransferItemList.classList


// class add or remove  করার জন্য

// title.classList.add('amader-desh')
// title.classList.remove('amader-desh')

// ===============================================================

// document.getElementsByClassName('fruits-container')[0].innerHTML
// document.getElementsByClassName('fruits-container')[0].innerText