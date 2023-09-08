import resumePdf from '/assets/Resume.pdf'

function Resume() {
  return (
    <>
      <h3 className='text-3xl font-semibold mb-8'>Resume</h3>
      <div className='mb-8'>
        <a href={resumePdf} download='Chesney-Julian-Resume.pdf' className=''>
          <button
          type="download"
          className="py-2 px-4 bg-[#057d69] hover:bg-[#05ab8f] rounded my-8" >
            Download Resume
          </button>
        </a>
      </div>
      <div>
        <h4 className='text-2xl my-8 font-semibold'>Skills</h4>
        <ul className='mx-4 grid md:grid-flow-col md:grid-rows-4 gap-4 text-gray-400'>
          <li className="font-medium">&#x2713; JavaScript</li>
          <li className="font-medium">&#x2713; HTML</li>
          <li className="font-medium">&#x2713; CSS</li>
          <li className="font-medium">&#x2713; ReactJS</li>
          <li className="font-medium">&#x2713; Node.js</li>
          <li className="font-medium">&#x2713; Express.js</li>
          <li className="font-medium">&#x2713; MySQL</li>
          <li className="font-medium">&#x2713; NoSQL</li>
          <li className="font-medium">&#x2713; GraphQL</li>
          <li className="font-medium">&#x2713; MongoDB</li>
          <li className="font-medium">&#x2713; REST APIs</li>
          <li className="font-medium">&#x2713; Bootstrap</li>
          <li className="font-medium">&#x2713; Tailwind CSS</li>
          <li className="font-medium">&#x2713; GitHub</li>
          <li className="font-medium">&#x2713; VS Code</li>
        </ul>
      </div>
    </>
  )
}

export default Resume