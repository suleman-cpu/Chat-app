import { useState } from "react";

import { IoSearch } from "react-icons/io5";

import  useGetConversation  from "../../hooks/useGetConversation"
import useConversation from "../../zustand/useConversations";

import toast from "react-hot-toast";

const Search = () => {

  const [search, setsearch] = useState("")

  const {conversations} = useGetConversation();

  const {setSelectedConversation} =useConversation();

  function handleChange(e) {

    setsearch(e.target.value)

  }
  
  function handleSearch(e) {


    if(search===""){
      return;
    }

    if(2 >= search.length){
    
      toast.error("Search term must be at least 3 characters long")

    }

    const person = conversations.find((e)=>{
      return e.fullname.toLowerCase().includes(search.toLowerCase())
    })
    
   if(person){
    setSelectedConversation(person)
   }else toast.error("No such user found!");
  }

     const handleKeyDown = (e)=>{
    if(e.key==="Enter"){
      handleSearch()
    }}

  return (

<div className="flex justify-center items-center w-[100%] h-20 gap-2">


    
  <input type="text" placeholder="Search"  className="w-[75%] input" onChange={handleChange}/>
    <IoSearch className="bg-sky-400 rounded-2xl text-4xl p-2" onClick={handleSearch} onKeyDown={handleKeyDown}/>


</div>

  )
}
export default Search       