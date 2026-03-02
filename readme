1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans :
-->getElementById()
Selects a single element using its ID.
Since id should be unique, it always returns only one element.If I need one unique element → getElementById

-->getElementsByClassName()
It selects elements by class name.It returns an HTMLCollection and live (automatically update value).If I need multiple elements by class → getElementsByClassName

-->querySelector()
It selects the first element that matches a CSS selector.(ID,class,tags)

-->querySelectorAll()
It selects all elements that match a CSS selector.It returns a NodeList.

2. How do you create and insert a new element into the DOM?
first find parent by id
(i) const parent=document.getElementById("container")
(ii) const child = document.createElement("h1");
(iii) child.innerText = "I am learning DOM";
(iv) parent.appendChild(child);

3. What is Event Bubbling? And how does it work?

-->Event Bubbling means when an event happens on an element, it first runs on that element and then moves upward to its parent elements.
Example:
If I click a button inside a div:
First the button’s click event runs.Then the div’s click event runs.Then the body’s event.

4. What is Event Delegation in JavaScript? Why is it useful?

-->Event Delegation means attaching a single event listener to a parent element instead of adding listeners to each child.

For example:
Instead of adding click events to 20 buttons, I add one click event to their parent and detect which button was clicked using event.target.

Why it is useful:

-->Improves performance (fewer event listeners).Works for dynamically added elements.Keeps the code cleaner and more organized
5. What is the difference between preventDefault() and stopPropagation() methods?

(i) preventDefault()

It stops the default behavior of an element.
Example:
Preventing a form from submitting
Preventing a link from opening
It does NOT stop the event from bubbling.

(ii) stopPropagation()
It stops the event from moving up to parent elements.It prevents event bubbling.