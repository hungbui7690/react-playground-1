/*
  Props - Initial Setup
  - refactor/clean up
    > create + move variables to top

*/

import ReactDOM from 'react-dom/client'
import './index.css'

///////////////////////////
// (1) create global variables
const author = 'Jordan Moore'
const title = 'Interesting Facts For Curious Minds'
const img = './images/book1.jpg'

///////////////////////////
function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
    </section>
  )
}

///////////////////////////
const Book = () => {
  return (
    <article className='book'>
      {/* (2) use variables here */}
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  )
}

///////////////////////////
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
