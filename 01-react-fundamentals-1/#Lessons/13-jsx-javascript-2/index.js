/*
  JSX - Javascript
  - {} in JSX means going back to JS Land
  - value inside must be an expression (return value),
    can't be a statement

*/

import ReactDOM from 'react-dom/client'
import './index.css'

///////////////////////////
function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

///////////////////////////
// *** book-1.jpg !== book1.jpg >> show alternative (image)
///////////////////////////
const author = 'Jordan Moore' // (1)

const Book = () => {
  const title = 'Interesting Facts For Curious Mindssssss' // (2)

  return (
    <article className='book'>
      <img
        src='./images/book-1.jpg'
        alt='Interesting Facts For Curious Minds'
      />

      {/* (3) */}
      <h2>{title}</h2>

      {/* (4) */}
      <h4>{author.toUpperCase()} </h4>

      {/* (5) value inside {} must be expression >> return JSX */}
      {/* <p>{let x = 6}</p> */}
      <p>{6 + 6}</p>
    </article>
  )
}

///////////////////////////
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
