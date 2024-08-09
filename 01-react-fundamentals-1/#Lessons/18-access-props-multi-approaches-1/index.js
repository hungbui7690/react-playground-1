/*
  Access Props - Multiple Approaches
  - there is no right or wrong - again preference !!!

  - destructuring in Vanilla JS
  - saves time/typing
  - pull out the properties
  - don't need to reference object anymore

*/

import ReactDOM from 'react-dom/client'
import './index.css'

const someObject = {
  name: 'joe doe',
  job: 'dev',
  location: 'texas',
}

/////////////////////////////////
// *** use object destructuring
/////////////////////////////////
console.log(someObject.name)
const { name, job } = someObject
console.log(job)

/////////////////////////////////
const firstBook = {
  author: 'Jordan Moore',
  title: 'Interesting Facts For Curious Minds',
  img: './images/book1.jpg',
}
const secondBook = {
  author: 'James Clear',
  title: 'Atomic Habits',
  img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
}

function BookList() {
  return (
    <section className='booklist'>
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  )
}

const Book = (props) => {
  return (
    <article className='book'>
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author} </h4>
    </article>
  )
}

///////////////////////////
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
