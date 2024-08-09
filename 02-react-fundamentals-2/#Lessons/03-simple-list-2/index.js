/*
  Simple List
  - map - creates a new array from calling a function for every array element.
    > solution to render array of objects

*/

import ReactDOM from 'react-dom/client'
import './index.css'

/////////////////////////////////
const books = [
  {
    author: 'Jordan Moore',
    title: 'Interesting Facts For Curious Minds',
    img: './images/book-1.jpg',
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
  },
]

/////////////////////////////////
const names = ['john', 'peter', 'susan'] // (1)

// (2)
const newNames = names.map((name) => {
  console.log(`<h1>${name}</h1>`)
  return <h1>{name}</h1>
})

/////////////////////////////////
function BookList() {
  // (3) use {newName}
  return <section className='booklist'>{newNames}</section>
}

/////////////////////////////////
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
