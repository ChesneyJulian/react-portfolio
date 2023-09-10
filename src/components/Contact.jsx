
export default function Contact() {
  const emailValidation = document.getElementById('email-validation')
  const instruction = document.getElementById('instruction')
  const validateEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

  const checkInput = (inputItem) => {
    if (!(document.getElementById(`${inputItem}`).value)) {
     instruction.innerHTML = `All fields are required.`;
    } else {
      instruction.innerHTML = ``;
    }

    if (inputItem === 'email' && (document.getElementById(`${inputItem}`).value)) {
      if (validateEmail.test(document.getElementById(`${inputItem}`).value) === false) {
        emailValidation.innerHTML = `Please enter a valid email.`;
      } else {
        emailValidation.innerHTML = ``;
      }
    }
  }

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
                  onBlur={() => checkInput('name')}
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
                  onBlur={() => checkInput('email')}
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
                  onBlur={() => checkInput('message')}
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
          <p className="text-gray-400 m-2" id="instruction"></p>
          <p className="text-gray-400 m-2" id="email-validation"></p>
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