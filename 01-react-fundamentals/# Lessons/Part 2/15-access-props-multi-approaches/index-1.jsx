/*
  Access Props - Multiple Approaches
  - there is no right or wrong - again preference !!!


*************************

  - destructuring in Vanilla JS
  - saves time/typing
  - pull out the properties
  - don't need to reference object anymore


*/

const someObject = {
  name: 'joe doe',
  job: 'dev',
  location: 'texas',
}

// object destructuring
console.log(someObject.name)
const { name, job } = someObject
console.log(job)
