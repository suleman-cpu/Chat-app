import Sidebar from "../../components/sidebar/Sidebar"
import { useEffect } from "react"
import MassageContainer from "../../components/massage/MassageContainer"
import { useSocketcontext } from "../../context/Socket.context"
const Home = () => {
  const {socket} = useSocketcontext();
  // useEffect(() => {
  //   return () => {
  //     console.log(socket)
  //     socket.close();
  //   }
  // }, [socket])
  
  return (
    <div data-theme="night" className="bg-transparent h-[100vh] flex justify-center items-center">

      <div className="h-[98vh] w-[94vw] md:h-[90vh] md:w-[90vw]  bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-90 border border-gray-100 flex">
        <Sidebar />
        <MassageContainer />
      </div>
    </div>
  )
}
export default Home