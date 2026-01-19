import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import React from 'react'

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <div className='flex-center h-screen'>
      <h1 className='text-indigo-300'>Hii</h1>
    </div>
  )
}

export default App