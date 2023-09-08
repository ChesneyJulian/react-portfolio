import resumePdf from '/assets/Resume.pdf'

function Resume() {
  return (
    <div>
      <a href={resumePdf} download='Chesney-Julian-Resume.pdf' className=''>
        <button
        type="submit"
        onClick={(e) => e.preventDefault()}
        className="py-2 px-4 bg-[#057d69] hover:bg-[#05ab8f] rounded my-8" >
          Download Resume
        </button>
      </a>
    </div>
  )
}

export default Resume