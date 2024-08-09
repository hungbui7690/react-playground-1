/*
  Children Prop
  - if we want to have a paragraph & a button in "just only 1 book"
    > it does not matter which one
    >> use children prop

  ***
  - everything we render between component tags
  - during the course we will mostly use it Context API
  - special prop, has to be "children"
  - can place anywhere in JSX

  (1) npm install 

*/

import ReactDOM from 'react-dom/client'
import './index.css'

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
  /*
    (1) create children prop
      <Book>
        <p></p>
        <button></button>
      </Book> 
  */
  return (
    <section className='booklist'>
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      >
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
          repudiandae inventore eos qui animi sed iusto alias eius ea sapiente.
        </p>
        <button>click me</button>
      </Book>
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  )
}

const Book = (props) => {
  const { img, title, author, children } = props // (2a) destruct "children" prop
  console.log(props) // (2b)

  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
      {children} {/* (3) don't use <p> tag to wrap >> err */}
    </article>
  )
}

///////////////////////////
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
