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
    <div className="mx-auto mt-10 lg:mx-0 text-left ">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 lg:flex lg:gap-x-12 justify-end">
        {navItems.map((item) => (
          <a key={item.name} href={item.href}>{item.name}</a>
        ))}
      </div>
    </div>
  )
}

export default Navigation;