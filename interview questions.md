# Interview Questions

## DOM vs BOM

**Question:** Explain the difference between the DOM (Document Object Model) and the BOM (Browser Object Model). How do they relate to each other?

**Answer:**

### Document Object Model (DOM)
- **Definition:** A structured, tree-like representation of an HTML/XML document that treats elements as objects.
- **Purpose:** Access and manipulate the content, structure, and style of a web page.
- **Standardization:** W3C standardized API.
- **Capabilities:** 
    - Add/remove elements dynamically
    - Change text and styles
    - Modify page structure
- **Examples:**
    ```javascript
    document.getElementById()
    document.createElement()
    element.style.color = 'red'
    ```

### Browser Object Model (BOM)
- **Definition:** Interfaces with the browser itself, providing access to browser-specific objects.
- **Purpose:** Control browser features like windows, history, and location.
- **Standardization:** Non-standardized, varies by browser.
- **Key Objects:**
    - `window` - global browser object
    - `navigator` - browser information
    - `history` - session history
    - `location` - current URL
- **Examples:**
    ```javascript
    window.alert()
    window.open()
    ```

### Relationship
The **BOM is a superset** that contains the DOM. The `window` object is the root of the BOM and contains the `document` object (which represents the DOM).
