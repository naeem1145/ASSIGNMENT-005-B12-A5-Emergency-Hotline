1. Difference Between DOM Selection Methods
getElementById()

Selects one element by its unique id

Returns a single element

getElementsByClassName()

Selects elements by class name

Returns a live HTMLCollection

Can return multiple elements

querySelector()

Selects the first element that matches a CSS selector

Flexible (id, class, tag, etc.)

querySelectorAll()

Selects all elements matching a CSS selector

Returns a NodeList (not live)

2. Creating and Inserting a New Element

Steps:

Create using document.createElement()

Add text or attributes

Insert using append() or appendChild()

Used to create dynamic content with JavaScript.

3. What is Event Bubbling?

Event Bubbling means an event starts from the child element and moves up to its parent elements.

Example:
Button → Div → Body

4. What is Event Delegation?

Event Delegation means adding an event listener to a parent instead of multiple child elements.

Why useful:

Better performance

Less code

Works for dynamic elements

5. Difference Between preventDefault() and stopPropagation()

preventDefault() → Stops browser’s default action

stopPropagation() → Stops event from bubbling to parent elements