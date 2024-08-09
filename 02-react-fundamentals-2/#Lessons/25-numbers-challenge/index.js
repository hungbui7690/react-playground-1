/*
  Numbers Challenge
  - setup numbers >> pic
  - don't worry about css
  - hint - index (second parameter in map)

*/

import ReactDOM from 'react-dom/client'
import './index.css'
import { books } from './books'
import Book from './Book'

///////////////////////////////

function BookList() {
  return (
    <section className='booklist'>
      {/* (1) use index + pass "number" prop >> Book.js */}
      {books.map((book, idx) => {
        return <Book {...book} key={book.id} number={idx} />
      })}
    </section>
  )
}

///////////////////////////
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
