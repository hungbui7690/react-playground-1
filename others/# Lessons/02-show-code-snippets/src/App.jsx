/*
  Show Code Snippets
  ~~ npm i highlight.js


-----------------------

  - theme: https://highlightjs.org/examples


*/

import { useEffect, useRef } from 'react'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript' // 1.
import 'highlight.js/styles/atom-one-dark.css' // 2. theme for highlight.js

hljs.registerLanguage('javascript', javascript) // 3.

function App() {
  const codeRef = useRef(null)

  // 4. We will use highlightBlock function of highlight.js package, to highlight the code block. Since we need to format it only once when the component mounts so we are going to wrap this inside useEffect hook.
  useEffect(() => {
    hljs.highlightBlock(codeRef.current)
  }, [])

  return (
    // 5.
    <pre>
      <code className='javascript' ref={codeRef}>
        {`
export function useWeb3AnalyticsReporter() {
  const { pathname, search } = useLocation(); //depends on project routes manager 
  const { provider } = useWeb3React(); //depends on project web3 providers handling

  //track page-views
  useEffect(() => {
    Web3Analytics.trackPageView(pathname, search);
  }, [pathname, search]);

  //track web3 activity
  useEffect(() => {
    if (provider) {
      Web3Analytics.walletProvider(provider);
    }
  }, [provider]);
}`}
      </code>
    </pre>
  )
}

export default App
