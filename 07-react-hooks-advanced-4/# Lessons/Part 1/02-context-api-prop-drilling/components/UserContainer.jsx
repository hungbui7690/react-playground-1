// 3a.
const UserContainer = ({ user, logout }) => {
  return (
    <div className='user-container'>
      {/* 3b. */}
      {user ? (
        <>
          <p>Hello There, {user.name.toUpperCase()}</p>
          <button type='button' className='btn' onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  )
}
export default UserContainer
