/*
  Overview


*****************************

  Error Example
  - in this lesson, we learn why we need useState hook


*****************************

  - Setup
    -> create count variable
    -> display value in the JSX
    -> add button and increase the value
    -> the reason for bug - we don't trigger re-render (reference next lecture)


*/

const ErrorExample = () => {
  let count = 0

  const handleClick = () => {
    count = count + 1
    console.log(count) // # count increase in the log -> but there's nothing change in the UI -> because we don't trigger RE-RENDER -> that's why we need useState hook -> preserve value between renders + trigger re-render
  }

  return (
    <div>
      <h2>{count}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        increment
      </button>
    </div>
  )
}

export default ErrorExample
