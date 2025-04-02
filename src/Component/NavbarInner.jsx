import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'All', href: '#all', current: true },
  { name: 'Webdesign', href: '#webdesign', current: false },
  { name: 'Web Development', href: '#', current: false },
  { name: 'Games', href: '#games', current: false },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="w-full    ">
      <div className="w-full    sm:px-6 lg:px-8 ">
        <div className="relative flex h-12 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? ' text-blue-700  border-b-2 border-l-2 border-black' : 'text-gray-300  border-b-4 border-l-4 border-black  hover:opacity-60',
                      'rounded-md px-3 py-2 text-sm font-medium bg-gray-800',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>


    </Disclosure>
  )
}
