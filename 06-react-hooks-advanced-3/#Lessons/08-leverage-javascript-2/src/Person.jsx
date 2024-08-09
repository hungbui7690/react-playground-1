import avatar from './assets/default-avatar.svg'

export function Person({ name, nickName = 'shakeAndBake', images }) {
  // const img = images[0].small.url // (2a) error >> since just person3 has this property

  return (
    <div className='container'>
      <h4>{name} </h4>
      <p>Nickname : {nickName}</p>

      {/* (2b) */}
      {/* <img src={img} alt={name} style={{ width: '50px' }} /> */}
    </div>
  )
}
