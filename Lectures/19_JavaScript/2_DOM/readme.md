# DOM
- 1) Documented Object Model 
- 2) Usefull to target HTML with JS and then manipulate
- 3) Eg: Data should be displayed in the p tag when the button is clicked
- 4) InnerHTML vs Inner Content 
        console.log(a.innerText) Vs console.log(a.innerHTML);
    Brings the HTML along with the conetent 

    ```
    <p id = "one" > Namaste <span>Sir</span></p>
    <script>
        let a = document.getElementById("one")
        console.log(a.innerHTML);
    </script>

    ```



### JavaScript - DOM Manipulation

1. **getElementById**
   - Access element by ID.
   - Example: `document.getElementById("one")`.

2. **getElementsByClassName**
   - Access elements with a specific class.
   - Example: `document.getElementsByClassName("tech")`.
   - Access elements as an array.

3. **getElementsByTagName**
   - Access elements by tag name.
   - Example: `document.getElementsByTagName("h4")`.
   - Modify text and style.

4. **querySelector**
   - Access first element that matches a CSS selector.
   - Variants: by tag, class, id.
   - Example: `document.querySelector(".classs")`.

5. **className and classList**
   - Assign new class using `className`.
   - Assign multiple classes using `classList`.
   - Example: `var4.className = "hello"; var4.classList = "hello helo hola";`.

6. **setAttribute**
   - Set or modify attributes of an element.
   - Example: `var4.setAttribute("title", "js")`.



### JavaScript -  DOM Manipulation Part Two

1. **createElement**
   - Create new HTML element.
   - Example: `document.createElement("h1")`.

2. **className and style**
   - Assign class to new element.
   - Apply inline CSS styling.
   - Example: `title.className = "PWSkills"; title.style.fontSize = "25px";`.

3. **textContent**
   - Set text content of the element.
   - Example: `title.textContent = "PW Skills Namaste";`.

4. **appendChild**
   - Add new element to the document body.
   - Example: `document.body.appendChild(title);`.

5. **querySelector**
   - Select first element that matches a CSS selector.
   - Example: `document.querySelector("ul")`.

6. **querySelectorAll**
   - Select all elements that match a CSS selector.
   - Returns a NodeList.
   - Example: `document.querySelectorAll("li")`.

7. **removeChild**
   - Remove child elements from a parent node.
   - Used in a loop to remove multiple elements.
   - Example: `for (list of lists) { ul_var.removeChild(list); }`.

