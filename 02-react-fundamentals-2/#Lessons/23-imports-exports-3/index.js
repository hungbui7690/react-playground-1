/*
  Import and Export Statements
  - create src/Books.js (component)
  - import in index.js
  

*/

import ReactDOM from 'react-dom/client'
import './index.css'
import { books } from './books'
import Book from './Book' // (2)

///////////////////////////////

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book {...book} key={book.id} />
      })}
    </section>
  )
}

///////////////////////////
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
