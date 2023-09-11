import { useState } from 'react'
import { Instruction, EmailInvalid } from './UI/Informants'
import Button from './UI/Button'

export default function Contact() {
  const [ nameValue, setNameValue ] = useState('');
  const [ emailValue, setEmailValue ] = useState('');
  const [ messageValue, setMesssageValue ] = useState('');
  const [ valid, setValid ] = useState(true);
  const [ insDisplay, setInstructionDisplay ] = useState(true);

  const checkInsDisplay = () => {
    if (insDisplay === false ) {
      return <Instruction />
    }
  }
  
  const checkEmailDisplay = () => {
    if (valid === false) {
      return <EmailInvalid />
    }
  }

  const validateEmail = (str) => {
    setEmailValue(str);
    if (/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(str) === true) {
      setValid(true);
    } else {
      setValid(false);
    }
  }
  const checkInput = () => {
    if ( !nameValue || !emailValue || !messageValue) {
      setInstructionDisplay(false);
    } else {
      setInstructionDisplay(true);
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
                  value={nameValue}
                  onChange={(e) => setNameValue(e.target.value)}
                  onBlur={() => checkInput()}
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
                  value={emailValue}
                  onChange={(e) => validateEmail(e.target.value)}
                  onBlur={() => checkInput()}
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
                  value={messageValue}
                  onChange={(e) => setMesssageValue(e.target.value)}
                  onBlur={() => checkInput()}
                  id="message"
                  name="message"
                  rows={3}
                  type="text"
                  className="block w-full rounded bg-gray-200 text-gray-900 border-0 p-1.5 ring-1 ring-inset ring-[#11f0b5] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#11f0b5] sm:text-sm sm:leading-7"
                  
                  />
              </div>
            </label>
          </div>
        </div>
        <div>
          {checkInsDisplay()}
          {checkEmailDisplay()}
          <Button type='submit' title='Submit'/>
        </div>
      </form>
    </div>
  )
}