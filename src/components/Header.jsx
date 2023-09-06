import Navigation from './Navigation'

function Header () {
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-4xl font-medium sm:text-6xl">Chesney Julian</h1>
          <h3 className="mt-6 text-2xl">
            Full Stack Web Developer
          </h3>
        </div>
        <Navigation />
      </div>
    </>
  )

}

export default Header;