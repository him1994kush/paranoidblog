import React from 'react'

const Header = () => {
  return (
    <>
      <div className="flex justify-between font-secondary pt-6">
        <div className="logo">My Blogs</div>
        <div className="menu_list">
          <ul className='flex gap-x-20 text-lg font-semibold'>
            <li>Home</li>
            <li>Blogs</li>
            <li>Shop</li>
            <li>About</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header