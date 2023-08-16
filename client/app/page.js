
import LeftNavbar from "@/components/home/LeftNavbar"
import Navbar from "@/components/home/Navbar"
import Main from "@/components/home/Main"
import RightNavbar from "@/components/home/RightNavbar"


export default function Home() {
  return (
    <>
      <Navbar></Navbar>

      <div className="flex flex-row mt-12 w-11/12 mx-auto ">
        <div className="basis-1/6">
         <LeftNavbar></LeftNavbar>
        </div>
        <div className="basis-4/6">
         <Main></Main>
        </div>    
        <div className="basis-1/6">
          <RightNavbar></RightNavbar>
        </div>
        
          

      </div>
      
      
      

    </>
    
  )
}
