
const Button = ({title, extraClass = ""}) => {
    return (
        <button className={`py-2.5 rounded-[100px] px-4.5 bg-[#8BAC3E] text-white text-sm leading-5.5 text-[14px] ${extraClass}`}>
            {title}</button>

    )
}

export default Button