import avatar from './assets/default-avatar.svg'

export function Person({ name, nickName = 'shakeAndBake', images }) {
  // Method 1
  // const img =
  //   (images && images[0] && images[0].small && images[0].small.url) || avatar

  // Method 2 optional chaining
  const img = images?.[0]?.small?.url ?? avatar

  return (
    <div className='container'>
      <h4>{name} </h4>
      <p>Nickname : {nickName}</p>

      <img src={img} alt={name} style={{ width: '50px' }} />
    </div>
  )
}
