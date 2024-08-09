/*
  Local Images (Public Folder)
  - pic
  - external images (hosted on different server) - just need an url
  - local images (public folder) 
    > less performant
  - local images (src folder) 
    > better solution for assets,
    *** since under the hood they get optimized.

  - Steps
    > save image (Save Image As....)
    > create images folder in public
    > copy/paste image
    > rename (optional)
    > replace url in the src - './images/book1.jpg'
    > './' because assets are on the same server

  - whatever assets we place in public - instantly available
  - domain(localhost)/asset 
    >> localhost:3000/images

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
// *** change the src of the image
///////////////////////////
const Image = () => (
  <img src='./images/book1.jpg' alt='Interesting Facts For Curious Minds' />
)

const Title = () => {
  return <h2>Interesting Facts For Curious Minds</h2>
}
const Author = () => <h4>Jordan Moore </h4>

///////////////////////////
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
