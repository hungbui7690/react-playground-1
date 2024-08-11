/*
  Leverage Javascript


***********************

  Default Values - Vanilla JS
  - In JavaScript, when defining a function, you can specify default values for its parameters.
  - This means that if a caller of the function does not provide a value for a particular parameter, the default value will be used instead.
  - Default parameters are defined by assigning a value to the parameter in the function definition.


*/

// 1.For example, consider the following function, which takes two parameters, x and y, and returns their sum:
function add(x, y) {
  return x + y
}

// 2. If we call this function with only one argument, it will return NaN because y is undefined.
// We can set default values for x,y as:
function addX(x = 0, y = 0) {
  return x + y
}
// Now, if we call addX(3), the function will return 3, because the default value of 0 is used for the y parameter.

/*
  Optional Chaining - Vanilla JS
  - In JavaScript, the optional chaining operator (?.) is a new feature that allows you to access properties of an object without worrying about whether the object or the property is null or undefined. 
  - It's a shorthand for a common pattern of checking for null or undefined before accessing an object's property.
*/
// 3. For example, consider the following code, which accesses the firstName property of an object:
const person = { name: { first: 'John', last: 'Doe' } }
console.log(person.name.first)

// 4. If the name property is null or undefined, this code will throw an error. To prevent this, we can use the optional chaining operator:
console.log(person?.name?.first)
// Now, if the person.name is null or undefined, this code will simply return undefined instead of throwing an error. This make the code more robust and readable.

const App = () => {
  return (
    <main>
      <h1>Starter</h1>
    </main>
  )
}
export default App
