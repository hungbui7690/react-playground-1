/*
  Props - Initial Setup

*/

import ReactDOM from 'react-dom/client'
import './index.css'

///////////////////////////
const author = 'Jordan Moore'
const title = 'Interesting Facts For Curious Minds'
const img = './images/book1.jpg'

///////////////////////////
// *** passing props
///////////////////////////
function BookList() {
  return (
    <section className='booklist'>
      {/* (1a) pass the real properties we want (author, title, img) */}
      <Book author={author} title={title} img={img} />

      {/* (1b) since we don't provide img here >> <img> will use alternative */}
      <Book author={author} title={title} />
    </section>
  )
}

///////////////////////////
// *** receive props
///////////////////////////
const Book = (props) => {
  return (
    <article className='book'>
      {/* (2) access to props data */}
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author} </h4>
    </article>
  )
}

///////////////////////////
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
