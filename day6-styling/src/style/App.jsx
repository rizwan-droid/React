// import React from 'react'

// export default function App() {
//   return (
//     <div style={{background:"red",color:"purple",padding:"10px"}}>
//       learning inline css
//     </div>
//   )
// }

// import React from 'react'
// import './App.css'

// export default function App() {
//   return (
//     <div className='red'>i am external css</div>
//   )
// }

import React from 'react'
import rang from './App.module.css'

export default function App() {
  return (
    <div className={rang.green}>
      I am module waala css
    </div>
  )
}


