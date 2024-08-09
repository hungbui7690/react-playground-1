/*
  Import and Export Statements
  - default exports
    + with default exports,can rename but only one default export per file
  

*/

import ReactDOM from 'react-dom/client'
import './index.css'
import bananas from './books' // (2) can change name >> since we react knows that only 1 export in bananas.js >> so we can change name

///////////////////////////////

function BookList() {
  return (
    <section className='booklist'>
      {/* (3) bananas */}
      {bananas.map((book) => {
        return <Book {...book} key={book.id} />
      })}
    </section>
  )
}

const Book = (props) => {
  const { img, title, author } = props

  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>

      <h4>{author} </h4>
    </article>
  )
}

///////////////////////////
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
