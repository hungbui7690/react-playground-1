/*
  Short Circuit Evaluation React - Basics
  - create two state values
  - one "falsy" and second "truthy"
  - setup both conditions for each operator in JSX - hint {}
    -> || OR
    -> && AND


*/

import { useState } from 'react'

const ShortCircuitOverview = () => {
  const [text, setText] = useState('') // falsy
  const [name, setName] = useState('susan') // truthy

  const codeExample = text || 'hello world'

  // can't use if statements in <return>
  return (
    <div>
      {/* {if(someCondition){"won't work"}} */}

      <h4>Falsy OR : {text || 'hello world'}</h4>
      <h4>Falsy AND: {text && 'hello world'}</h4>
      <h4>Truthy OR: {name || 'hello world'}</h4>
      <h4>Truthy AND: {name && 'hello world'}</h4>
      {codeExample}
    </div>
  )
}

export default ShortCircuitOverview
