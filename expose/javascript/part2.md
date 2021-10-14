<ol>
<li> This will print the value of i after the for loop ends to the console. In this case 3 would be printed to console
<li> This will print the value of discountedPrice after the for loop ends to the console. In this case 150 would be printed to console (300*(1-0.5))
<li> This will print the value of finalPrice after the for loop ends to the console. In this case 150 would be printed to console
<li> This function will return the array that was passed into it with each element multipled by 1 minus the discount multiplier passed into the function. In this case the multiplier is 0.5, so the function will return the original array with its elements halved.
<li> This would return an error as i is not defined outside of the for loop
<li> This would return an error as discountedPrice is not defined outside of the for loop
<li> This will print the value of finalPrice after the for loop ends to the console. In this case 150 would be printed to console
<li> This function will return the array that was passed into it with each element multipled by 1 minus the discount multiplier passed into the function. In this case the multiplier is 0.5, so the function will return the original array with its elements halved.
<li> This would return an error as i is not defined outside the for loop
<li> This would print the length of the array passed into the function to the console, which is 3 in this case
<li> This function will return the array that was passed into it with each element multipled by 1 minus the discount multiplier passed into the function. In this case the multiplier is 0.5, so the function will return the original array with its elements halved.
<li> Objects
<ol type="A">
    <li> student.name
    <li> student['Grad Year']
    <li> student.greeting()
    <li> student['Favorite Teacher'].name
    <li> student.courseLoad[0]
</ol>
<li> Arithmetic
<ol type="A">
    <li> output: '32' <br> reason: integers map to their string representation
    <li> output: 1 <br> reason: the string is implicitly converted to an integer
    <li> output: 3 <br> reason: null is converted to an integer value of 0
    <li> output: '3null' <br> reason: null is converted to a string to match the other operand, then the strings are concatenated
    <li> output: 4 <br> reason: true is converted to an integer with value 1 for this operation
    <li> output: 0 <br> reason: both operands are converted to 0 to support addition
    <li> output: '3undefined' <br> reason: undefined is converted to a string, then the strings are concatenated
    <li> output: NaN <br> reason: undefined does not have an integer equivalent, so this operation fails
</ol> 
<li> Comparison
<ol type="A">
    <li> output: true <br> reason: the string '2' becomes a number 2
    <li> output: false <br> reason: the strings are lexicographically compared, and '2' > '1'
    <li> output: true <br> reason: the string '2' becomes the number 2
    <li> output: false <br> reason: the strict equality operator always returns false when comparing different types
    <li> output: false <br> reason: false has the value 0 when converted to a number
    <li> output: true <br> reason: Boolean(x) returns true for any x != 0
</ol>
<li> Double equals in JS checks loose equality, which performs type coercion before testing for equality, so different types could return equal. <br> Triple equals in JS tests for strict equality, so both type and value must be the same
<li> Answer in part2-question16.js
<li> result: [2, 4, 6] <br> reason: this function returns a new array constructed by calling a function 'callback' on every element of the array that is passed in. In this case, doSomething doubles the number it is passed, so every element in the array passed in will have its value doubled.
<li> Answer in part2-question18.js
<li> 1 <br> 4 <br> 3 <br> 2
</ol>