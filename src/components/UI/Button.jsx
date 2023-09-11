function Button (props) {
  return (
    <button
    type={props.type}
    onClick={(e) => e.preventDefault()}
    className="py-2 px-4 bg-[#057d69] hover:bg-[#05ab8f] rounded my-8" >
      {props.title}
    </button>
  )
}

export default Button;