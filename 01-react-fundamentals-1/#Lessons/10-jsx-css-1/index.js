/*
  JSX CSS (inline styles)
  - style prop
  - {} in JSX means going back to JS Land
  - value is an object with key/value pairs - capitalized and with ''

  - css rules still apply: 
    > inline > external
        .book h4 {
          color: red;
          letter-spacing: 2px;
        }

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
const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

///////////////////////////
const Image = () => (
  <img src='./images/book1.jpg' alt='Interesting Facts For Curious Minds' />
)

const Title = () => {
  return <h2>Interesting Facts For Curious Minds</h2>
}

const Author = () => (
  /*
    (1) inline styles >> double brackets {{}}: 
        - 1st bracket: go back to JS land
        - 2nd bracket: object
  */
  <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem' }}>
    Jordan Moore
  </h4>
)

///////////////////////////
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
