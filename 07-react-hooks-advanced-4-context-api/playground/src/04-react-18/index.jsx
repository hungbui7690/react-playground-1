import { useState, useTransition, Suspense, lazy } from 'react' // 1.
const SlowComponent = lazy(() => import('./SlowComponent')) // 2.

const LatestReact = () => {
  const [text, setText] = useState('')
  const [items, setItems] = useState([])
  const [isPending, startTransition] = useTransition()
  const [show, setShow] = useState(true)

  const handleChange = (e) => {
    setText(e.target.value)

    startTransition(() => {
      // slow down CPU
      const newItems = Array.from({ length: 2000 }, (_, index) => {
        return (
          <div key={index}>
            <img src='/bicycle.svg' alt='' className='svg' />
          </div>
        )
      })
      setItems(newItems)
    })
  }
  return (
    <section>
      <form className='form'>
        <input
          type='text'
          className='form-input'
          value={text}
          onChange={handleChange}
        />
      </form>
      <h4>Items Below</h4>

      {isPending ? (
        'Loading...'
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            marginTop: '2rem',
          }}
        >
          {items}
        </div>
      )}

      <button onClick={(e) => setShow(!show)} className='btn'>
        Toggle
      </button>

      {/* 3. wrap the SlowComponent inside the Suspense component */}
      {show && (
        <Suspense fallback={<h4>Loading...</h4>}>
          <SlowComponent />
        </Suspense>
      )}
    </section>
  )
}
export default LatestReact
