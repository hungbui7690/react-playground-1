// (3a) extract data
const Person = ({ name, age, image }) => {
  // (3b) display data
  return (
    <article className='person'>
      <img src={image} alt={name} className='img' />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
  )
}

export default Person
