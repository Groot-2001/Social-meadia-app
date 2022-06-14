import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./Home.css"

export default function Home() {
  return (
    <>
    <Topbar/>
    <div className="homecontainer">
      <Sidebar/>
      <Feed/>
      <Rightbar/>
    </div>
    </>
  )
}
