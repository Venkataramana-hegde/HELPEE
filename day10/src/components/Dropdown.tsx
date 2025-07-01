import { useState } from "react"
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const Dropdown = () => {
const [dropDown, setDropDown] = useState<boolean>(false);
const [dropDownOption, setDropDownOption] = useState<string>("Dropdown")

const handleClick = () => {
    setDropDown((prevState) => !prevState)
}

const dropClick = (label: string) => {
    setDropDownOption(label);
    setDropDown(false)
}

const dropdownOptions = [
    {id: 1, label: "About"},
    {id: 2, label: "Home"},
    {id: 3, label: "Careers"},
    {id: 4, label: "Contact"}
]

  return (
    <div className="flex flex-col justify-center items-center h-screen">
        <div className="w-50 border h-10 flex justify-between items-center p-3 rounded-sm" onClick={handleClick}>
            <p>{dropDownOption}</p>
            {dropDown ? (<span><FaCaretUp /></span>) : (<span><FaCaretDown /></span>)}
        </div>
        {dropDown ? (<div className="border rounded-sm absolute top-88 w-50 flex flex-col items-center justify-center">
            {dropdownOptions.map((option) => (<p onClick={() => dropClick(option.label)} className="hover:bg-gray-200 hover:rounded:md w-full p-2" key={option.id}>{option.label}</p>))}
        </div>) : ""}
    </div>
  )
}

export default Dropdown