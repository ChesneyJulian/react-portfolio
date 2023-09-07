import Navigation from './Navigation'


function Header () {
  return (
    <>
      <div className="mx-auto px-6 lg:px-8 grid grid-cols-12">
        <div className="mx-auto container lg:mx-0 col-span-12 lg:col-span-6">
          <h1 className="text-3xl font-medium sm:text-5xl">Chesney Julian</h1>
          <h3 className="mt-6 text-2xl">
            Full Stack Web Developer
          </h3>
        </div>
        <div className='col-span-12 lg:col-span-6'>
          <Navigation />
        </div>
      </div>
    </>
  )

}

export default Header;