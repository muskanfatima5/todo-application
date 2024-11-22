import "./style/style.css"
import Task from "./component/todo"
import Image from "next/image"

function Page(){

      return(
        <div className="main">
          <div className="content">
          <div className="main-heading">
            <h1>My To-Do-List</h1>
          </div>
          <Task />
          </div>
          <div className="image">
           <Image src="/images/pic1.jpeg" alt="to-do" width={500} height={350}/>
           </div>
           </div>
      )    

}export default Page
