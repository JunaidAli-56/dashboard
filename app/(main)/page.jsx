'use client'

import TaskBox from "../components/TaskBox/TaskBox"
import Tab from "../components/TabBar/Tab"

export default function Home(props) {
  const { children, value, index, ...other } = props;
  return (
    <>
      <div className="container-fluid p-lg-5 p-md-4 p-sm-4 main-container">
        <div className="row ">
          <TaskBox/>
        </div>
        <div className="row">
          <Tab />
        </div>
        {/* <div className="row py-4 component-row">
          Extra
        </div> */}
      </div>
    </>
  )
}
