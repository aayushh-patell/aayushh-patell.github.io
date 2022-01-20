Characteristics


1. ECMA Script
    a. JavaScript standard used to interpolate across different browsers
    b. Made by ECMA Internationa

2. Document Object Model - DOM
    a. Tree structure heirarchy representation created by a web broswer to enable HTML to be accessed by programming languages

3. Browser Object Model - BOM
    a. Allows JavaScript to communicate with the browser

4. Types Style
    a. No need unless defining 


Keywords


1. Strict
    a. A way to opt in to a restricted variant of JavaScript
    b. Implemented through ECMA

2. Defer
    a. Allows HTML and JavaScript to load side by side

3. Let 
    a. Let is a keyword used to declare variables in JavaScript that are block scoped

4. Const
    a. Defines a constant reference to a value
    b. Variables declared with const must be initialized when it is declared

5. <script>
    a. Used to embed data or executable client side scripting language in an HTML page

6. <noscript>
    a. Defines an alternate content to be displayed to users that have disabled scripts in their browser or have a browser that doesn't support script


Data Types


1. String
    a. Text content wrapped in " ", ' ', or ` `

2. Number
    a. A numeric value

3. BigInt
    a. An arbitarily specific number

4. Boolean
    a. True or False

5. Null
    a. Absense of value

6. Undefined
    a. Default unassigned value


Naming Conventions


1. Camel Case


Operators

1. Operators
    a. + (Strings too), -, *, /, % (Remainder), ++, --
    a. === Considers Data Type
    b. == Ignores Data Type


Decision Statements


1. For
    a. Runs the same code over and over again, each time with a different value
2. For Each
    a. Calls a function once for each element in an array, in order
3. For In
    a. Loops through the properties of an object
4. For Of
    a. Statement loops through the values of an iterable object. It lets you loop over iterable data structures such as Arrays

5. If
6. Else If
7. Else

8. While
9. Do While
    a. Runs at least once

10. Break
    a. Stops executing a loop when a defined condition is met and continues running the code following the loop
11. Continue
    a. Stops current loop and continues to next iteration


String Methods


1. Trim
    a. Removes White Space
2. charAt
    Returns index character
3. charCodeAt
    Returns unicode of index
4. toFixed
    a. 
5. slice
    a. You can use negative numbers
    b. Start, Length
6. substr
    a. Start, Length
7. substring
    a. No negatives
8. indexOf
    a. First occurence of specified character
9. lastIndexOf
    a. Last occurence of specified character
10. toLowercase
11. toUpperCase
12. Match
    a. Returns an array
13. Split
14. Replace
15. Includes
    a. Check if a String include a specified value


Array Methods


1. forEach
2. join
    a. Joins Arrays
3. splice
    a. Removes (variable, index)
4. Shift
    a. Removes first element
5. Pop
    a. Removes last element
6. Unshift
    a. Adds value to beginning
7. Push
    a. Adds value to ending
8. Sort


Outputting Array

array1.forEach((array) => {
    array.forEach((element) => {
        console.log(element);
    });
});