const ErrorExample = () => {
  let count = 0 // (1)

  // (4)
  const handleClick = () => {
    count = count + 1
    console.log(count) // *** count increase in the log >> but there's nothing change in the UI >> because we don't trigger RE-RENDER >> that's why we need useState hook >> preserve value between renders + trigger re-render
  }

  // (2)
  return (
    <div>
      <h2>{count}</h2>
      <button
        type='button'
        className='btn'
        onClick={handleClick} // (3)
      >
        increment
      </button>
    </div>
  )
}

export default ErrorExample
