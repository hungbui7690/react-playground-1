/*
  useActionState
  - useActionState simplifies managing form state based on server-side actions.
  - It's particularly useful with React Server Components (RSC) for faster response times.
  - It offers functionalities like isPending to handle loading states during server interactions.

  ❌ useActionState is only available in React’s Canary and experimental channels. To get the most out of it, you’ll need to use a framework that supports React Server Components 


------------------------

  What is useActionState?
  - The useActionState hook is designed to handle server actions seamlessly. 
  - When you pass a server action to useActionState, it returns an object containing both the error (or state),isPending state and the action itself. 
  - This setup is particularly useful for managing form submissions and tracking the loading state before a result is returned.


------------------------

  Key Benefits of useActionState
  + Simplified Loading State Management
    -> Previously, managing loading states in forms required a combination of useFormState() and useFormStatus(). The latter, however, only worked at a specific component level, necessitating the creation of separate components to manage button states, for example. 
    -> With useActionState, this complexity is eliminated. You get an isPending state directly, making it easier to manage form submissions and other server actions.

  + Versatility Beyond Forms
    -> Although useActionState is excellent for form handling, its utility extends beyond that. 
    -> Unlike useFormState(), which is misleadingly named as it suggests use only in forms, useActionState is aptly named to indicate its broader application. 
    -> It can be used for any server actions, making it a more appropriate and versatile tool.

  + Improved Error Handling
    -> useActionState also simplifies error handling. When a server action returns an error, it is effortlessly managed within the hook, allowing for cleaner and more readable code.

------------------------

  ~~ npm install --save-exact react@rc react-dom@rc


------------------------



*/

import { useActionState } from 'react'

// @ form action
async function increment(previousState, formData) {
  await new Promise((resolve) => setTimeout(resolve, 1000)) // mimic a delay
  return previousState + 1
}

function App() {
  const [state, formAction, isPending] = useActionState(increment, 0) // @

  return (
    <form>
      {state}
      <br />
      <button formAction={formAction} disabled={isPending}>
        Increment
      </button>
    </form>
  )
}

export default App
