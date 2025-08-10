import { IoSearch } from "react-icons/io5";
const Search = () => {
  return (

<div className="flex justify-center items-center w-[100%] h-20 gap-2">


    
  <input type="text" placeholder="Search"  className="w-[75%] input" />
    <IoSearch className="bg-sky-400 rounded-2xl text-4xl p-2"/>


</div>

  )
}
export default Search       