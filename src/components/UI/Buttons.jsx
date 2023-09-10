export default function SubmitBtn () {
  return (
    <button
    type="submit"
    onClick={(e) => e.preventDefault()}
    className="py-2 px-4 bg-[#057d69] hover:bg-[#05ab8f] rounded my-8" >
      Submit
    </button>
  )
}
