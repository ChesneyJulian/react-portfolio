function Project() {

  return (
    <>
      <section className=" h-64 w-64">
        <div className="container relative h-full w-full">
          <img className="aspect-square object-cover rounded z-10" src="../../public/images/maintenance-manatee.png"></img>
          <div className="overlay opacity-0 hover:opacity-50 bg-blue-500 absolute top-0 h-full w-full transition duration-300 ease-in-out">
            <p>Maintenance Manatee</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Project