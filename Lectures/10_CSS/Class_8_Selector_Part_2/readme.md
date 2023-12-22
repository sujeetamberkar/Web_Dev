# Decendent Selector
    Work on the element under ABC

    index.html
    ```
    <main>
        <p>Hello I am a paragraph</p>
    </main>

    ```

    ```
    main p {
    color: red;
}
    ```

# Child Selector 
    h1 > p

# Adjacent Sibling 
    ```
    section + p {
    color: yellow;
    }

    ```

# General Sibling 
    ```
    Wherever section is followed by p 
    You can have more than one p after section (IT will be implemented)

    section ~ p 
    {
        color : yelllow;
    }

    ```

# Atribute selector 
```
    [target="_blank"]{
        color:pink;
        text-decoration: none;
    }

```

# [Atribute ~="value"] Selector


```
    <img src = "hello.png" alt = "PW">
    <img src = "smile.png" alt = "PW2"> 

```

```
    [alt~="PW"]
    {

    }

```
