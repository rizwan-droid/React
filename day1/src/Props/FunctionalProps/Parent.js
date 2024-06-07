// import React from 'react'
// import Child from './Child'

// export default function Parent() {
//     let name = "Rizwan ahamad";
//     let a = 10;
//   return (
//     <div className='App'>
//         <h1>Parent</h1>
//       <Child name = {name} age = {23} address = {'noida'} salary = {100000} a={a}/>
//     </div>
//   )
// }

import React from 'react'
import Child from './Child'


export default function Parent() {

    

  return (
    <div className='App'>
        <h1>Parent</h1>
      <Child/>
    </div>
  )
}
