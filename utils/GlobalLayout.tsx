import Navbaar from '@/components/ReusableComponents/Navbar'
import React from 'react'

interface globalLayoutProps{
    children:React.ReactNode
}
const GlobalLayout:React.FC<globalLayoutProps> = ({children}) => {
  return (
    <div>
        <Navbaar />
<main>{children} </main>
    </div>
  )
}

export default GlobalLayout
