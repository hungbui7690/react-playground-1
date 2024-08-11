const Book = (props) => {
  const { img, title, author, number } = props // 2. extract number

  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>

      {/* 3. {} -> back to JS land  */}
      <span className='number'>{`# ${number + 1}`}</span>
    </article>
  )
}

export default Book
