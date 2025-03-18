import React from 'react'
import { NavLink, Outlet } from 'react-router'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { HiBars3, HiXMark } from 'react-icons/hi2'
import { HiBell, HiSearch } from 'react-icons/hi'
import { FaShoppingCart } from 'react-icons/fa'
import Avatar from '/src/assets/avatar.png'

const Header = () => {
  const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Shop', href: '/shop', current: false },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <>
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 ">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <HiBars3 aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <HiXMark aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <span className='h-8 text-white'>my-pro</span>
            </div>
           
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className = {({isActive})=>isActive ? " bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"  : " text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"}>
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>  
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className='relative me-5 sm:block hidden'>
              <HiSearch className='h-8 w-6 absolute left-0 text-gray-500 mx-1  border-r'/>
              <input type="search" className='bg-gray-300  rounded-lg  w-full h-8 text-center' placeholder='search here' name="search"/>
            </div>
            <div className='hidden sm:block'>
            <NavLink to='/register'
                    className = {({isActive})=>isActive ? " bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"  : " text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"}>
                    Register
                  </NavLink>
                  <NavLink to='/login'
                    className = {({isActive})=>isActive ? " bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"  : " text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"}>
                    Login
                  </NavLink>
            </div>
               
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden me-3"
            >
              <span className="absolute -inset-1.5" />
              <FaShoppingCart aria-hidden="true" className="size-9" />
              <span className="bg-red-700 text-white px-2  rounded-2xl absolute -top-2 -right-4 ">0</span>
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img src={Avatar} className="size-8 rounded-full" />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    My Orders
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({isActive})=>isActive ? "block rounded-md px-3 py-2 text-base font-medium bg-gray-900 text-white" : "block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white" }
            >
              {item.name}
            </NavLink>
          ))}
           <div className='sm:hidden block'>
            <NavLink to='/register'
                    className = {({isActive})=>isActive ? "block bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"  : "block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"}>
                    Register
                  </NavLink>
                  <NavLink to='/login'
                    className = {({isActive})=>isActive ? "block bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"  : "block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"}>
                    Login
                  </NavLink>
            </div>

            <div className='relative me-5 block sm:hidden'>
              <HiSearch className='h-8 w-6 absolute left-0 text-gray-500 mx-1  border-r'/>
              <input type="search" className='bg-gray-300 rounded-lg  w-full h-8'  placeholder='search here' name="search"/>
            </div>
        </div>
      </DisclosurePanel>
    </Disclosure>

        <Outlet/>
    </>
  )
}

export default Header
