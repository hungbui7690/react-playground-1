/*
  Local Images (src folder)
  - setup:
    > add one more book to array
    > download all three images (rename)
    > setup images folder in the src
    > (1) import all three images in the books.js 
    > set image property equal to import (3)
  - better performance because optimized
  
  *** each image requires new import

    import img1 from './images/book1.jpg'

*/

import ReactDOM from 'react-dom/client'
import './index.css'
import { books } from './books'
import Book from './Book'

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
