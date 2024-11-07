import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './functional_hook/counter'
import To from './functional_hook/to_do/to_do_list_cls'
import To_do from './functional_hook/to_do_function'
import Api from './functional_hook/api_calling'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Counter/> */}
    {/* <To/> */}
    {/* <To_do/> */}
    <Api/>
    </>
  )
}

export default App
