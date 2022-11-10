Explanation of Code

-res is a variable that will hold the result of the calculation, while setResult will be used to store the new value of the variable after it's been changed by one of the functions.

-res is an empty string initially, but will be populated with the result of whatever calculation is being performed by the component.

-setResult is used to keep track of whether or not any changes have been made to the results since last being displayed.

-findvalue() takes one argument, which is a string representing a mathematical expression. It uses Function() to return the result of evaluating that expression.

-Handler() takes an argument (arg) which is either C or ENTER.

-If argument is C, then findvalue() will just return the value stored in res; otherwise, it'll call setResult with argument as its new value and store the result in setResult.
