// array of items and hrefs to use for nav bar
const navItems = [
  {
    name: 'About',
    href: '/about'
  },
  {
    name: 'Portfolio',
    href: '/portfolio'
  },
  {
    name: 'Contact',
    href: '/contact'
  },
  {
    name: 'Resume',
    href: '#'
  },
]

// eslint-disable-next-line react/prop-types
function Navigation ({ setCurrentPage, currentPage }) {

  // function to handle nav link clicks and set the current page to the clicked link name
  function handleClick(e, page) {
    e.preventDefault();
    setCurrentPage(page);
  }

  // function to check if nav item is equal to current page and to render different styling if so
  function checkCurrentNav (item, currentPage) {
    if (item.name === currentPage) {
      return (
        <a className="text-xl text-[#11f0b5]" onClick={(e) => handleClick(e, item.name)} key={item.name} href={item.href}>{item.name}</a>
      ) 
    } else {
      return (
        <a className="text-base text-gray-400 hover:text-[#057d69]" onClick={(e) => handleClick(e, item.name)} key={item.name} href={item.href}>{item.name}</a>
      )
    }
  }
  // component to be returned as Navigation
  return (
    <div className="mx-auto mt-10 lg:mx-0 text-left ">
      <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:flex lg:gap-x-12 md:justify-start lg:justify-end">
        {navItems.map((item) => (
          checkCurrentNav(item, currentPage)
        ))}
      </div>
    </div>
  )
}

export default Navigation;