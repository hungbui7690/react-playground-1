import avatar from './assets/default-avatar.svg'

export function Person({ name, nickName = 'shakeAndBake', images }) {
  // const img = images[0].small.url // err

  return (
    <div className='container'>
      <h4>{name} </h4>
      <p>Nickname : {nickName}</p>

      {/* err */}
      {/* <img src={img} alt={name} style={{ width: '50px' }} /> */}
    </div>
  )
}
