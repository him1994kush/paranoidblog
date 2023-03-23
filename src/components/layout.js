import React from 'react'
import Footer from './footer'
import Header from './header'

const Layout = ({ children }) => {
  return (
    <main className='bg-white-new'>
      <div className="w-2/3 mx-auto">
        <Header />
        {children}
        <Footer />
      </div>
    </main>
  )
}

export default Layout