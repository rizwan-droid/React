import React from 'react'
import Header from './Header'
import { createPortal } from 'react-dom'


export default function Portal() {
    {
        createPortal(<Header/>,document.getElementById('Hdr'))
    }
  return (
    <div>
      Learning portals for react
    </div>
  )
}
