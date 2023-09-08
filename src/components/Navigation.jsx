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
function Navigation ({ setCurrentPage }) {
  function handleClick(e, page) {
    e.preventDefault();
    setCurrentPage(page);
  }
  return (
    <div className="mx-auto mt-10 lg:mx-0 text-left ">
      <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:flex lg:gap-x-12 md:justify-start lg:justify-end">
        {navItems.map((item) => (
          <a className="text-base" onClick={(e) => handleClick(e, item.name)} key={item.name} href={item.href}>{item.name}</a>
        ))}
      </div>
    </div>
  )
}

export default Navigation;