
export default function Contact() {
  return (
    <div>
      <h3 className='text-3xl font-semibold mb-12'>Contact Me</h3>
      <form>
        <div className="space-y-12 grid grid-cols-12">
          <div className="col-span-full lg:col-span-7">
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 leading-7">
              Your Name
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="block w-full rounded bg-gray-200 text-gray-900 border-0 p-1.5 ring-1 ring-inset ring-[#11f0b5] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#11f0b5] sm:text-sm sm:leading-7"
                  />
              </div>
            </label>
          </div>
          <div className="col-span-full lg:col-span-7">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 leading-7">
              Email Address
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded bg-gray-200 text-gray-900 border-0 p-1.5 ring-1 ring-inset ring-[#11f0b5] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#11f0b5] sm:text-sm sm:leading-7"
                  />
              </div>
            </label>
          </div>
          <div className="col-span-full">
            <label className="block text-sm font-medium text-gray-300 leading-7">
              Message
              <div className="mt-2">
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  type="text"
                  className="block w-full rounded bg-gray-200 text-gray-900 border-0 p-1.5 ring-1 ring-inset ring-[#11f0b5] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#11f0b5] sm:text-sm sm:leading-7"
                  defaultValue={''}
                  />
              </div>
            </label>
          </div>
        </div>
        <div>
          <button
          type="submit"
          onClick={(e) => e.preventDefault()}
          className="py-2 px-4 bg-[#057d69] hover:bg-[#05ab8f] rounded my-8" >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}