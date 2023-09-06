const navItems = [
  {
    name: 'About Me',
    href: '/about'
  },
  {
    name: 'Portfolio',
    href: '/portfolio'
  },
  {
    name: 'Contact Me',
    href: '/contact'
  },
  {
    name: 'Resume',
    href: '#'
  },
]

function Navigation () {
  
  return (
    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 md:flex lg:gap-x-10">
        {navItems.map((item) => (
          <a key={item.name} href={item.href}>{item.name}</a>
        ))}
      </div>
    </div>
  )
}

export default Navigation;