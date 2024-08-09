/*
  Props - Initial Setup
  - props object, convention to call props
    > 'shakeAndBake' is an excellent alternative
  - pass as key/value pairs
  - if the prop exists it will return value, otherwise no value

*/

import ReactDOM from 'react-dom/client'
import './index.css'

///////////////////////////
const author = 'Jordan Moore'
const title = 'Interesting Facts For Curious Minds'
const img = './images/book1.jpg'

///////////////////////////
function BookList() {
  return (
    <section className='booklist'>
      {/* (1) passing props */}
      <Book job='developer' />
      <Book title='random title' number={22} />
    </section>
  )
}

///////////////////////////
// *** props
///////////////////////////
const Book = (props) => {
  console.log(props) // (2)

  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>

      {/* (3) how to access props data */}
      <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p>
    </article>
  )
}

///////////////////////////
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
