1. Difference Between DOM Selection Methods
getElementById()
Selects one element using its unique id.
Returns a single element.
Very fast and straightforward.

getElementsByClassName()
Selects elements using a class name.
Returns a live HTMLCollection (updates automatically if DOM changes).
Can return multiple elements.

querySelector()
Selects the first element that matches a CSS selector.
Very flexible (can use id, class, tag, attribute, etc.).
querySelectorAll()
Selects all elements matching a CSS selector.
Returns a NodeList (not live).


2. Creating and Inserting a New Element into the DOM

To add a new element using JavaScript:
Create the element using document.createElement()
Add text or attributes
Insert it using append() or appendChild()
This allows us to create dynamic content like cards, lists, or messages without writing extra HTML manually.

3. What is Event Bubbling?

Event Bubbling means when an event happens on a child element, it moves upward to its parent elements.

Example:
If a button is inside a div:
First, the button's event runs
Then the div’s event runs
Then the body’s event runs
The event travels from the inner element to outer elements.

4. What is Event Delegation? Why is it Useful?

Event Delegation means adding an event listener to a parent element instead of adding it to multiple child elements.
It works because of event bubbling.
Why it is useful:
Improves performance
Reduces repeated code
Works for dynamically added elements
Instead of adding click events to many buttons, we add one listener to their parent.

5. Difference Between preventDefault() and stopPropagation()
preventDefault()

Stops the browser’s default behavior.
Example: Prevent form submission or stopping a link from navigating.
stopPropagation()
Stops the event from moving (bubbling) to parent elements.
Simple Difference:
preventDefault() → Stops browser action
stopPropagation() → Stops event movement