/*
  Fetch Function Location
  - SOMETIMES, WHEN WE CREATE fetchData() OUTSIDE OF useEffect() -> REACT WILL ASK US TO PUT IT INTO THE DEPENDENCY LIST
  - DON'T ADD fetchData TO DEPENDENCY ARRAY !!!
  - IT WILL TRIGGER INFINITE LOOP !!!


******************************

  - at initial render, it will call fetchData()
  - if we put fetchData in the dependency list >> if will trigger fetchData()
  - repeat
  - repeat
  - repeat
  ...


*/

import { useEffect, useState } from 'react'

const url = 'https://api.github.com/users/QuincyLarson'

const MultipleReturnsFetchData = () => {
  const fetchData = async () => {
    // fetch data
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <div> Fetch Function Location</div>
}

export default MultipleReturnsFetchData
