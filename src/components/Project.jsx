function Project() {

  return (
    <>
        <div className="container relative h-auto w-64">
          <img className="aspect-square object-cover rounded z-10" src="../../public/images/maintenance-manatee.png"></img>
          <div className="overlay opacity-0 hover:opacity-70 bg-gray-700 absolute top-0 h-full w-full transition duration-300 ease-in-out">
            <div className="flex flex-row justify-center items-center h-full w-full">
              <p className="opacity-100 text-center">Maintenance Manatee</p>
            </div>
          </div>
        </div>
    </>
  )
}

export default Project