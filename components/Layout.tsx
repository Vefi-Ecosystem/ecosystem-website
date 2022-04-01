import React from 'react'
import NavBar from '../components/NavBar'

interface Props{
    children: string
}

function Layout<Props>({ children }) {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
    </div>
  )
}

export default Layout