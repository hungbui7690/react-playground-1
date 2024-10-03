import { useState, useTransition } from 'react'

const LatestReact = () => {
  const [text, setText] = useState('')
  const [items, setItems] = useState([])
  const [isPending, startTransition] = useTransition() // 1.

  const handleChange = (e) => {
    setText(e.target.value)

    // 2. then, apply isPending below in step 3.
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

      {/* 3. */}
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
    </section>
  )
}
export default LatestReact
