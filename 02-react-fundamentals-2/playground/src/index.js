/*
  Build Production Application
  - pic
  - stop the dev server "ctrl + c"
  - run "npm run build"
  - build folder gets created

////////////////////////////////

  Netlify
  - sign up
  - add new site/deploy manually
  - choose build folder
  - rename site - site settings/change site name

*/

import ReactDOM from 'react-dom/client'
import './index.css'
import { books } from './books'
import Book from './Book'

///////////////////////////////

function BookList() {
  return (
    <>
      {/* (1) add title */}
      <h1>Amazon Best Sellers</h1>
      <section className='booklist'>
        {books.map((book, idx) => {
          return <Book {...book} key={book.id} number={idx} />
        })}
      </section>
    </>
  )
}

///////////////////////////
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
