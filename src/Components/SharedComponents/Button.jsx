import PropTypes from "prop-types";

const Button = ({children , onclick}) => {
  return (
    <button
          className="hover:bg-[#F2881F] transition-all duration-500 cursor-pointer hover:translate-y-[-10px]
    px-5 py-1  text-white text-[20px] flex items-center justify-between w-[160px] relative
    before:content-[''] before:
    
    "
          onClick={onclick}>
      {children}
    </button>
  )
}



// ProtoType

Button.propTypes=
{
    children: PropTypes.node,
    onclick: PropTypes.func
}

export default Button
