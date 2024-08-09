/*
  JSX CSS (inline styles)
  - external libraries use inline css,
    so if you want to make some changes,
    reference the library docs and elements tab

  *** FOR THE MOST PART, MULTIPLE APPROACHES AVAILABLE !!!
  *** AS LONG AS THE RESULT IS THE SAME, REALLY COMES DOWN TO PREFERENCE !!!!

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

///////////////////////////
// *** Alternative Approach
///////////////////////////
const Author = () => {
  // (1) create styles object
  const inlineHeadingStyles = {
    color: '#617d98',
    fontSize: '0.75rem',
    marginTop: '0.5rem',
  }

  // (2) apply style
  return <h4 style={inlineHeadingStyles}>Jordan Moore </h4>
}

///////////////////////////
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
